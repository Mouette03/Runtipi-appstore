import { expect, test, describe } from "bun:test";
import { appInfoSchema, dynamicComposeSchema } from '@runtipi/common/schemas'
import { fromError } from 'zod-validation-error';
import fs from 'node:fs'
import path from 'node:path'
import { type } from "arktype";

const getApps = async () => {
  const appsDir = await fs.promises.readdir(path.join(process.cwd(), 'apps'))

  const appDirs = appsDir.filter((app) => {
    const stat = fs.statSync(path.join(process.cwd(), 'apps', app))
    return stat.isDirectory()
  })

  return appDirs
};

const getFile = async (app: string, file: string) => {
  const filePath = path.join(process.cwd(), 'apps', app, file)
  try {
    const file = await fs.promises.readFile(filePath, 'utf-8')
    return file
  } catch (err) {
    return null
  }
}

describe("each app should have the required files", async () => {
  const apps = await getApps()

  for (const app of apps) {
    const files = ['config.json', 'docker-compose.json', 'metadata/logo.jpg', 'metadata/description.md']

    for (const file of files) {
      test(`app ${app} should have ${file}`, async () => {
        const fileContent = await getFile(app, file)
        expect(fileContent).not.toBeNull()
      })
    }
  }
})

describe("each app should have a valid config.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid config.json`, async () => {
      const fileContent = await getFile(app, 'config.json')
      const parsed = appInfoSchema.omit('urn')(JSON.parse(fileContent || '{}'))

      if (parsed instanceof type.errors) {
        const validationError = fromError(parsed.summary);
        console.error(`Error parsing config.json for app ${app}:`, validationError.toString());
      }

      expect(parsed).toBeDefined()
    })
  }
})

describe("each app should have a valid docker-compose.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid docker-compose.json`, async () => {
      const fileContent = await getFile(app, 'docker-compose.json')
      const parsed = dynamicComposeSchema(JSON.parse(fileContent || '{}'))

      if ( parsed  instanceof type.errors) {
        const validationError = fromError(parsed);
        console.error(`Error parsing docker-compose.json for app ${app}:`, validationError.toString());
      }

      expect(parsed).toBeDefined()
    })
  }
});

describe("each app docker-compose.json should have at most one isMain service", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} docker-compose.json has at most one isMain service`, async () => {
      const fileContent = await getFile(app, 'docker-compose.json')
      if (!fileContent) return
      const compose = JSON.parse(fileContent)
      const services: Array<{ isMain?: boolean }> = compose?.services ?? []
      const mainServices = services.filter((s) => s.isMain === true)
      expect(mainServices.length).toBeLessThanOrEqual(1)
    })
  }
})

describe("each app docker-compose.yml should have at most one x-runtipi.is_main service", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} docker-compose.yml has at most one x-runtipi.is_main service`, async () => {
      const fileContent = await getFile(app, 'docker-compose.yml')
      if (!fileContent) return
      const yaml = await import('js-yaml')
      const compose = yaml.load(fileContent) as Record<string, unknown> | null
      if (!compose) return
      const rawServices = compose?.services
      const services: Array<Record<string, unknown>> = Array.isArray(rawServices)
        ? rawServices
        : typeof rawServices === 'object' && rawServices !== null
          ? Object.values(rawServices as Record<string, unknown>)
          : []
      const mainServices = services.filter(
        (s) => typeof s === 'object' && s !== null &&
          typeof (s as Record<string, unknown>)['x-runtipi'] === 'object' &&
          ((s as Record<string, Record<string, unknown>>)['x-runtipi'])?.['is_main'] === true
      )
      expect(mainServices.length).toBeLessThanOrEqual(1)
    })
  }
})

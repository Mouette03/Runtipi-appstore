# apps-policy.json — Auto-update policy reference

This file documents the schema used by `apps-policy.json`, which controls
how `.github/workflows/update-apps.yml` decides whether a Docker image
should be auto-updated, and how aggressively.

## Structure

```json
{
  "_default": {
    "lock": "patch"
  },
  "<app-name>": {
    "images": {
      "<service-name>": {
        "lock": "minor",
        "versionScheme": "semver",
        "_comment": "optional free-text note, ignored by the script"
      }
    }
  }
}
```

- `<app-name>` must match the directory name under `apps/`.
- `<service-name>` must match the service name in that app's
  `docker-compose.yml` / `docker-compose.json`.
- Any service without an explicit entry falls back to `_default.lock`
  (currently `"patch"`) and `versionScheme: "semver"`.

## `lock` values

| Value    | Behavior                                                         |
|----------|--------------------------------------------------------------------|
| `none`   | Never a valid upgrade. Auto-update is disabled for this service; no network call is made to check for new tags. |
| `major`  | Any strictly newer version is accepted, including major version bumps. |
| `minor`  | Same major version required; any higher minor or patch is accepted. |
| `patch`  | Same major **and** minor version required; only a higher patch is accepted. |

An unrecognized `lock` value (e.g. a typo) is treated as **`"none"`**
(auto-update disabled), not as the most permissive option — failing safe
is preferable to silently allowing an unintended major-version jump
because of a config mistake. A warning is still printed to the workflow
log so the mistake is visible and can be corrected.

## `versionScheme` values

| Value    | Behavior                                                         |
|----------|--------------------------------------------------------------------|
| `semver` | (default) Standard `MAJOR.MINOR.PATCH` comparison, governed by `lock`. |
| `calver` | The leading number is treated as a **year** (e.g. `YYYY.MM.P`), not a stable SemVer major. Any strictly newer date is accepted as an upgrade, regardless of `lock` (except `lock: "none"`, which still disables updates). Use this for images that roll their leading version number every year (e.g. Home Assistant). |

## Supported tag formats

The workflow can resolve updates for the following tag shapes, on
`docker.io`, `ghcr.io`, `lscr.io` and `codeberg.org` alike:

- **SemVer**: `1.2.3`, `v1.2.3`, `1.2.3-alpine` (prefix/suffix preserved).
- **CalVer**: `2025.1.0`, `2026.8.2` (with `versionScheme: "calver"`).
- **LinuxServer.io hash+build**: `<hash>-lsNN` (e.g. `d67e71cc-ls82`) —
  compared by the numeric build counter, not the hash itself. This works
  the same way regardless of registry (docker.io, ghcr.io, lscr.io).
- **GHCR commit-hash**: `sha-<hex>` — resolved via the GitHub Packages API
  (newest published version wins). GHCR only.

## Known limitations

- **Bare hash tags** with no `-lsNN` build suffix (e.g. `version-d67e71cc`,
  or a hash tag with nothing else attached) are **not recognized** and
  will never be proposed as an upgrade candidate, on any registry. A raw
  hash carries no inherent ordering, so the script cannot tell whether one
  is "newer" than another from the string alone. If an image you maintain
  publishes tags this way, check whether an equivalent `-lsNN` tag exists
  for the same image (common for LinuxServer.io images) and use that
  instead in `docker-compose.yml`.
- **Floating tags** (`latest`, `stable`, `nightly`, a bare major like `17`)
  are never treated as upgradeable — there is no way to detect drift
  without pulling and inspecting the image itself, which this workflow
  does not do.

## Adding a new app

1. Add the app under `apps/<app-name>/` as usual.
2. Add an entry to this file for its primary service (and any secondary
   services with different lock requirements), or leave it out entirely
   to inherit `_default.lock`.
3. If the primary service isn't flagged via `isMain` (JSON compose) or
   `x-runtipi.is_main` (YAML compose), the workflow falls back to treating
   the sole service as primary automatically — only relevant if the app
   truly has just one service.

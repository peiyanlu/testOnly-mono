import { defineConfig, PnpmWorkspacesProject, type UserConfig } from '@peiyanlu/release'


export default defineConfig({
  project: new PnpmWorkspacesProject({
    mode: 'independent',
    scope(name) {
      return name.replace('mono-', '')
    },
  }),
} satisfies UserConfig)

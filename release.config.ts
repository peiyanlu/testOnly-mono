import { defineConfig, GithubHosting, PnpmWorkspacesProject } from '@peiyanlu/release'


export default defineConfig({
  project: new PnpmWorkspacesProject({
    mode: 'independent',
    scope(name) {
      return name.replace('mono-', '')
    },
  }),
  hosting: new GithubHosting(),
  bump: {
    extraScopes: [ 'deps' ],
  },
  publish: {
    cleanPublish: true,
    ignoreFields: [],
    keepScripts: [],
    cleanReadme: true,
  },
})

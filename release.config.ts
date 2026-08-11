import { defineConfig, type UserConfig } from '@peiyanlu/release'


export default defineConfig({
  isMonorepo: true,
  packages: [ 'test-a', 'test-b' ],
  getPkgDir: (pkg) => `packages/${ pkg }`,
  toTag: (pkg: string, version: string) => `${ pkg }@${ version }`,
  changelog: {
    tagPrefix: (pkg: string) => `${ pkg }@`,
  },
} satisfies UserConfig)

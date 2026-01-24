import { defineConfig, type UserConfig } from '@peiyanlu/release'


export default defineConfig({
  isMonorepo: true,
  packages: [ 'test-a', 'test-b' ],
  getPkgDir: (pkg) => `packages/${ pkg }`,
  toTag: (pkg: string, version: string) => `${ pkg }@${ version }`,
  changelogTagPrefix: (pkg: string) => `${ pkg }@`,
  
  git: {
    requireWorkDirClean: false,
    requireRepository: false,
  },
} satisfies UserConfig)

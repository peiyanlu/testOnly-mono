import { log } from '@clack/prompts'
import { styleText } from '@peiyanlu/node-utils'
import type { LoggerMessage } from '@peiyanlu/release'
import { inspect } from 'node:util'


const test = {
  checkout: { branch: 'release-branch' },
  bump: {},
  maintenanceBranch: {},
  publish: {},
}

const a = {
  runner: '### ✨ 新功能\n' +
    '\n' +
    '* **cli:** 支持通过 `--config.<path> <value>` 覆盖配置项 ([8b0c875](https://github.com/peiyanlu/release/commit/8b0c875c568ed092a13e1368bff827ac0ad0e1d2))\n' +
    '* **monorepo:** 固定模式下按破坏性变更决定是否升级无变更项目 ([3c2aa4c](https://github.com/peiyanlu/release/commit/3c2aa4c43b3d3120c7f99efe05470caf60a25554))\n' +
    '\n' +
    '### ♻️ 代码重构\n' +
    '\n' +
    '* 迁移提示工具至 cli-utils 并用 styleText 替代 ansis ([90e56a9](https://github.com/peiyanlu/release/commit/90e56a912cc23a3a4a8bfe42f245bbbff6d9e4d4))',
  
  local: '### ✨ 新功能\n\n* **cli:** 支持通过 `--config.<path> <value>` 覆盖配置项 ([8b0c875](https://github.com/peiyanlu/release/commit/8b0c875c568ed092a13e1368bff827ac0ad0e1d2))\n* **monorepo:** 固定模式下按破坏性变更决定是否升级无变更项目 ([3c2aa4c](https://github.com/peiyanlu/release/commit/3c2aa4c43b3d3120c7f99efe05470caf60a25554))\n\n### ♻️ 代码重构\n\n* 迁移提示工具至 cli-utils 并用 styleText 替代 ansis ([90e56a9](https://github.com/peiyanlu/release/commit/90e56a912cc23a3a4a8bfe42f245bbbff6d9e4d4))',
}


log.message(JSON.stringify(test, null, 2))
log.message(JSON.stringify(a, null, 2))

console.log('================================================================================================')

console.log(JSON.stringify(test, null, 2))
console.log(JSON.stringify(a, null, 2))

console.log('================================================================================================')

log.message(inspect(test))
log.message(inspect(a))

console.log('================================================================================================')

console.log(inspect(test))
console.log(inspect(a))

console.log('================================================================================================')


const defaultPrinter = ({ dryRun, stage, message, color }: LoggerMessage) => {
  console.log(`${ dryRun ? styleText.yellow`[dry-run]` : '' }${ color(`[${ stage }]`) }:`, message)
}

defaultPrinter({ message: test, color: styleText.red, stage: 'aaa' })
defaultPrinter({ message: a, color: styleText.red, stage: 'aaa' })

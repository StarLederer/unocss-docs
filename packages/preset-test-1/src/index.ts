import type { Preset, PresetOptions } from '@unocss/core'
import rules from './rules'

export interface PresetMiniOptions extends PresetOptions {}

export const presetMini = (options: PresetMiniOptions = {}): Preset<{}> => {
  return {
    name: '@unocss-docs/test-preset-1',
    theme: {},
    rules,
    variants: [],
    options,
    postprocess: [],
    preflights: [],
    prefix: '',
  }
}

export default presetMini

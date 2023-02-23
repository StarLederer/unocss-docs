import type { Preset, PresetOptions } from '@unocss/core'

export interface PresetMiniOptions extends PresetOptions {}

export const presetMini = (options: PresetMiniOptions = {}): Preset<{}> => {
  return {
    name: '@unocss-docs/test-preset-2',
    theme: {},
    rules: [],
    variants: [],
    options,
    postprocess: [],
    preflights: [],
    prefix: '',
  }
}

export default presetMini

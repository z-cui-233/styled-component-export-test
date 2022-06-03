import multiInput from 'rollup-plugin-multi-input';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import { visualizer } from 'rollup-plugin-visualizer';

const isProductionBuild = process.env.NODE_ENV === 'production';

export default {
  input: [
    'Button.tsx',
  ],
  output: {
    format: 'esm',
    dir: 'dist',
  },
  external: Object.keys(pkg.dependencies || {}),
  plugins: [
    typescript(),
    multiInput(),
    isProductionBuild && terser(),
    isProductionBuild && visualizer(),
  ],
};

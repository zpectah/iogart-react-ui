import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

const packageRollupBundler = (key) => {
  const dir = `../../dist/${key}`;

  return {
    input: ['src/index.ts'],
    output: [
      {
        dir,
        entryFileNames: '[name].js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript(),
      babel({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
    external: ['react'],
  };
};

export default packageRollupBundler;

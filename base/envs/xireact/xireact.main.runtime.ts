import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain, UseTypescriptModifiers } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { XireactAspect } from './xireact.aspect';
//import {
//  previewConfigTransformer,
//  devServerConfigTransformer
//} from './webpack/webpack-transformers';
//import {
//  devConfigTransformer,
//  buildConfigTransformer,
//} from "./typescript/ts-transformer";

export class XireactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    //const webpackModifiers: UseWebpackModifiers = {
    //  previewConfig: [previewConfigTransformer],
    //  devServerConfig: [devServerConfigTransformer],
    //};

    //const tsModifiers: UseTypescriptModifiers = {
    //  devConfig: [devConfigTransformer],
    //  buildConfig: [buildConfigTransformer],
    //};

    const XireactEnv = react.compose([
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.useTypescript(tsModifiers),  // note: this cannot be used in conjunction with react.overrideCompiler
      // react.useWebpack(webpackModifiers),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      //react.useEslint({
      //  transformers: [
      //  (config) => {
      //    config.setRule('no-console', ['error']);
      //    return config;
      //    }
      //  ]
      //}),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      //react.usePrettier({
      //  transformers: [
      //    (config) => {
      //      config.setKey('tabWidth', 2);
      //      return config;
      //    }
      //  ]
      //}),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        dependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@xieffect/base.theme.provider': '-',
        },
        devDependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@xieffect/base.theme.provider': '-',
        },
        peerDependencies: {
          '@mui/material': {
            version: '5.2.1',
            resolveFromEnv: true,
          },
          '@testing-library/react': {
            version: '^5.0.6',
            resolveFromEnv: true,
          },
          react: {
            version: '^17.0.2',
            resolveFromEnv: true,
          },
          'react-dom': {
            version: '^17.0.2',
            resolveFromEnv: true,
          },
          '@xieffect/base.theme.provider': {
            version: 'latest',
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(XireactEnv);
    return new XireactMain();
  }
}

XireactAspect.addRuntime(XireactMain);

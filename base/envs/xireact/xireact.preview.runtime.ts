import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// import { ThemeProvider } from 'xieffect/base.theme.provider'; 
import { XireactAspect } from './xireact.aspect';

export class XireactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const xireactPreviewMain = new XireactPreviewMain();

    // react.registerProvider([ThemeProvider]); 

    return xireactPreviewMain;
  }
}

XireactAspect.addRuntime(XireactPreviewMain);

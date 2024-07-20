import { readConfig, ConfigLoaderError } from "@web/config-loader";
import { IMimicConfig } from "../interfaces/IFileExtensions";
import { MediaBreakPointsValue } from "./mediaBreakpoints";
let mimicConfigDEFAULT: IMimicConfig;

mimicConfigDEFAULT = {
  extensions: [".html", ".js", ".astro", ".ts"],
  mediaBreakPointsValueOverride: {
    extrasmall: MediaBreakPointsValue.extrasmall,
    small: MediaBreakPointsValue.small,
    medium: MediaBreakPointsValue.medium,
    large: MediaBreakPointsValue.large,
    extralarge: MediaBreakPointsValue.extralarge,
  },
};

export async function LoadConfig(): Promise<IMimicConfig> {
  try {
    // will look for:
    // process.cwd() + 'my-project.config.mjs'
    // process.cwd() + 'my-project.config.cjs'
    // process.cwd() + 'my-project.config.js'
    let config: IMimicConfig = await readConfig("mimic.config");
    return config;
  } catch (error) {
    if (error instanceof ConfigLoaderError) {
      // If the error is a ConfigLoaderError it has a human readable error message
      // there is no need to print the stack trace.
      console.error(error.message);
      return mimicConfigDEFAULT;
    }
    console.error(error);
    return mimicConfigDEFAULT;
  }
}

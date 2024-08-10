import { readConfig, ConfigLoaderError } from "@web/config-loader";
import { IMimicConfig } from "../interfaces/IFileExtensions";
import { MediaBreakPointsValue } from "./mediaBreakpoints";
let mimicConfigDEFAULT: IMimicConfig;
export let mimicConfig: IMimicConfig;

mimicConfigDEFAULT = {
  extensions: [".html", ".js", ".astro", ".ts"]
};

export async function LoadConfig() {
  try {
    // will look for:
    // process.cwd() + 'my-project.config.mjs'
    // process.cwd() + 'my-project.config.cjs'
    // process.cwd() + 'my-project.config.js'
    mimicConfig = await readConfig("mimic.config");

    if (mimicConfig == null) {
      mimicConfig = mimicConfigDEFAULT;
    }
  } catch (error) {
    if (error instanceof ConfigLoaderError) {
      // If the error is a ConfigLoaderError it has a human readable error message
      // there is no need to print the stack trace.
      console.error(error.message);
      mimicConfig =  mimicConfigDEFAULT;
    }
    console.error(error);
    mimicConfig =  mimicConfigDEFAULT;
  }
}

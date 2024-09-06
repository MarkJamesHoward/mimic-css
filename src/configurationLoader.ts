import { readConfig, ConfigLoaderError } from "@web/config-loader";
import { IMimicConfig } from "../interfaces/IMimicConfig";
let mimicConfigDEFAULT: IMimicConfig;
export let mimicConfig: IMimicConfig;

mimicConfigDEFAULT = {
  extensions: [".html", ".js", ".astro", ".ts"],
  excludeFolders: ["node_modules", "dist"],
};

export function SetConfigForJestTesting(config?: IMimicConfig) {
  if (config !== undefined) {
    mimicConfig = config;
  }
}

export async function LoadConfig() {
  try {
    // will look for process.cwd() + 'my-project.config.mjs or cjs or js'
    mimicConfig = await readConfig("mimic.config");

    if (mimicConfig == null) {
      mimicConfig = mimicConfigDEFAULT;
    }

    if (mimicConfig.excludeFolders == null) {
      mimicConfig.excludeFolders = ["node_modules", "dist"];
    }

    if (mimicConfig.excludeFiles == null) {
      mimicConfig.excludeFiles = ["mimic.css"];
    }

    if (mimicConfig.extensions == null) {
      mimicConfig.extensions = [".html", ".js", ".astro", ".ts"];
    }
  } catch (error) {
    if (error instanceof ConfigLoaderError) {
      // If the error is a ConfigLoaderError it has a human readable error message
      // there is no need to print the stack trace.
      console.error(error.message);
      mimicConfig = mimicConfigDEFAULT;
    }
    console.error(error);
    mimicConfig = mimicConfigDEFAULT;
  }
}

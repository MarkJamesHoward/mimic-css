import { readConfig, ConfigLoaderError } from "@web/config-loader";
import { FileExtensions } from "../interfaces/IFileExtensions";
// Or as a commonjs module
// const { readConfig, ConfigLoaderError } = require('@web/config-loader');

export async function LoadConfig(): Promise<FileExtensions> {
  try {
    // will look for:
    // process.cwd() + 'my-project.config.mjs'
    // process.cwd() + 'my-project.config.cjs'
    // process.cwd() + 'my-project.config.js'
    let config: FileExtensions = await readConfig("mimic.config");
    return config;
  } catch (error) {
    if (error instanceof ConfigLoaderError) {
      // If the error is a ConfigLoaderError it has a human readable error message
      // there is no need to print the stack trace.
      console.error(error.message);
      return { extensions: [] };
    }
    console.error(error);
    return { extensions: [] };
  }
}

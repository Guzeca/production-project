import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
   const {mode, paths, isDev} = options;

   return { 
      mode: mode,
      entry: paths.entry,
      output: {
         filename: "[name].[contenthash:8].js",
         path: paths.build,
         clean: true
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolvers(),
      devtool: isDev ? 'inline-source-map': undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   }
}
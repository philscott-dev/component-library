const path = require('path')
const fs = require('fs')
const { merge } = require('webpack-merge')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    
    // 2) Path resolution in webpack from tsconfig 
    // https://github.com/storybookjs/storybook/issues/3291#issuecomment-686760728
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    // 1) Emotion v11 for Storybook fix
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    })
  },
}

// 1) Emotion v11 for Storybook fix
// https://stackoverflow.com/questions/65894711/module-not-found-error-cant-resolve-emotion-styled-base-when-running-story
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      )
    }
    currDir = dir
  }
}

import { ThemeProvider } from '@emotion/react'
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { theme } from 'theme'

export const Theme = (Story: () => StoryFnReactReturnType) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

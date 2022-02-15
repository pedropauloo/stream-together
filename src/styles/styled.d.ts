import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      white: string
      gray: string

      background: string
      'text-primary': string
      'text-secondary': string
      'text-white': string
      'text-dark': string
    }
  }
}

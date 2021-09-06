import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const fontFamily = [
  'ArialNew',
  'Rubik',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: fontFamily.join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            {
              fontFamily: 'ArialNew',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 400,
              src: `local('Arial'),
                            url('/assets/fonts/Arial.woff') format('woff')`,
            },
          ],
        },
      },
      MuiCard: {
        root: {
          boxShadow: '1px 2px 5px rgba(117, 115, 115, 20%)',
          borderRadius: 10,
        },
      },
    },
    palette: {
      primary: {
        main: '#00d5cf',
      },
      secondary: {
        main: '#d83089',
        contrastText: '#ffffff',
      },
      danger: {
        main: '#d83089',
      },
      background: {
        default: '#FFFFFF',
        primary: '#000000',
        secondary: '#FAFAFA'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#000000',
      },
    },
    custom: {
      palette: {
        white: '#FFFFFF',
        lightBlue: '#4283c1',
        blue: '#29316c',
        darkBlue: '#2b2e3f',
        green: '#28C76F',
        pink: '#d83089',
        yellow: '#ffb418',
        border: '#999999'
      },
      layout: {
        topAppBarHeight: 70,
        maxFooterWidth: 550,
        maxDeskWidth: 1294
      }
    },
  })
)

export default theme
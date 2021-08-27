import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const fontFamily = [
  'Montserrat',
  'Rubik',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Arial',
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
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 400,
              src: `local('Montserrat'),
                            url('/assets/fonts/Montserrat.woff2') format('woff2')`,
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
        main: '#fe03b1',
        contrastText: '#ffffff',
      },
      danger: {
        main: '#fe03b1',
      },
      background: {
        default: '#FFFFFF',
        primary: '#000000',
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
        pink: '#fe03b1',
        yellow: '#ffb418'
      },
      layout: {
        topAppBarHeight: 64,
        maxFooterWidth: 520,
        maxDesktopWidth: 1040,
        openDrawerWidth: 250,
        closedDrawerWidth: 57,
      }
    },
  })
)

export default theme
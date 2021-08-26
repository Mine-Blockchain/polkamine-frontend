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
        main: '#0085EB',
      },
      secondary: {
        main: '#B9B9C3',
        contrastText: '#ffffff',
      },
      danger: {
        main: '#eb196e',
      },
      background: {
        default: '#F8F8F8',
        primary: '#FFFFFF',
        lightBlue: 'rgb(114 187 243 / 15%)',
      },
      text: {
        primary: '#6E6B7B',
        secondary: '#28C76F',
      },
    },
    custom: {
      palette: {
        white: '#FFFFFF',
        lightGrey: '#F8F8F8',
        darkGrey: '#5E5873',
        lightBlue: '#C8E6FE',
        blue: '#1A93F2',
        darkBlue: '#1E2848',
        green: '#28C76F',
        darkGreen: '#2A4428'
      },
      layout: {
        maxCardWidth: 513,
        maxDesktopWidth: 1040,
        openDrawerWidth: 250,
        closedDrawerWidth: 57,
      }
    },
  })
)

export default theme
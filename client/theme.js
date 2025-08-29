import { createMuiTheme } from '@material-ui/core/styles'
import { blue, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff',
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
      contrastText: '#000',
    },
    openTitle: blue[700],
    protectedTitle: pink[700],
    type: 'light',
  },
})

export default theme

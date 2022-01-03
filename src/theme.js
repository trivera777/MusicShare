import {createTheme} from '@material-ui/core/styles'
import { purple, teal } from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        type: "light",
        primary: teal,
        secondary: purple
    }
});

export default theme;
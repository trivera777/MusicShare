import {createTheme} from '@material-ui/core/styles'
import { pink, teal } from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        type: "light",
        primary: pink,
        secondary: teal
    }
});

export default theme;
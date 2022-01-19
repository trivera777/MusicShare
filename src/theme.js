import {createTheme} from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        type: "dark",
        primary: pink,
        secondary: pink
    }
});

export default theme;
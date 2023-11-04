// createtheme

import { createTheme } from "@mui/material";
import { amber, green, purple, red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: purple[400]
        },
        primary: {
            main: purple[400]
        },
        secondary: {
            main: green[700]
        }
    },
    // components: {
    //     MuiCard: {
    //     }
    // }
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: amber[400]
        },
        primary: {
            main: amber[400]
        },
        secondary: {
            main: red[700]
        }
    }
})
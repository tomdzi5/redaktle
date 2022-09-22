import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    typography: {
        h2: {
            fontSize: 'calc(1.375rem + 1.5vw)',
            textAlign: 'left',
        }
    },
});
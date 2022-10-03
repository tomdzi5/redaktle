import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        // for buttons to look like wikipedia links
        primary: {
            main: '#3366cc',
        },
        // for backgrounds
        secondary: {
            main: '#eaecf0',
            light: '#f8f9fa',
            dark: '#d1dbdf',
        },
    },
    typography: {
        h2: {
            fontSize: '1.8em',
            textAlign: 'left',
            lineHeight: '1.3',
            fontFamily: `'Linux Libertine','Georgia','Times', serif`,
            borderBottom: `1px solid #a2a9b1`,
        },
        body1: {
            fontSize: 'calc(1em * 0.875)',
            lineHeight: '1.6',
        }
    },
});
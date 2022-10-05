import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#eaecf0',
            light: '#f8f9fa',
            dark: '#d1dbdf',
        },
        secondary: {
            main: '#54595d',
        },
    },
    typography: {
        allVariants: {
            fontFamily: `'Linux Libertine','Georgia','Times', serif`,
            color: `#202122`,
        },
        h2: {
            fontSize: '1.8em',
            textAlign: 'left',
            lineHeight: '1.3',
            borderBottom: `1px solid #a2a9b1`,
        },
        button: {
            fontSize: '1.2em',
            lineHeight: '1.3',
        },
        body1: {
            fontSize: 'calc(1em * 0.875)',
            lineHeight: '1.6',
        },
    },
});

import { OutlinedInput } from '@mui/material';
import { styled } from '@mui/system';

export const StyledFooter = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
}));

export const GuessInputField = styled(OutlinedInput)({
    backgroundColor: 'white',
    paddingLeft: 0,
});

import { styled } from '@mui/system';
import { Button } from '@mui/material';

const MainButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

export default MainButton;
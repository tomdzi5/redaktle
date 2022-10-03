import { styled } from '@mui/system';
import { Button } from '@mui/material';

const MainButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
}));

export default MainButton;
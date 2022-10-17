import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalContainer = styled(Box)`
    position: absolute;
    background-color: ${({ theme }) => theme.palette.primary.light};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 50vh;
    border-radius: 0.6rem;
    overflow: hidden;
    border: none;
    outline: none;
    z-index: 2;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

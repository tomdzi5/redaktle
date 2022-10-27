import { Alert } from '@mui/material';
import { styled } from '@mui/system';

export const AlreadyGuessedAlert = styled(Alert)`
    background-color: white;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: #202122;
    border-radius: 0.6em;

    & .MuiAlert-icon {
        color: #202122;
    }
`;

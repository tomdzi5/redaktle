import { styled } from '@mui/material/styles';

type BlurredText = {
    guessed: boolean;
};

export const BlurredText = styled('span')<BlurredText>`
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
`;

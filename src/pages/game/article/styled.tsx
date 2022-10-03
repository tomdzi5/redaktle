import { styled } from "@mui/material/styles";

type BlurredText = {
  guessed: boolean;
};

export const BlurredText = styled("span")<BlurredText>`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme, guessed }) =>
    guessed ? theme.palette.secondary.main : theme.palette.primary.main};
  user-select: none;
`;

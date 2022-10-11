import React, { useState } from 'react';

import { Box, Grid, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import MainButton from '../../../components/MainButton';
import { GuessInputField, StyledFooter } from './GuessBar.styled';

type GuessBarProps = {
    onGuess: (guessText: string) => void;
};

const GuessBar = ({ onGuess }: GuessBarProps) => {
    const [guessText, setGuessText] = useState('');
    const handleGuess = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onGuess(guessText);
        setGuessText('');
    };

    const searchIcon = (
        <InputAdornment position="start">
            <IconButton edge="end" onClick={handleGuess}>
                <SearchIcon fontSize="small" />
            </IconButton>
        </InputAdornment>
    );

    return (
        <StyledFooter>
            <Box>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <form onSubmit={handleGuess}>
                            <MainButton>Top</MainButton>
                            <GuessInputField
                                value={guessText}
                                onChange={(event) =>
                                    setGuessText(event.target.value)
                                }
                                placeholder="Guess"
                                startAdornment={searchIcon}
                                size="small"
                            />
                            <MainButton type="submit">Guess</MainButton>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </StyledFooter>
    );
};

export default GuessBar;

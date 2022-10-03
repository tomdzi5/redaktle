import { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Button, Grid, TextField } from '@mui/material';

const StyledFooter = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
}));

type GuessBarProps = {
    onGuess: (guessText: string) => void;
}

const GuessBar = ({onGuess}: GuessBarProps) => {
    const [guessText, setGuessText] = useState('');
    const handleGuess = () => {
        onGuess(guessText);
        setGuessText('');
    }

    return (
        <StyledFooter>
            <Box>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <form onSubmit={handleGuess}>
                            <Button>Top</Button>
                            <TextField
                                value={guessText}
                                onChange={(event) => setGuessText(event.target.value)}
                                placeholder="Guess"
                                size="small"/>
                            <Button type="submit" >Guess</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </StyledFooter>
    )
}

export default GuessBar;
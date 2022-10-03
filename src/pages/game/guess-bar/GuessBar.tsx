import { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, TextField } from '@mui/material';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`

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
                        <Button>Top</Button>
                        <TextField
                            value={guessText}
                            onChange={(event) => setGuessText(event.target.value)}
                            placeholder="Guess"
                            size="small"/>
                        <Button type="submit" onClick={handleGuess}>Guess</Button>
                    </Grid>
                </Grid>
            </Box>
        </StyledFooter>
    )
}

export default GuessBar;
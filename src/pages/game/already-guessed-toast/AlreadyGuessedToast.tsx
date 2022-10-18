import { Snackbar } from '@mui/material';

import { useAppSelector } from '../../../app/hooks';
import { selectGuess } from '../guess-bar/guessSlice';
import { AlreadyGuessedAlert } from './AlreadyGuessedToast.styled';

type PropsType = {
    autoHideDuration: number;
    onToastClose: () => void;
};

const AlreadyGuessedToast = ({ autoHideDuration, onToastClose }: PropsType) => {
    const { isAlreadyGuessed } = useAppSelector(selectGuess);

    return (
        <Snackbar
            open={isAlreadyGuessed}
            autoHideDuration={autoHideDuration}
            onClose={onToastClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ marginTop: '9vh' }}
        >
            <AlreadyGuessedAlert severity="info" onClose={onToastClose}>
                Word already guessed or is too common.
            </AlreadyGuessedAlert>
        </Snackbar>
    );
};

export default AlreadyGuessedToast;

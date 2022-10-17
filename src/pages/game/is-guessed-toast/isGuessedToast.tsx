import { Alert, Snackbar } from '@mui/material';

import { useAppSelector } from '../../../app/hooks';
import { selectGuessedWords } from './isGuessedToastSlice';

type PropsType = {
    autoHideDuration: number;
    onToastClose: () => void;
};

const AlreadyGuessedToast = ({ autoHideDuration, onToastClose }: PropsType) => {
    const { isAlreadyGuessed } = useAppSelector(selectGuessedWords);

    return (
        <Snackbar
            open={isAlreadyGuessed}
            autoHideDuration={autoHideDuration}
            onClose={onToastClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert severity="warning" onClose={onToastClose}>
                Word already guessed or is too common.
            </Alert>
        </Snackbar>
    );
};

export default AlreadyGuessedToast;

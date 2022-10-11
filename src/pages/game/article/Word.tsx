import { WordToGuess } from '../../../types/article';
import { BLUR_CHARACTER } from '../../../utils/constants';
import { BlurredText } from './styled';

type PropsType = {
    children: WordToGuess;
};

const Word = ({ children }: PropsType) => {
    if (children.isGuessed) {
        return <span>wordToBlur.word + ' '</span>;
    }

    const blurredWord = BLUR_CHARACTER.repeat(children.word.length);

    return (
        <>
            <BlurredText>{blurredWord}</BlurredText>{' '}
        </>
    );
};

export default Word;

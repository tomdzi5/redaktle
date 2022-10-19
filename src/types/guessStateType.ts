export type HistoryWord = {
    value: string;
    id: string;
    order: string;
    hits: number;
};

export type guessStateType = {
    guessedWords: string[];
    guessHistory: HistoryWord[];
    isAlreadyGuessed: boolean;
};

export type HistoryWord = {
    value: string;
    id: string;
    order: string;
    hits: number;
};

export type guessStateType = {
    guessHistory: HistoryWord[];
    isAlreadyGuessed: boolean;
};

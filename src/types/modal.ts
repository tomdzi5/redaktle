import { MODALS_CONTENT } from '../utils/constants';

export type ActiveModal = keyof typeof MODALS_CONTENT | null;

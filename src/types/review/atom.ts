import { atom } from 'jotai';

import { ReviewType } from './types';

export const reviewPostAtom = atom<ReviewType[]>([]);

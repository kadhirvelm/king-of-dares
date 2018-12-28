export interface IDares {
  dareText: string;
  dareLevel?: number;
  darePlayers?: number;
}

const DARE_ARRAY: IDares[] = [
  {
    dareLevel: 1,
    darePlayers: 1,
    dareText: "_1_ stands on one foot for a turn making chicken noises."
  },
  {
    dareLevel: 1,
    darePlayers: 1,
    dareText: "_1_ licks the ear of the person to their left."
  }
];

/**
 * Returns a random dare.
 */
export function getDare(_: any) {
  const randomDare = Math.floor(Math.random() * DARE_ARRAY.length);
  return DARE_ARRAY[randomDare];
}

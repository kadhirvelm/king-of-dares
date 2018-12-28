import { ALL_DARES } from "../Dares";

export interface IDares {
  dareText: string;
  totalPlayers: number;
}

/**
 * Returns a random dare.
 */
export function getDare(_: any) {
  const randomDare = Math.floor(Math.random() * ALL_DARES.length);
  return ALL_DARES[randomDare];
}

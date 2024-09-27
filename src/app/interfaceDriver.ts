export type Team =
  | 'Mercedes'
  | 'Red Bull Racing'
  | 'Ferrari'
  | 'Aston Martin'
  | 'Alpine';

export interface driver {
  firstName: string;
  lastName: string;
  country: string;
  wins: number;
  team: Team;
}

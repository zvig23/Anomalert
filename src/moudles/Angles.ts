export type AngleUnit = 'DEGREES' | 'RADIANS';

export interface Angle {
  value: number;
  units: AngleUnit;
}
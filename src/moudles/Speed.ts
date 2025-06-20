export type SpeedUnit = 'KNOTS' | 'KMH' | 'MPH';

export interface Speed {
  value: number;
  units: SpeedUnit;
}

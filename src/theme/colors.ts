export const colors = {
  primary: {
    light: '#9AE0D3',
    main: '#35A7A0',
    dark: '#6EA9A8',
  },
  secondary: {
    light: '#D8E6EF',
    main: '#B4D8E4',
    dark: '#73ADC1',
  },
  accent: {
    light: '#DFF3FF',
    main: '#9ACDDE',
    dark: '#89C8DD',
  },
  button: {
    from: '#9AE0D3',
    to: '#43A678',
  },
  background: {
    from: '#EEFFFF',
    to: '#6EA9A8',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.8)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    white: '#FFFFFF',
  },
} as const;

export type Colors = typeof colors;

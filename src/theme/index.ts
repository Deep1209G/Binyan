// src/theme/index.ts

const theme = {
  colors: {
    primary: '#FF6A00',
    secondary: '#FF9A3D',
    accent: '#FF3D00',

    textPrimary: '#000000',
    textSecondary: '#666666',

    white: '#ffffff',
    black: '#000000',

    background: '#ffffff',
    surface: '#EDEDED',
    backgroundDot: 'rgb(238, 216, 196)',

    border: '#dddddd',

    selected: '#FF6A00',

    card:'#FCE7DB',

    cosmicLatte:"#FDDE76",
    darkbrown:"#352618",
    mutedgrayishtaupe:"#C2BDB9",


  },

  gradient: ['#FF9A3D', '#FF6A00', '#FF3D00'],

  spacing: {
    ts:2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    dl: 64,
    dll: 128,
  },

  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl:32,
    dl:50,
    round: 999,
  },

  typography: {
    small: 12,
    regular: 14,
    medium: 16,
    large: 18,
    xl: 22,
    heading: 26,
  },

  fontWeight: {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const,


};

export default theme;
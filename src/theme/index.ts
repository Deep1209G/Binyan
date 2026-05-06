// src/theme/index.ts

const theme = {
  colors: {
    primary: '#FF6A00',
    secondary: '#FF9A3D',
    accent: '#FF3D00',
    textPrimary: '#000000',
    textSecondary: '#9b9898',
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
    offWhite:"#f6f1e4",
    pastelOrange:"#F2D4C4",
    chineseSilver:"#CACACA",
    mutedbluegray:"#535763",
    brightazure:"#00aaff",
  },

  gradient: ['#FB7405', '#E15017', '#C3262C'],

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
    xxs:8,
    xs:10,
    small: 12,
    regular: 14,
    medium: 16,
    large: 18,
    xl:20,
    xxl: 22,
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

fontFamily:{
  black:"CreatoDisplay-Black",
  blackItalic:"CreatoDisplay-BlackItalic",
  bold:"CreatoDisplay-Bold",
  boldItalic:"CreatoDisplay-BoldItalic",
  extraBold:"CreatoDisplay-ExtraBold",
  extraBoldItalic:"CreatoDisplay-ExtraBoldItalic",
  light:"CreatoDisplay-Light",
  lightItalic:"CreatoDisplay-LightItalic",
  medium:"CreatoDisplay-Medium",
  mediumItalic:"CreatoDisplay-MediumItalic",
  regular:"CreatoDisplay-Regular",
  regularItalic:"CreatoDisplay-RegularItalic",
  thin:"CreatoDisplay-Thin",
  thinItalic:"CreatoDisplay-ThinItalic",


}


};

export default theme;
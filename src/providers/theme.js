const breakpoints = ['414px', '768px', '1024px', '1366px', '1920px']
breakpoints.mobile = breakpoints[0]
breakpoints.tablet = breakpoints[1]
breakpoints.web = breakpoints[2]
breakpoints.hd = breakpoints[3]
breakpoints.fullhd = breakpoints[4]

const borderRadius = [0, 8, 20, 30]
borderRadius.none = borderRadius[0]
borderRadius.sm = borderRadius[1]
borderRadius.md = borderRadius[2]
borderRadius.lg = borderRadius[3]

const fonts = {
  default: "'Work Sans', sans-serif"
}

const fontSizes = [
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '25px',
  '8px'
]
fontSizes.xsmall = fontSizes[0]
fontSizes.small = fontSizes[1]
fontSizes.medium = fontSizes[2]
fontSizes.default = fontSizes[3]
fontSizes.large = fontSizes[4]
fontSizes.xlarge = fontSizes[5]
fontSizes.xxlarge = fontSizes[6]
fontSizes.xxsmall = fontSizes[7]


const fontWeights = [400, 500, 600, 700]
fontWeights.regular = fontWeights[0]
fontWeights.medium = fontWeights[1]
fontWeights.semiBold = fontWeights[2]
fontWeights.bold = fontWeights[3]

const space = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100
]

const colors = {
  // grey scale
  white: '#ffffff',
  lightGrey: '#303030;',
  mediumGrey: '#dedede',
  grey: '#bfbfbf',
  darkGrey: '#8c8c8c',
  darkerGrey: '#434343',
  almostBlack: '#0f0f0f',
  black: '#000000',

  // brand
  primaryLightest: '#F4E9FB',
  primaryLight: '#c24dff',
  primary: '#9824D4',
  primaryDark: '#7B1FA2',
  secondary: '#07B9A8',
  secondaryDark: '#00A296',
  magaluMedium: '#1F6DCC',

  // actions
  info: '#2689ff',
  success: '#5EBE2E',
  warning: '#faad14',
  error: '#ff4d4f',
  errorLight: '#FFDBDC',

  // common
  red: '#DE4E51',
  pink: '#EB2F96',
  pinkDark: '#C41D7F',
  purple: '#9824D4',
  deepPurple: '#8654DE',
  indigo: '#4C60D0',
  blue: '#4AAFFF',
  cyan: '#69D6E3',
  teal: '#33A59A',
  green: '#78C77C',
  lime: '#B5BF56',
  yellow: '#ffe81f',
  orange: '#F8A23D',
  deepOrange: '#FD825B',
  brown: '#C9775D',

  // notice_banners
  notice_light_red: '#FFEDEC',
  notice_dark_red: '#FF4D4F',
  notice_light_green: '#DFF1F1',
  notice_dark_green: '#00A296',
  notice_light_purple: '#F3E5F5',
  notice_dark_purple: '#7B1FA2'
}

const defaultTheme = {
  borderRadius,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space
}

export default defaultTheme
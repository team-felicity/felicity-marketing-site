import { createCss, CSSPropertiesToTokenScale } from '@stitches/react'

export const stitches = createCss({
  theme: {
    colors: {
      // primary colors
      primary1: '#60BB93',
      primary2: '#75B7C6',
      primary3: '#35A3A5',
      primary4: '#2B657D',
      primary5: '#455A64',

      // grays
      gray1: '#9C9595',
      gray2: '#888888',
      gray3: '#c4c4c4',
      gray4: '#c7c7c7',

      //whites
      white1: '#ffffff',

      //blacks
      black1: '#000000',

      //utility colors
      error: '#ee0000',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '18px',
      9: '20px',
      10: '24px',
      pill: '999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    fonts: {
      default:
        "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    borderStyles: {},
    borderWidths: {},
    letterSpacings: {},
    lineHeights: {},
    shadows: {},
    transitions: {},
  },

  utils: {
    // you can type value with `$${keyof typeof cfg['theme']['space']}` | (string & {})
    // but it cannot currently type when using on a component
    m: () => (v) => ({
      marginTop: v,
      marginBottom: v,
      marginLeft: v,
      marginRight: v,
    }),
    mt: () => (v) => ({ marginTop: v }),
    mr: () => (v) => ({ marginRight: v }),
    mb: () => (v) => ({ marginBottom: v }),
    ml: () => (v) => ({ marginLeft: v }),
    mx: () => (v) => ({ marginRight: v, marginLeft: v }),
    my: () => (v) => ({ marginTop: v, marginBottom: v }),

    p: () => (v) => ({
      paddingTop: v,
      paddingBottom: v,
      paddingLeft: v,
      paddingRight: v,
    }),
    pt: () => (v) => ({ paddingTop: v }),
    pr: () => (v) => ({ paddingRight: v }),
    pb: () => (v) => ({ paddingBottom: v }),
    pl: () => (v) => ({ paddingLeft: v }),
    px: () => (v) => ({ paddingLeft: v, paddingRight: v }),
    py: () => (v) => ({ paddingTop: v, paddingBottom: v }),

    gapy: () => (v) => ({ rowGap: v }),
    gapx: () => (v) => ({ columnGap: v }),

    rt: () => (v) => ({
      borderTopLeftRadius: v,
      borderTopRightRadius: v,
    }),
    rb: () => (v) => ({
      borderBottomLeftRadius: v,
      borderBottomRightRadius: v,
    }),
    rl: () => (v) => ({
      borderTopLeftRadius: v,
      borderBottomLeftRadius: v,
    }),
    rr: () => (v) => ({
      borderTopRightRadius: v,
      borderBottomRightRadius: v,
    }),

    linearGradient: () => (v) => ({
      backgroundImage: `linear-gradient(${v})`,
    }),
  },

  media: {
    phone: '(min-width: 520px)',
    tablet: '(min-width: 900px)',
    desktop: '(min-width: 1200px)',
  },
})

export const {
  css,
  styled,
  config,
  getCssString,
  global,
  keyframes,
  theme,
  utils,
} = stitches

export const globalStyles = global({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap')",

  '*, ::after, ::before': {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: '$default',
  },

  'body, html': {
    margin: 0,
    padding: 0,
  },

  a: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
})

export type CSSProps = keyof CSSPropertiesToTokenScale
type ThemeKeyFromCSSProp<T extends CSSProps> = CSSPropertiesToTokenScale[T]
type TokenKeys<T extends keyof typeof config.theme> = Exclude<
  keyof typeof config.theme[T],
  symbol
>

export type KeysToPropMap<Prop extends CSSProps> = Record<
  TokenKeys<CSSPropertiesToTokenScale[Prop]>,
  Record<Prop, `$${TokenKeys<ThemeKeyFromCSSProp<Prop>>}`>
>

/**
 *
 * @param cssProp CamelCased CSS Property (color, background, fontSize)
 * @returns a record of mapped design tokens to css property with the design token's value as its value
 * @example
 * mapThemeToCSSProp('color')
 * // generates
 * {
 *    primary1: { color: '$primary1' },
 *    primary2: { color: '$primary2' },
 *    primary3: { color: '$primary3' },
 *    ...
 * }
 */
export function mapThemeToCSSProp(cssProp: CSSProps) {
  const themeKey = config.themeMap[cssProp]
  return Object.fromEntries(
    Object.entries(theme[themeKey]).map(([key]) => [
      key,
      { [cssProp]: `$${key}` },
    ])
  ) as KeysToPropMap<typeof cssProp>
}

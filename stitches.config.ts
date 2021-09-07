import { createStitches } from '@stitches/react'
import { DESKTOP_SIZE, FHD_SIZE, PHONE_SIZE, TABLET_SIZE } from 'utils'
import type * as Stitches from '@stitches/react'

export const stitches = createStitches({
  theme: {
    colors: {
      // primary colors
      primary1: '#60BB93',
      primary2: '#75B7C6',
      primary3: '#35A3A5',
      primary4: '#2B657D',
      primary5: '#455A64',
      primary6: '#61C295',
      primary7: '#344953',
      // grays
      gray1: '#9C9595',
      gray2: '#888888',
      gray3: '#c4c4c4',
      gray4: '#c7c7c7',
      gray5: '#F5F5F6',

      //whites
      white1: '#ffffff',

      //blacks
      black1: '#000000',

      //utility colors
      error: '#ee0000',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
      inherit: 'inherit',
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
      1: '0.75rem',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.625rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.5rem',
      14: '4rem',
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
    shadows: { headerShadow: '0 0 5px rgba(0, 0, 0, 0.13)' },
    transitions: {},
  },

  utils: {
    m: (v: Stitches.PropertyValue<'margin'>) => ({ margin: v }),
    mt: (v: Stitches.PropertyValue<'margin'>) => ({ marginTop: v }),
    mr: (v: Stitches.PropertyValue<'margin'>) => ({ marginRight: v }),
    mb: (v: Stitches.PropertyValue<'margin'>) => ({ marginBottom: v }),
    ml: (v: Stitches.PropertyValue<'margin'>) => ({ marginLeft: v }),
    mx: (v: Stitches.PropertyValue<'margin'>) => ({
      marginRight: v,
      marginLeft: v,
    }),
    my: (v: Stitches.PropertyValue<'margin'>) => ({
      marginTop: v,
      marginBottom: v,
    }),

    p: (v: Stitches.PropertyValue<'padding'>) => ({ padding: v }),
    pt: (v: Stitches.PropertyValue<'padding'>) => ({ paddingTop: v }),
    pr: (v: Stitches.PropertyValue<'padding'>) => ({ paddingRight: v }),
    pb: (v: Stitches.PropertyValue<'padding'>) => ({ paddingBottom: v }),
    pl: (v: Stitches.PropertyValue<'padding'>) => ({ paddingLeft: v }),
    px: (v: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: v,
      paddingRight: v,
    }),
    py: (v: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: v,
      paddingBottom: v,
    }),

    gapy: (v: Stitches.PropertyValue<'rowGap'>) => ({ rowGap: v }),
    gapx: (v: Stitches.PropertyValue<'columnGap'>) => ({ columnGap: v }),

    rt: (v: Stitches.PropertyValue<'borderRadius'>) => ({
      borderTopLeftRadius: v,
      borderTopRightRadius: v,
    }),
    rb: (v: Stitches.PropertyValue<'borderRadius'>) => ({
      borderBottomLeftRadius: v,
      borderBottomRightRadius: v,
    }),
    rl: (v: Stitches.PropertyValue<'borderRadius'>) => ({
      borderTopLeftRadius: v,
      borderBottomLeftRadius: v,
    }),
    rr: (v: Stitches.PropertyValue<'borderRadius'>) => ({
      borderTopRightRadius: v,
      borderBottomRightRadius: v,
    }),

    linearGradient: (v: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${v})`,
    }),
  },

  media: {
    phone: `(min-width: ${PHONE_SIZE}px)`,
    tablet: `(min-width: ${TABLET_SIZE}px)`,
    desktop: `(min-width: ${DESKTOP_SIZE}px)`,
    fhd: `(min-width: ${FHD_SIZE}px)`,
  },
})

export const { css, styled, config, getCssText, globalCss, keyframes, theme } =
  stitches

export type CSS = Stitches.CSS<typeof config>

export const globalStyles = globalCss({
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

type DefaultThemeMapKeys = keyof Stitches.DefaultThemeMap
type ThemeKey<T extends DefaultThemeMapKeys> = Stitches.DefaultThemeMap[T]
type TokenKeys<T extends keyof typeof config.theme> = Exclude<
  keyof typeof config.theme[T],
  symbol
>

export type KeysToPropMap<Prop extends DefaultThemeMapKeys> = Record<
  TokenKeys<ThemeKey<Prop>>,
  Record<Prop, `$${TokenKeys<ThemeKey<Prop>>}`>
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
export function mapThemeToCSSProp<T extends DefaultThemeMapKeys>(cssProp: T) {
  const themeKey = config.themeMap[cssProp]
  return Object.fromEntries(
    Object.entries(theme[themeKey]).map(([key]) => [
      key,
      { [cssProp]: `$${key}` },
    ])
  ) as KeysToPropMap<T>
}

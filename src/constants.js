export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS_PX = {
  tabletMin: 600,
  laptopMin: 950,
  desktopMin: 1300,
};

export const BREAKPOINTS_REM = {
  tabletMin: BREAKPOINTS_PX.tabletMin / 16,
  laptopMin: BREAKPOINTS_PX.laptopMin / 16,
  desktopMin: BREAKPOINTS_PX.desktopMin / 16,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS_REM.tabletMin}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS_REM.laptopMin}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS_REM.desktopMin}rem)`,
};
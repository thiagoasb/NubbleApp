import {createTheme} from '@shopify/restyle';

const pallet = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSUccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...pallet,
    primary: pallet.greenPrimary,
    primaryContrast: pallet.grayWhite,

    buttonPrimary: pallet.greenPrimary,

    background: pallet.grayWhite,
    backgroundContrast: pallet.grayBlack,

    error: pallet.redError,
    errorLight: pallet.redErrorLight,

    success: pallet.greenSuccess,
    successLight: pallet.greenSUccessLight,
  },
  spacing: {},
  borderRadii: {},
});

export type Theme = typeof theme;

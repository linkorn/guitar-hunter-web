import { css } from 'react-emotion';

export const breakpoints = {
  mobile: 800,
  medium: 960,
  desktop: 1200,
};

export const media = {
  medium: (...args) => css`
    @media only screen and (min-width: ${breakpoints.medium}px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media only screen and (max-width: ${breakpoints.mobile}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media only screen and (min-width: ${breakpoints.desktop}px) {
      ${css(...args)};
    }
  `,
};

export const colors = {
  background: '#924f30',
};

const theme = {
  media,
  breakpoints,
  colors,
};

export default theme;

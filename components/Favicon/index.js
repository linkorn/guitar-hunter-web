import { colors } from '../../shared/theme';

export default () => [
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/static/apple-touch-icon.png"
  />,
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/static/favicon-32x32.png"
  />,
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/static/favicon-16x16.png"
  />,
  <link rel="manifest" href="/static/site.webmanifest" />,
  <link
    rel="mask-icon"
    href="/static/safari-pinned-tab.svg"
    color={colors.background}
  />,
  <meta name="msapplication-TileColor" content={colors.background} />,
  <meta name="theme-color" content={colors.background} />,
];
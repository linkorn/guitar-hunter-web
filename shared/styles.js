import { injectGlobal } from "react-emotion";

export const injectGlobalStyles = () => injectGlobal`
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
cite,
code,
del,
em,
img,
q,
s,
small,
strong,
sub,
sup,
tt,
b,
u,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
figure,
figcaption,
footer,
header,
menu,
nav,
section,
time,
audio,
video {
  border: 0;
  vertical-align: baseline;
}
html {
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -o-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
}
*[aria-hidden="true"] {
  user-select: none;
}
@-ms-viewport {
  width: device-width;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
}
a:active,
a:hover {
  outline-width: 0;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/static/fonts/Lato-Light.woff) format('woff');
}
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/static/fonts/Lato-LightItalic.woff) format('woff');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/static/fonts/Lato-Regular.woff) format('woff');
}
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/static/fonts/Lato-Italic.woff) format('woff');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/static/fonts/Lato-Bold.woff) format('woff');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/static/fonts/Lato-Bold.woff) format('woff');
}
html,body{
  margin: 0;
  padding: 0;
}
body {
  min-width:320px;
  min-height: 100vh;
  position:relative;
  background: #EAEAEA;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  overflow: hidden;
}

`;

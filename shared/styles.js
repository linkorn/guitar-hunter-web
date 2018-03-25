import { injectGlobal } from 'react-emotion';

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

html,body{
  margin: 0;
  padding: 0;
}
html{
  overflow-y:auto;
}
body {
  min-width:320px;
  min-height: 1080px;
  position:relative;
  background: #EAEAEA;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  font-family: 'VT323', monospace;
}

`;

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
*, *:before, *:after {
  box-sizing: border-box;
}

html,body{
  width: 100%;
    min-height: 100%;
    margin: 0px;
    padding: 0px;
}
body {
  /* min-width:320px;
  min-height: 1080px;
  position:relative;
  background: #EAEAEA; */
  position:relative;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  font-family: 'VT323', monospace;
  
}
body > div:first-child{
        position:relative;
        width:100%;
        height: 100%;
        background: linear-gradient(to bottom, #7db9e8 0%, #793e19 100%);
  background-image: url(/static/bg.jpg);
  background-repeat:no-repeat;
  background-size: cover;
      }
      @media only screen 
and (max-device-width : 800px){
  body > div:first-child{
    background: linear-gradient(to bottom, #7db9e8 0%, #793e19 100%);
  }
}

`;

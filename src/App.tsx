import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

// GlobalStye = 렌더링 될때 스타일 태그에 적용되는 컴포넌트, 모든 컴포넌트에 적용됨
const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

body {
  font-family: 'Do Hyeon', sans-serif;
  background-color: #ffffff;
  color:${(props) => props.theme.textColor};
}
a {
  text-decoration:none;
  color:inherit;
}

// desktop
@media (min-width: 650px) {
  .ToDoList {
    width: 640px;
  }
}

// mobile 
@media (max-width: 650px) {
  .ToDoList {
    width: 90vw;
  }
}


`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;

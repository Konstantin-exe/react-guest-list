/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import Fetching from './components/Fetching';
import blockade from './img/blockade.jpeg';

const globalStyles = css`
  html {
    background-image: url(${blockade});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow: hidden;
  }
`;

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Fetching />
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import Fetching from './components/Fetching';
import blockade from './img/blockade.jpeg';

const globalStyles = css`
  body {
    background-image: url(${blockade});
    background-repeat: no-repeat;
    max-width: 100%;
    height: auto;
    background-size: 100%;
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

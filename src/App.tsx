import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>oi</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;

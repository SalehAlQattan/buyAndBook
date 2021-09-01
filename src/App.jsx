// styles & styled componets
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';

// routes
import Routes from './components/Routes';

// components
import NavBar from './components/navbar/NavBar';

const theme = {
  offWhite: '#EEEEEE',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <div className='container'>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;

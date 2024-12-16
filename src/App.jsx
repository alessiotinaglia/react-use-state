
import './App.css';
import Main from './components/Main'; 
import Header from './components/HeaderComponent';
import languages from './dati/languages'; 

function App() {
  return (
    <>
      <Header />
      <Main languages={languages} />
    </>
  );
}

export default App;

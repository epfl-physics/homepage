import './App.css';
// import Header from './components/Header/Header';
import Title from './components/Title/Title';
import AppNav from './components/AppNav/AppNav';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Title />
      <AppNav />
      <Main />
    </div>
  );
}

export default App;

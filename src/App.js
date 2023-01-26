import logo from './logo.svg';
import Buttom from '~/components/Button';
import './App.css';
console.log('hello các bạn')
function App() {
  return (
    <div className="App">
    <Buttom />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

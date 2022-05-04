import logo from './logo.svg';
import './App.css';
import DisplayArray from './components/DisplayArray/DisplayArray';
import ChangeColor from './components/ClassComponents/ChangeColor';
import Parent from './components/StatelessComponents/Parent';

function App() {
  return (
    <div className="App">
      {/* <DisplayArray /> */}
      {/* <ChangeColor /> */}
      <Parent />
    </div>
  );
}

export default App;

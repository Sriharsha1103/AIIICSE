import logo from './logo.svg';
import './App.css';
import DisplayArray from './components/DisplayArray/DisplayArray';
import ChangeColor from './components/ClassComponents/ChangeColor';
import Parent from './components/StatelessComponents/Parent';
import Mounting from './components/ClassComponents/LifeCycle/Mounting';

function App() {
  return (
    <div className="App">
      {/* <DisplayArray /> */}
      {/* <ChangeColor /> */}
     {/*  <Parent /> */}
     <Mounting color='white'/>
    </div>
  );
}

export default App;

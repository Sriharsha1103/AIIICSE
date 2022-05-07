import './App.css';
import PureComponentDemo from './components/ClassComponents/LifeCycle/PureComponent';
import UserComponent from './components/ClassComponents/UserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent />
      <PureComponentDemo />
    </div>
  );
}

export default App;

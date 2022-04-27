import './App.css';
import  Login, { Welcome } from './components/Login';
import StudentList from './components/StudentList';

function App() {
  return (
   <div>
     {/* <Welcome name='Naga Sriharsha'/>
     <Login /> */}
     <StudentList />
   </div>
  );
}

export default App;

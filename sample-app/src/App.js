import './App.css';
import  Login, { Welcome } from './components/Login';
import StudentList from './components/StudentList';
import StudentTable from './components/StudentTable';
const students = [
  {
      id: 1,
      name: 'A',
  },
  {
      id: 2,
      name: 'B',
  },
  {
      id: 3,
      name: 'C',
  },
  {
      id: 4,
      name: 'D',
  },

]
function App() {
  return (
   <div>
     {/* <Welcome name='Naga Sriharsha'/>
     <Login /> */}
     {/* <StudentList /> */}
     <StudentTable list={students} title='Student List'/>
   </div>
  );
}

export default App;

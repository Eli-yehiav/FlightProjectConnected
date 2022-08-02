
import './App.css';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import HomePlaceholder from './components/HomePlaceholder';
import { Flights } from './components/Flights';
import AdminPage from './components/AdminPage';
function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<HomePlaceholder/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='flights' element={<Flights/>}/>
        <Route path='adminpage' element={<AdminPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
  }
export default App;

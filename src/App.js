import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import UserList from './Components/UserList'
import AddUser from './Components/AddUser'
import EditUser from './Components/UpdateUser'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

//we use the routes just the way we used stackscreen in react-native
//the provider is a part of react-redux hence all functionalites of redux store is given to the app

function App() {
  return (
    <Provider>
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to={'/'}>Home</Link>
        <Link to={'/user'}>User</Link>
      </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<UserList></UserList>}></Route>
          <Route path='/user/add' element={<AddUser></AddUser>}></Route>
          <Route path='/user/edit:code' element={<EditUser></EditUser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;

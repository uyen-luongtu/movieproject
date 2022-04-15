import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import './main.css'
import GlobalStyle from './styles/GlobalStyle';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import BookingResult from './pages/BookingResult/BookingResult';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home'
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register';
import Loading from './components/Loading/Loading'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Profile from './pages/Admin/Profile/Profile'
import FilmManagement from './pages/Admin/FilmManagement/FilmManagement';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin'
import ModalForm from './components/ModalForm/ModalForm';
export const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <GlobalStyle />
      <Loading />
      <ModalForm />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckoutTemplate path='/checkout/:idLichChieu' exact Component={Checkout} />
        <CheckoutTemplate path='/bookingresult' exact Component={BookingResult} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <AdminTemplate path='/admin' exact Component={Dashboard} />
        <AdminTemplate path='/admin/profile' exact Component={Profile} />
        <AdminTemplate path='/admin/film' exact Component={FilmManagement} />
        <AdminTemplate path='/admin/user' exact Component={UserManagement} />
        <AdminLogin path='/admin/login' exact />
      </Switch>
    </Router>
  );
}

export default App;

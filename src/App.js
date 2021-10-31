import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import BookTour from './components/BookTour/BookTour';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* Header section  */}
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/bookTour">
              <BookTour></BookTour>
            </PrivateRoute>
            <PrivateRoute exact path="/service-details/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/manageBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>


            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          {/* footer section  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

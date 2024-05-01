
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
// import LoginComponent from './components/loginComponent';
// import LogoutComponent from './components/logoutcomponent';
//  import { useSelector } from 'react-redux';


function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
  <>
   <Header />
   
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   {/* <LoginComponent/>
   <LogoutComponent/> */}
   

   {/* {isAuthenticated ? <LogoutComponent /> : <LoginComponent />} */}
  </>
  );
}

export default App;


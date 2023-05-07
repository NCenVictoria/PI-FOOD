import './App.css';
import Home from './views/Home/Home';
import Detail from './views/DetailRecipe/Detail';
import Form from './views/FormRecipe/Form';
import Landing from './views/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import {Route,useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route path={'/home'} render={()=><Home/>}/>
      <Route exact path={'/'} component={Landing}/>
      <Route exact path='/home/:id'>
        <Detail />
      </Route>
      <Route path='/create'>
        <Form />
      </Route>
    
    </div>
  );
}

export default App;


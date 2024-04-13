import './App.css';
import AuthPage from './Authpage.jsx'; // Correct import name
import Preloader from './Preloader.jsx';
import Dashboard from './dashboard.jsx'; // Correct import name
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className="App">
      {/* <Route>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Route> */ }

    <Routes>
      <Route path='/' element= {<AuthPage />}/>
      <Route path='/preloader' element= {<Preloader/>}/>
      <Route path='/dashboard' element= {<Dashboard />}/>

    </Routes>
    </div>
  );
}

export default App;
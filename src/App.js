import './App.css';
import { Button } from 'reactstrap';
import Header from './Components/Header';
//import AppHome from './Components/AppHome';
import JobSeekersHome  from './Components/Job Seekers Components/JobSeekersHome';
import RecruitersHome from './Components/Recruiters Components/RecruitersHome';
import {
  BrowserRouter as Router, Route,Link,Switch,Redirect
} from 'react-router-dom'

function App() {

  const navigateToPage = (pageNum) => {
        console.log("inside navigate to page",pageNum);
        if (pageNum === 1)
            return <Redirect to='/rechome' />
        else if (pageNum === 2)
            return <Redirect to="/jshome" />
    
    }
  return (
    <div className="App">
      <Header/>
      
        
        <div className="role-button-group">
        
          
            <Button color="primary" size="lg" onClick={()=>navigateToPage(1)}>I'm a Recruiter</Button>
        
          {' '}
          
        <Button color="danger" size="lg" onClick={()=>navigateToPage(2)}>I'm a Job seeker</Button>
      </div>
          <Router>
          <Switch>
          {/*<Route path="/" exact>
             <AppHome />
             </Route>
          */}
          
            <Route  path="/rechome" exact>
              <RecruitersHome/>
            </Route>
            
            <Route  path="/jshome" exact>
              <JobSeekersHome/>
          </Route>
          
          </Switch>
        </Router>
      </div>

    
  );
}

export default App;

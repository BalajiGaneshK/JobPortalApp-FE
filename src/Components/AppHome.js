import Header from './Header';
import {
    BrowserRouter as Router, Route, Link, Switch, Redirect
} from 'react-router-dom';

import JobSeekersHome from './Job Seekers Components/JobSeekersHome';
import RecruitersHome from './Recruiters Components/RecruitersHome';
import { Button } from 'reactstrap';
const AppHome = () => {

    const navigateToPage = (pageNum) => {
        console.log("inside navigate to page",pageNum);
        if (pageNum === 1)
            return <Redirect to='/rechome' />
       /* else if (pageNum === 2)
            return <Redirect to="/jshome" />*/
    
    }
    return(
    <div>
      <Header/>
      <div className="role-button-group">
        <Router>
          
            <Button color="primary" size="lg" onClick={()=>navigateToPage(1)}>I'm a Recruiter</Button>
        
          {' '}
          
        <Button color="danger" size="lg" onClick={()=>navigateToPage(2)}>I'm a Job seeker</Button>
        
       
        <Switch>
        <Route exact path="/rechome">
                <RecruitersHome/>        
        
        </Route>
                    
        <Route exact path="/jshome">
            <JobSeekersHome/>        
        
        </Route>
                    
        </Switch>

                    
        </Router>
      </div>
    </div>
    
    )

}

export default AppHome;
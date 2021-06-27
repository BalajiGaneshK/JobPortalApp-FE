import { Redirect } from 'react-router-dom';

const NavigateToPage = (props) => {
        console.log("inside navigate to page",props.pageNum);
        if (props.pageNum === 1)
            return <Redirect to='/rechome' />
        else if (props.pageNum === 2)
            return <Redirect to="/jshome" />
    
}
    
export default NavigateToPage;
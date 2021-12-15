/*
    Using react-router-dom@v5  
    Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';


//import the MainSite pages
import Home from '../SiteFolders/MainSite/Pages/Home';
import ContactPage from '../SiteFolders/MainSite/Pages/Contact';

//import the StudentPortal site pages
import Login from '../SiteFolders/StudentPortal/Authentication/Login';


function Router() {
    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={Home} />
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/student-login' component={Login} />
            </Switch>
        </Routers>
    );
}

export default Router;
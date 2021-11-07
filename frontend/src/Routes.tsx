import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'


const Routes = () => {
    return (
        <Router>
            <Switch>
                
                <Route path="/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes;
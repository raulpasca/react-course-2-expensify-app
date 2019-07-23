import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    /*We only need one Browser Router instance*/
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                {/*Each route is a page, we setup a instance for each*/}
                {/*We have the path and the component*/}
                {/*The path is when we show it and the component is what we show*/}
                {/*That allows us to show something unique for each page*/}
                {/*We used the 'exact' prop, so we only show the expense dashboard page at the root of the application and not for something like /help*/}
                {/*Path is optional. If its not set, all routes will be seen as a match and therefor the specified component will be displayed*/}
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div> 
    </BrowserRouter>
)

export default AppRouter
import React from 'react';
import { BrowserRouter as BRouter, Route, Link } from 'react-router-dom';
import WeekPage from './WeekPage';
import DayPage from './DayPage';

const Router = () => (
    <BRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/today">Page 1</Link></li>
            </ul>
            
            
            <Route exact path="/" component={WeekPage}/>
            <Route exact path="/today" component={DayPage}/>
        </div>
    </BRouter>
)

export default Router;
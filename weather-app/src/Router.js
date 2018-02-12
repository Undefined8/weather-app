import React from 'react';
import { BrowserRouter as BRouter, Route, Link } from 'react-router-dom';


const Router = () => (
    <BRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page1">Page 1</Link></li>
            </ul>
            
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/page1" component={Page1}/>
        </div>
    </BRouter>
)

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)

const Page1 = () => (
    <div>
        <h1>Page 1</h1>
    </div>
)

export default Router;
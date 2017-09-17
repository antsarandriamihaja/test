import React from 'react';

import {HashRouter, Route, Link} from 'react-router-dom';
import App from './App';
import ContactCellView from './components/contact-detail-view';

export default (
    <HashRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/contacts/:id" component={ContactCellView}/>
        </div>
    </HashRouter>
)

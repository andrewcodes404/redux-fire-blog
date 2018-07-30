import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import './style/style.css';
import reducers from './reducers'
import PostIndex from './components/PostsIndex'
import PostsNew from "./components/PostsNew"
import PostsShow from "./components/PostsShow"
import NotFound from "./components/NotFound"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
                <header>
                    <h1>redux-firebase-blog</h1>
                </header>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/posts/:id" component={PostsShow} />
                    <Route path="/" component={PostIndex} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(App, document.querySelector('#root'));
registerServiceWorker();
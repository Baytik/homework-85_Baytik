import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import artistReducers from "./store/reducers/artistReducers";
import albumReducer from "./store/reducers/albumReducers";
import trackReducer from "./store/reducers/trackReducers";
import registerReducer from "./store/reducers/registerReducers";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware, ConnectedRouter} from "connected-react-router";
import historyReducer from "./store/reducers/historyReducer";

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    router: connectRouter(history),
    artists: artistReducers,
    albums: albumReducer,
    tracks: trackReducer,
    user: registerReducer,
    tracksHistories: historyReducer
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancers);

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

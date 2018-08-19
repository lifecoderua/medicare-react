import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import {combineReducers, createStore} from 'redux';
import { BrowserRouter as Router, Route, Link, RouteComponentProps/*, match*/ } from "react-router-dom";
// import { enthusiasm } from './reducers/index';
// import { StoreState } from './types/index';

// import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import {EnthusiasmAction} from "./actions";



// Add the reducer to your store on the `routing` key
// const store = createStore(
//     combineReducers({
//         ...reducers,
//         routing: routerReducer
//     })
// );


// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

// const store = createStore<StoreState, EnthusiasmAction, null, null>(enthusiasm, {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript',
// });

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/" component={App}>
//                 {/*<Route path="foo" component={Foo}/>*/}
//                 {/*<Route path="bar" component={Bar}/>*/}
//             </Route>
//         </Router>
//     </Provider>,
//   document.getElementById('root') as HTMLElement
// );



const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

interface RouteInfo {topicId: any; }


const Topic = ({match}: RouteComponentProps<RouteInfo>) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const Topics = ({match}: RouteComponentProps<RouteInfo>) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);



ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>,
    document.getElementById('root') as HTMLElement
);


registerServiceWorker();

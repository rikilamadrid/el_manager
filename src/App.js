import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LogInForm from './components/LogInForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBrSpXqLqG9GiCRYbvZAwjq0USHNxCfkDo",
            authDomain: "el-manager.firebaseapp.com",
            databaseURL: "https://el-manager.firebaseio.com",
            projectId: "el-manager",
            storageBucket: "el-manager.appspot.com",
            messagingSenderId: "1037552520829"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk)
        );

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

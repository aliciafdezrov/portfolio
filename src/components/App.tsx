import * as React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import {addLocaleData} from "react-intl";
import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router/immutable';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import {createHashHistory} from 'history';

export const history = createHashHistory();
addLocaleData([...spanish, ...english]);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
    router: connectRouter(history)
});


const middlewares = [ReduxThunk["default"], logger, routerMiddleware(history)];

export const store = createStore((reducer),
    composeWithDevTools(
        applyMiddleware(...middlewares))
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#559a9b',
            contrastText: '#ffffff',
        },
    },

    typography: {
        fontSize: 22
    }
});

export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {

        return <Provider store={store}>
            <IntlProvider>
                <div className="container-fluid">
                    <MuiThemeProvider theme={theme}>
                {/*    <ConnectedRouter history={history}>*/}
                        <div>
                            <h1></h1>
                        </div>
                    {/*</ConnectedRouter>*/}
                    {this.props.children}
                    </MuiThemeProvider>
                </div>
            </IntlProvider>
        </Provider>;
    }
}
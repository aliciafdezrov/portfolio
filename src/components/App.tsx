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
import {HashRouter, Route, Router} from 'react-router-dom'
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router/immutable'
import {RouteConstants} from "../common/RouteConstants";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import {createHashHistory} from 'history'
import {DashboardContainer} from "../pages/DashboardContainer";
import {AcademicPage} from "../pages/AcademicPage";
import {HomePage} from "../pages/HomePage";
import {ExperiencePage} from "../pages/ExperiencePage";
import {KnowledgePage} from "../pages/KnowledgesPage";
import {ContactPage} from "../pages/ContactPage";

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
                    <MuiThemeProvider theme={theme}>
                        <Router history={history}>
                            <div>
                                <DashboardContainer/>
                                <Route exacts path={RouteConstants.INDEX_ROUTE} component={HomePage}/>
                                <Route path={RouteConstants.ACADEMIC_ROUTE} component={AcademicPage}/>
                                <Route path={RouteConstants.EXPERIENCE_ROUTE} component={ExperiencePage}/>
                                <Route path={RouteConstants.KNOWLEDGE_ROUTE} component={KnowledgePage}/>
                                <Route path={RouteConstants.CONTACT_ROUTE} component={ContactPage}/>
                            </div>
                        </Router>
                        {this.props.children}
                    </MuiThemeProvider>
            </IntlProvider>
        </Provider>;
    }
}
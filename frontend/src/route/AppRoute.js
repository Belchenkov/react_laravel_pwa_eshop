import { Switch, Router, Route } from 'react-router';

import HomePage from '../pages/HomePage';

const AppRoute = () => {
    return (
        <>
            <Switch>
                <Route exact to="/" component={HomePage} />
            </Switch>
        </>
    );
};

export default AppRoute;
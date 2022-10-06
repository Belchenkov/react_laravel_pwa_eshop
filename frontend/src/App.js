import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import AppRoute from './route/AppRoute';

function App() {
  return (
    <>
        <Router>
            <AnimatedSwitch>
                <AppRoute />
            </AnimatedSwitch>
        </Router>
    </>
  );
}

export default App;

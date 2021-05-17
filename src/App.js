import { Switch, Route } from 'wouter';
import { navigation } from './site';
import FourOhFour from './pages/extra/FourOhFour';

const App = () => (
  <Switch>
    {navigation.map(({ path, Component, ...props }) => (
      <Route key={path} path={path}>
        <Component {...props} />
      </Route>
    ))}
    <Route>
      <FourOhFour />
    </Route>
  </Switch>
);

export default App;

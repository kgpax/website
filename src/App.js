import { Route } from 'wouter';
import { navigation } from './site';

const App = () => (
  <>
    {navigation.map(({ path, Component, ...props }) => (
      <Route key={path} path={path}>
        <Component {...props} />
      </Route>
    ))}
  </>
);

export default App;

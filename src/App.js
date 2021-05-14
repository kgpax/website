import { Route } from 'wouter';
import Home from './sections/Home';
import SiteBuild001 from './sections/SiteBuild001';

const App = () => (
  <>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/site-build-001">
      <SiteBuild001 />
    </Route>
  </>
);

export default App;

import Home from './pages/Home';
import SiteBuild001 from './pages/SiteBuild001';
import SiteBuild002 from './pages/SiteBuild002';

const nav = [];
const reference = (path) => () => [nav.find((x) => x.path === path)];

nav.push({ path: '/', title: 'Home', Component: Home });
nav.push({
  path: '/site-build-001',
  title: 'Building the site : part one',
  shortTitle: 'Part one',
  date: '2021-05-14',
  Component: SiteBuild001,
  prev: null,
  next: reference('/site-build-002'),
});
nav.push({
  path: '/site-build-002',
  title: 'Building the site : part two',
  shortTitle: 'Part two',
  date: null,
  Component: SiteBuild002,
  prev: reference('/site-build-001'),
  next: null,
});

export const navigation = nav;

import dayjs from 'dayjs';
import Home from './pages/Home';
import SiteBuild001 from './pages/SiteBuild001';
import SiteBuild002 from './pages/SiteBuild002';
import SiteBuild003 from './pages/SiteBuild003';

const nav = [];
const reference = (path) => () => [nav.find((x) => x.path === path)];

nav.push({ type: 'home', path: '/', title: 'Home', Component: Home });
nav.push({
  type: 'post',
  path: '/site-build-001',
  title: 'Building the site : part one',
  shortTitle: 'Part one',
  date: '2021-05-14',
  Component: SiteBuild001,
  prev: null,
  next: reference('/site-build-002'),
});
nav.push({
  type: 'post',
  path: '/site-build-002',
  title: 'Building the site : part two',
  shortTitle: 'Part two',
  date: '2021-05-17',
  Component: SiteBuild002,
  prev: reference('/site-build-001'),
  next: reference('/site-build-003'),
});
nav.push({
  type: 'post',
  path: '/site-build-003',
  title: 'Building the site : part three',
  shortTitle: 'Part three',
  date: '2021-15-22',
  Component: SiteBuild003,
  prev: reference('/site-build-002'),
  next: null,
});

export const buildOrderedNavigation = () => {
  const posts = nav.filter((x) => x.type === 'post');
  const sortedPosts = posts.sort((a, b) => {
    const dateA = dayjs(a.date || undefined);
    const dateB = dayjs(b.date || undefined);
    return dateA.diff(dateB, 'day');
  });
  return sortedPosts;
};

export const navigation = nav;

import dayjs from 'dayjs'

const nav = []

export const getPage = path => (path && nav.find(x => x.path === path)) || null

nav.push({
  type: 'blogpost',
  path: '/blog/site-build-001',
  title: 'Building the site : part one',
  shortTitle: 'Part one',
  date: '2021-05-14',
  prev: null,
  next: '/blog/site-build-002',
})
nav.push({
  type: 'blogpost',
  path: '/blog/site-build-002',
  title: 'Building the site : part two',
  shortTitle: 'Part two',
  date: '2021-05-17',
  prev: '/blog/site-build-001',
  next: '/blog/site-build-003',
})
nav.push({
  type: 'blogpost',
  path: '/blog/site-build-003',
  title: 'Building the site : part three',
  shortTitle: 'Part three',
  date: '2021-05-22',
  prev: '/blog/site-build-002',
  next: '/blog/site-build-004',
})
nav.push({
  type: 'blogpost',
  path: '/blog/site-build-004',
  title: 'Building the site : part four',
  shortTitle: 'Part four',
  date: null,
  prev: '/blog/site-build-003',
  next: null,
})

export const getBlogPosts = () => {
  const posts = nav.filter(x => x.type === 'blogpost')
  const sortedPosts = posts.sort((a, b) => {
    const dateA = dayjs(a.date || undefined)
    const dateB = dayjs(b.date || undefined)
    return dateA.diff(dateB, 'day')
  })
  return sortedPosts
}

export const getPageProps = context => ({ ...getPage(context.req.url) })

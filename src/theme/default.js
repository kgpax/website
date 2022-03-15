// font
const fallback = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`;
const font = {
  title: `Shanti, ${fallback}`,
  default: `Recursive, ${fallback}`,
  cursive: `'Clicker Script', cursive`,
  code: `'Cousine', 'Courier New', Courier, monospace`,
};

// font size
const fontSize = ['0.7em', '1em', '1.7em', '2.4em'];
fontSize.sm = fontSize[0];
fontSize.md = fontSize[1];
fontSize.lg = fontSize[2];
fontSize.xl = fontSize[3];

// space
const space = ['0', '0.7rem', '1rem', '2.4rem', '4.2rem'];
space.sm = space[1];
space.md = space[2];
space.lg = space[3];
space.xl = space[4];

// theme
const theme = {
  font,
  fontSize,
  space,
  color: {},
};

export default theme;

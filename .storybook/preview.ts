import themeDecorator from './themeDecorator';

export const decorators = [
  themeDecorator,
];

export const argTypes = {
  // theme: {
  //   control: 'select',
  //   options: [ 'light', 'dark' ],
  // },
};

export const args = {
  // theme: 'light',
};

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'black', value: '#000' },
      { name: 'white', value: '#fff' },
    ],
  },
};

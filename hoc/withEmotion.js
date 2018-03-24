import React, { Component } from 'react';
import { hydrate } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobalStyles } from '../shared/styles';
import defaultTheme from '../shared/theme';

const withEmotion = (ComposedComponent) => {
  class HOC extends Component {
    componentWillMount() {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line
        hydrate(window.__NEXT_DATA__.ids);
      }
      injectGlobalStyles();
    }

    render() {
      return (
        <ThemeProvider theme={defaultTheme}>
          <ComposedComponent />
        </ThemeProvider>
      );
    }
  }

  return HOC;
};

export default withEmotion;

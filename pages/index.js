import React from 'react';
import withEmotion from 'hoc/withEmotion';
import Main from 'components/Main';
import Meta from 'components/Meta';

const App = withEmotion(() => [
  <Meta
    key="index-meta"
    title="Guitar Hunter"
    description="ust in 15 minutes you will have become a guitar pro! This game teach you without boring countless lessons"
    url="https://guitar-hunter.eu"
    keywords="Android game, IOS game, iphone game, guitar, music game for iphone, cowboy game, country music game"
  />,
  <Main key="main" />,
]);

export default App;

import React from 'react';
import {render} from 'react-dom';

import Main from './main.jsx'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Main />, document.getElementById('app'));

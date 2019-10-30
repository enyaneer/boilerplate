//react-DOM-Render goes here
import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css'
import { Provider } from 'react-redux'
import store from './store'





ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here between the Provider tags! */}
    {/*consider making a root.js component with React-Router in it to put here as well*/}
    <div>
      Hello world, you made it!
    </div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html

  );

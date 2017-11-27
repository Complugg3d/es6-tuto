const React = require('react');
const ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';


import ComponentOne from 'ComponentOne';
import ComponentTwo from 'ComponentTwo';

//load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <div>
    <ComponentOne count={123}/>
    <ComponentTwo count={31}/>
  </div>,
  document.getElementById('app')
);

import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/helloworld.jsx';

ReactDom.render( <HelloWorld phrase = "ES6 101" / > ,
    document.getElementById('root')
);

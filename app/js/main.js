var React = require('react');
var ReactDom = require('react-dom');

let log = 0;
let { log, sin, cos } = Math;

ReactDom.render(<div>{Math.log}</div>,document.getElementById('reactMain'));
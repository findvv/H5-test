var React = require('react');
var ReactDom = require('react-dom');
var a = [1,23,4,5];
var b = a.map(b=>b+1);
ReactDom.render(<div>test</div>,document.getElementById('reactMain'));
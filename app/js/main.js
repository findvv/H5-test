var React = require('react');
var ReactDom = require('react-dom');
var pageResponse = require('./modules/fullPage.js').pageResponse;

pageResponse({
  selector: '.all', //模块的类名
  mode: 'contain', // auto || contain || cover 
  width: '640', //默认宽320px 
  height: '1136', //默认高504px
  origin : 'center center 0'
})

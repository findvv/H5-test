var React = require('react'),
    ReactDom = require('react-dom'),
    Loading = require('./modules/loading.js'),
    Main = require('./modules/section.js');
// // 初始化页面
var dw = document.documentElement.clientWidth,
    ds = dw/640>1?1:dw/640,
    o = document.getElementById('all').style;
    o.webkitTransform = "scale(" + ds + ")";
    o.transform = "scale(" + ds + ")";


var App = React.createClass({
  getInitialState:function(){
    return{
      showMain:false
    }
  },
  hideLoading:function(){
    this.setState({
      showMain:true
    });
  },
  render:function(){
    return(
      <div className="wrap">
        <Loading hideLoading={this.hideLoading}/>
        <Main showMain={this.state.showMain}/>
      </div>
    )
  }
});
ReactDom.render(<App />,document.getElementById('all'));
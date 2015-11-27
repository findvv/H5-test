var React = require('react'),
    ReactDom = require('react-dom'),
    // pageResponse = require('./modules/fullPage.js').pageResponse,
    Loading = require('./modules/loading.js'),
    ShareFloat = require('./modules/shareFloat.js'),
    Main = require('./modules/section.js');

// // 初始化页面
// pageResponse({
//   selector: '.all'
// });


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
        <ShareFloat />
        <Main showMain={this.state.showMain}/>
      </div>
    )
  }
});
ReactDom.render(<App />,document.getElementById('all'));
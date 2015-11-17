var React = require('react'),
    ReactDom = require('react-dom'),
    pageResponse = require('./modules/fullPage.js').pageResponse,
    Loading = require('./modules/loading.js'),
    ShareFloat = require('./modules/shareFloat.js'),
    Main = require('./modules/section.js');

// 初始化页面
pageResponse({
  selector: '.all'
});

export let showOrHide = {
  style : 'aa'
}
var App = React.createClass({
  mixins:[showOrHide],
  getInitialState:function(){
    return{
      showMain:false
    }
  },
  render:function(){
    return(
      <div className="wrap">
        <Loading />
        <ShareFloat />
        <Main showMain={this.state.showMain}/>
      </div>
    )
  }
});
ReactDom.render(<App />,document.getElementById('all'));
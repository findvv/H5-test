var React = require('react');
var Loader = require('./preload.js').resLoader;
var allImgs = [ 'http://news.sohu.com/upload/zzxtestPaomadeng/img/1.png',
                'http://news.sohu.com/upload/zzxtestPaomadeng/img/bg.jpg'
              ];
module.exports = React.createClass({
  getInitialState:function(){
    return{
      progress:'0%',
      show:true
    }
  },
  componentDidMount:function(){
    let that = this,
        loader = new Loader({
        resources: allImgs,
        onStart: function(total) {},
        onProgress: function(current, total) {
          var percent = parseInt(current / total * 100) + '%';
          that.setState({
            progress:percent
          });
        },
        onComplete: function(total) {
          that.props.hideLoading();
          that.setState({
            show:false
          });
        }
      });
    that.refs.loadingImg.onload = function(){
      loader.start();
    }    
  },
  render:function(){
    let style = {display:this.state.show?'block':'none'};
    return(
      <div className="loading" style={style}>
        <p>{this.state.progress}</p>
        <img src={baseURL+"loading.jpg"} ref="loadingImg"/>
        <div className="loadingImg"></div>
      </div>
    )
  }
});

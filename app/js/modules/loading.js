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
          that.setState({
            show:false
          });
        }
      });
    loader.start();
  },
  render:function(){
    let style = {display:this.state.show?'block':'none'};
    return(
      <div className="loading" style={style}>
        <div className="pace">
          <div className="pace-progress">
            {this.state.progress}
          </div>
        </div>
      </div>
    )
  }
});

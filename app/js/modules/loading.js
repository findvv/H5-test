var React = require('react');
var Loader = require('./preload.js').resLoader;
var allImgs = [ 'http://news.sohu.com/upload/qiyueqiriqing/images/5.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/2.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/7.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/bg.jpg',
                'http://news.sohu.com/upload/qiyueqiriqing/images/4.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/share.jpg',
                'http://news.sohu.com/upload/qiyueqiriqing/images/1.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/music-on.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/6.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/music.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/14.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/3.png',
                'http://news.sohu.com/upload/qiyueqiriqing/images/8.png'
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

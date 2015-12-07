var React = require('react');
var Loader = require('./preload.js').resLoader;
var allImgs = ['http://news.sohu.com/upload/shuzizhidaozzx/public/img/0.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/1.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/2.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/3.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/4.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/5.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/6.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/7.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/8.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/9.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/10.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/11.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/mayer.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/number.png',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/1.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/bg.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/icons.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n1.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n2.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n3.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n4.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n5.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n6.jpg',
              'http://news.sohu.com/upload/shuzizhidaozzx/public/img/n7.jpg'
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
    let loadImg = new Image();
    loadImg.src = baseURL+"loading.jpg";
    loadImg.onload = function() {
      loader.start();
    }  
  },
  render:function(){
    let style = {display:this.state.show?'block':'none'};
    return(
      <div className="loading" style={style}>
        <p>{this.state.progress}</p>
        <div className="loadingImg"></div>
      </div>
    )
  }
});

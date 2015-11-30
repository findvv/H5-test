var React = require('react');
var Loader = require('./preload.js').resLoader;
var allImgs = [ baseURL+'0.png',
                baseURL+'1.png',
                baseURL+'2.png',
                baseURL+'3.png',
                baseURL+'4.png',
                baseURL+'5.png',
                baseURL+'6.png',
                baseURL+'7.png',
                baseURL+'8.png',
                baseURL+'9.png',
                baseURL+'10.png',
                baseURL+'11.png',
                baseURL+'mayer.png',
                baseURL+'number.png',
                baseURL+'1.jpg',
                baseURL+'bg.jpg',
                baseURL+'icons.jpg',
                baseURL+'n1.jpg',
                baseURL+'n2.jpg',
                baseURL+'n3.jpg',
                baseURL+'n4.jpg',
                baseURL+'n5.jpg',
                baseURL+'n6.jpg',
                baseURL+'n7.jpg'
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

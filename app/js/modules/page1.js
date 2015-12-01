let React = require('react');
module.exports = React.createClass({
  firstAnimate(){
    let rnd = (n,m)=>parseInt(Math.random()*(m-n)+n),
        that = this,
        oDiv = document.getElementsByClassName('topic')[0],
        C=10,
        R=10,
        divCX=oDiv.offsetWidth/2,
        divCY=oDiv.offsetHeight/2,
        os = {};
    for(let i=0;i<R;i++)
    {
      for(let j=0;j<C;j++)
      {
        let w=Math.floor(oDiv.offsetWidth/C),
            h=Math.floor(oDiv.offsetHeight/R),
            oNewDiv=document.createElement('div'),
            oStyle=oNewDiv.style,
            offsetLeft = j*w,
            offsetTop = i*h,
            l=offsetLeft+w/2,
            t=offsetTop+h/2,
            disX=l-divCX,
            disY=t-divCY;
        oNewDiv.id='new_'+i+'_'+j;
        oStyle.opacity=0;
        oStyle.left=j*w+'px';
        oStyle.top=i*h+'px';
        oStyle.width=w+'px';
        oStyle.height=h+'px';
        oStyle.WebkitTransform='perspective(800px) translate3d('+disX+'px, '+disY+'px, 600px) rotateY('+rnd(-180, 180)+'deg) rotateX('+rnd(-180, 180)+'deg) scale(2,2)';
        oStyle.transform='perspective(800px) translate3d('+disX+'px, '+disY+'px, 600px) rotateY('+rnd(-180, 180)+'deg) rotateX('+rnd(-180, 180)+'deg) scale(2,2)';
        oStyle.opacity=0;
        oStyle.backgroundPosition = '-'+offsetLeft+'px -'+offsetTop+'px';
        oDiv.appendChild(oNewDiv);
        (function (oNewDiv, disX, disY){
          setTimeout(function (){
            oStyle.WebkitTransform='translate3d(0,0,0)';
            oStyle.transform='translate3d(0,0,0)';
            oStyle.opacity=1;
        }, rnd(300, 500));
        })(oNewDiv, disX, disY);
      }
    }
    setTimeout(function(){
      that.refs.section1.className = "section1 section1-an";
    }, 1500);
  },
  componentWillReceiveProps(){
    this.firstAnimate();
  },
  getInitialState(){
    return{
      hidePage1:false
    }
  },
  hidePage1(){
    this.setState({
      hidePage1:true
    });
    this.props.playMusic();
  },
  render(){
    var style = {'display':this.state.hidePage1?'none':'block'}
    return(
      <section className="section1" ref="section1" style={style}>
        <img src={baseURL+"0.png"} className="logo1"/>
        <div className="topic"></div>
        <div className="icons">
          <div className="icon icon1"></div>
          <div className="icon icon2"></div>
          <div className="icon icon3"></div>
          <div className="icon icon4"></div>
          <div className="icon icon5"></div>
          <div className="icon icon6"></div>
          <div className="icon icon7"></div>
          <div className="icon icon8"></div>
        </div>
        <img  className="mayer"/>
        <img src={baseURL+"4.png"} className="go" onClick={this.hidePage1}/>
      </section>
    )
  }
})
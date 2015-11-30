let React = require('react');
let IScroll = require('iscroll');
let allItems = require('./data');
let allNames = [];
let len = allItems.length;
for(let i of allItems){
  allNames.push(i.name);
}
let doubleItems = allNames.concat(allNames);
module.exports = React.createClass({
  componentDidMount:function(){
    let that = this;
    let myScroll = new IScroll('#scrollWrap',{
      snap: 'li',
      bounce:false,
      mouseWheel: true
    });
    myScroll.goToPage(0,len/2,0);
    myScroll.on('scrollStart',function(){
      that.setState({
        hideBtn:true
      });
    });
    myScroll.on('scrollEnd', function(){
      let currentPageY = this.currentPage.pageY;
      if (currentPageY<len/2) {
        currentPageY+=len;
        myScroll.goToPage(0, currentPageY,0);
      }
      if (2*len-currentPageY<len) {
        currentPageY-=len;
        myScroll.goToPage(0,currentPageY ,0);
      }
      that.setState({
        currentNum:currentPageY,
        hideBtn:false
      })
    });
  },
  getInitialState:function(){
    return{
      lis:doubleItems,
      currentNum:len/2,
      hideDes:true,
      hideShare:true,
      hideBtn:false
    }
  },
  showDes:function(){
    this.setState({
      hideDes:false
    })
  },
  hideDes:function(){
    this.setState({
      hideDes:true
    })
  },
  showShare:function(){
    this.setState({
      hideShare:false
    })
  },
  hideShare:function(){
    this.setState({
      hideShare:true
    })
  },
  render:function(){
    let that = this,
        num = that.state.currentNum + 5,
        h = num%len,
        height = (allItems[h].num-1)*4 + 'px',
        highStyle = {transform:`translate3d(0,${height},0)`,WebkitTransform:`translate3d(0,${height},0)`},
        hs = String(allItems[h].num),
        initLis = that.state.lis.map(function (data,index) {
          var isFocus = (index == num);
          return (
            <li key={index} className={isFocus?'isFocus':''}>{data}</li>
          );
        }),
        isHideDes = {display:this.state.hideDes?'none':'block'},
        isHideShare = {display:this.state.hideShare?'none':'block'},
        isHideBtn = {display:this.state.hideBtn?'none':'block'};
    if (hs.length == 1) {hs = '00' + hs}
    if (hs.length == 2) {hs = '0' + hs}
    return(
      <section className="section2">
        <div className="nav-border" ref="navBorder" id="scrollWrap">
          <ul className="navs">
            {initLis}
          </ul>
          <img src={baseURL+"mayer.png"} className="mayer"/>
        </div>
        <img src={baseURL+"1.png"} className="focus-img"/>
        <div className="music-btn" />
        <div className="share-btn" onClick={this.showShare}/>
        <div className="rank">
          <p className={`rn rn1 num${hs[0]}`}></p>
          <p className={`rn rn2 num${hs[1]}`}></p>
          <p className={`rn rn3 num${hs[2]}`}></p>
        </div>
        <div className="detail" style={isHideDes}>
          <div className="d-mayer"></div>
          <div className="d-main">
            <div className="d-close" onClick={this.hideDes}></div>
            <p className="d-title">{allItems[h].name}</p>
            <p className="d-content">{allItems[h].des}</p>
          </div>
        </div>
        <div className="share-float" style={isHideShare}>
          <img src={baseURL+"8.png"} className="s1"/>
          <img src={baseURL+"9.png"} className="s2"/>
          <p><span>策划/王茜</span><span>设计/阿毛</span><span>制作/张兆翔</span></p>
          <img src={baseURL+"10.png"} className="s3" onClick={this.hideShare}/>
        </div>
        <div className="zhu">
          <img src={baseURL+"5.png"} className="zhu-1"/>
          <div className="zhu-2" style={highStyle}>
            <div className="person"></div>
            <img src={baseURL+"6.png"}/>
            <div className="des-btn" onClick={this.showDes} style={isHideBtn}></div>
          </div>
        </div>
      </section>
    )
  }
})
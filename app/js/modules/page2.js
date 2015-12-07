let React = require('react');
let IScroll = require('iscroll');
let allItems = require('./data');
let allNames = [];
let len = allItems.length;
let canPlayBgm = true;
for(let i=0;i<len;i++){
  allNames.push(allItems[i].name);
}
let n = 1;
let musicList = [];
for (let i=0;i<7;i++){
  musicList[i] = new Audio();
  musicList[i].src = baseURL+(i+1)+".mp3";
}
let doubleItems = allNames.concat(allNames);
module.exports = React.createClass({
  componentDidMount(){
    let that = this;
    let myScroll = new IScroll('#scrollWrap',{
      snap: 'li',
      bounce:false,
      mouseWheel: true
    });
    myScroll.goToPage(0,len/2,0);
    myScroll.on('scrollStart',function(){
      that.refs.desBtn.style.display = 'none';
    });
    myScroll.on('scrollEnd', function(){
      that.refs.desBtn.style.display = 'block';
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
      });  
    });
  },
  getInitialState(){
    return{
      lis:doubleItems,
      currentNum:len/2,
      hideDes:true,
      hideShare:true,
      hideBtn:false,
      playBgm:true
    }
  },
  playMusic(num){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    if (!isAndroid) {
      musicList[num].play();
    }
  },
  componentWillReceiveProps(){
    if (canPlayBgm) {
      this.refs.bgm.play();
      canPlayBgm = false;
    }    
    n+=1;
  },
  showDes(){
    this.setState({
      hideDes:false
    });
  },
  hideDes(){
    this.setState({
      hideDes:true
    })
  },
  showShare(){
    this.setState({
      hideShare:false
    })
  },
  hideShare(){
    this.setState({
      hideShare:true
    })
  },
  changeMusic(){
    if (this.state.playBgm) {
      this.setState({
        playBgm:false
      });
      this.refs.bgm.pause();
    }
    else{
      this.setState({
        playBgm:true
      });
      this.refs.bgm.play();
    }
  },
  render(){
    let that = this,
        num = that.state.currentNum + 5,
        h = num%len,
        height = (allItems[h].num-1)*4 + 'px',
        highStyle = {transform:`translate3d(0,${height},0)`,WebkitTransform:`translate3d(0,${height},0)`},
        hn = allItems[h].num,
        hs = String(hn),
        rankClass="",
        initLis = that.state.lis.map(function (data,index) {
          var isFocus = (index == num);
          return (
            <li key={index} className={isFocus?'isFocus':''}>{data}</li>
          );
        }),
        isHideDes = {display:this.state.hideDes?'none':'block'},
        isHideShare = {display:this.state.hideShare?'none':'block'},
        isHideBtn = {display:this.state.hideBtn?'none':'block'},
        musicClass = this.state.playBgm?'music-btn-on':'music-btn';
    if (hs.length == 1) {hs = '00' + hs}
    if (hs.length == 2) {hs = '0' + hs}
    if (n==3) {
      switch(true){
        case hn==1:
          rankClass = "rank1";
          that.playMusic(0);
          break;
        case hn==2:
          rankClass = "rank2";
          that.playMusic(1);
          break;
        case hn==3:
          rankClass = "rank3";
          that.playMusic(2);
          break;
        case hn<30:
          rankClass = "rank4";
          that.playMusic(3);
          break;
        case hn<50:
          rankClass = "rank5";
          that.playMusic(4);
          break;
        case hn<80:
          rankClass = "rank6";
          that.playMusic(5);
          break;
        default:
          rankClass = "rank7";
          that.playMusic(6);
          break;
      }
    }
    return(
      <section className="section2">
        <audio src={baseURL+"bgm.mp3"} ref="bgm" loop="loop"/>
        <div className="nav-border" ref="navBorder" id="scrollWrap">
          <ul className="navs">
            {initLis}
          </ul>
          <img src={baseURL+"mayer.png"} className="mayer"/>
        </div>
        <img src={baseURL+"1.png"} className="focus-img"/>
        <div className={musicClass} onClick={this.changeMusic}/>
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
            <div className={"person "+rankClass}></div>
            <img src={baseURL+"6.png"}/>
            <div className="des-btn" onClick={this.showDes} style={isHideBtn} ref="desBtn"></div>
          </div>
        </div>
      </section>
    )
  }
})
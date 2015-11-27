let React = require('react');
let IScroll = require('iscroll');
let allItems = ['泡面销售量','胖子的数量','全球网速','睡眠质量','赌博输钱数','军队战斗系数','人造美脸数量','足球联赛上座率','2015风云股市','全球网瘾战争','最贵的国家','泡面销售量','胖子的数量','全球网速','睡眠质量','赌博输钱数','军队战斗系数','人造美脸数量','足球联赛上座率','2015风云股市','全球网瘾战争','最贵的国家'];
let doubleItems = allItems.concat(allItems);
let len = allItems.length;
module.exports = React.createClass({
  componentDidMount:function(){
    let that = this;
    let myScroll = new IScroll('#scrollWrap',{
      snap: 'li',
      bounce:false,
      mouseWheel: true
    });
    myScroll.goToPage(0,len/2,0);
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
        currentNum:currentPageY
      })
    });
  },
  getInitialState:function(){
    return{
      lis:doubleItems,
      currentNum:len/2
    }
  },
  render:function(){
    let that = this;
    let initLis = that.state.lis.map(function (data,index) {
      var isFocus = (index == (that.state.currentNum+5));
      return (
        <li key={index} className={isFocus?'isFocus':''}>{data}</li>
      );
    });
    return(
      <div className="nav-border" ref="navBorder" id="scrollWrap">
        <ul className="navs">
          {initLis}
        </ul>
      </div>
    )
  }
})
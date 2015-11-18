var React = require('react');
var Nav = require('./nav.js');
module.exports = React.createClass({
  render:function(){
    return(
      <div className="main">
        <section className="section1">
          <Nav />
          <img src="http://news.sohu.com/upload/zzxtestPaomadeng/img/1.png" className="focus-img"/>
        </section>
      </div>
    )
  }
});
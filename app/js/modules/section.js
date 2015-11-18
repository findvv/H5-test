var React = require('react');
var Nav = require('./nav.js');
module.exports = React.createClass({
  render:function(){
    return(
      <div className="main">
        <section className="section1">
          <Nav />
          <img src="./public/img/1.png" className="focus-img"/>
        </section>
      </div>
    )
  }
});
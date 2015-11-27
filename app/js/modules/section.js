let React = require('react');
let Page1 = require('./page1.js');
let Page2 = require('./page2.js');
module.exports = React.createClass({
  render(){
    return(
      <div className="main">
        <Page1 showMain="this.props.showMain"/>
        <section className="section2">
          <Page2 />
          <img src={baseURL+"1.png"} className="focus-img"/>
        </section>
      </div>
    )
  }
});
let React = require('react');
let Page1 = require('./page1.js');
let Page2 = require('./page2.js');
module.exports = React.createClass({
  render(){
    return(
      <div className="main">
        <Page1 showMain="this.props.showMain"/>
        <Page2 />
      </div>
    )
  }
});
let React = require('react');
let Page1 = require('./page1.js');
let Page2 = require('./page2.js');
module.exports = React.createClass({
  getInitialState(){
    return{
        playBgm:false
      }
  },
  playMusic(){
    this.setState({
      playBgm:true
    });
  },
  render(){
    return(
      <div className="main">
        <Page1 showMain={this.props.showMain} playMusic={this.playMusic} />
        <Page2 playBgm={this.state.playBgm}/>
      </div>
    )
  }
});
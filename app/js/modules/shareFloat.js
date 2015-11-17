var React = require('react');
import {showOrHide} from '../main';
console.log(showOrHide);
module.exports = React.createClass({
  mixins:[showOrHide],
  render:function(){
    console.log(showOrHide);
    return(
      <div className="share-float">
        <img src="" />
      </div>
    )
  }
});

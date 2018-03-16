import React, { Component } from 'react';
import Star from './star';

export default class WrapStars extends Component {
  render(){
    const { planet, total } = this.props;
    return(
      <div>
        {
          planet.map((item, index)=>{
            return <Star planet={item} size={item.population/total} key={index}/>
          })
        }
      </div>
    )
  }
}

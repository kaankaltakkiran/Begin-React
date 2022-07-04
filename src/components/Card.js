import React from 'react';

import PropTypes from 'prop-types'; //veri türü kısıtlaması için


//props componenetsler arası veri iletimi
class Card extends React.Component{
  static defaultProps = {
    cardTitle:'Default Card Title'
  }
  render(){
    return (
      <div className="card w-100">
      <img src={this.props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{this.props.cardTitle}</h5>
        <p className="card-text">{this.props.cardText}</p>
        <p className="card-text"><small className="text-muted">{this.props.updateTimes}</small></p>
      </div>
    </div>
  );
  }
}

//varsıyalan defult props oluşturma
//veri gelmezse bu yazar

/* Card.defaultProps={
  cardTitle:'Default Card Title'
} */

//veri türü kısıtlaması
Card.propTypes={
  cardText:PropTypes.array
}


export default Card; //cardı exporxt etme

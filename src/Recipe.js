import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingridients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  render() {
    const {title, img, instructions} = this.props;
    const ingridients = this.props.ingridients.map((ing, index) => <li key={index}>{ing}</li>)
    return (
      <div className="recipe-card">
        <div className="recipe-card__image">
          <img src={img} alt={title}/>
        </div>
        <div className="recipe-card__content">
          <h3 className="recipe-card__title">{title}</h3>
          <h4>Ingridients:</h4>
          <ul>
            {ingridients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;
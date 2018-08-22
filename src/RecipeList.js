import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [{
      title: 'Spaghetti',
      ingridients: ['pasta', '8 cups water', '1 box spaghetti'],
      instructions: 'Open jar of spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce',
      img: 'spaghetti.jpg'
    },
    {
      title: 'Milkshake',
      ingridients: ['2 scoops of ice cream', '8 ounces of milk'],
      instructions: 'Combine ice cream and milk. Blend until creamy',
      img: 'milkshake.jpg'
    },
    {
      title: 'Avocado Toast',
      ingridients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
      instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper',
      img: 'avocado_toast.jpg'
    }]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map((r, indx) => <Recipe key={indx} {...r}/>)}
      </div>
    );
  }
}

export default RecipeList;
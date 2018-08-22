import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    links: ['New Recipe', 'Home', 'About', 'Contact Us']
  }

  render() {
    return (
      <header>
        <h2><a href="/">Recipe App</a></h2>
        <nav>
            {this.props.links.map((link, indx) => <li key={indx}><a>{link}</a></li>)}
        </nav>
      </header>
    );
  }
}

export default Navbar;
import React from 'react';
import FavoritesIndexContainer from './favorites/favorites_index_container';
import GamesIndexContainer from './games/games_index_container';
import HerosIndexContainer from './heros/heros_index_container';

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       class1: "active",
       class2: "not-active"
     };
  }

  setclass1() {
  if (this.state.class1 === "not-active") {
    this.setState({class1: "active",class2: "not-active"});
  }
}

setclass2() {
  if (this.state.class2 === "not-active") {
    this.setState({class2: "active", class1: "not-active"});
  }
}

  render() {
    return (
      <div className='app'>
        <header className="header">
          <nav className="header-nav clearfix">

            <h1 className="header-logo"><a href="#">Dota2 Widget</a></h1>

            <ul className="nav-ul clearfix">
              <li className="nav-li" onClick={this.setclass1.bind(this)}><a href="#">Douyu Dota2</a></li>
              <li className="nav-li" onClick={this.setclass2.bind(this)}><a href="#">Heros Wiki</a></li>
              <li className="nav-li favorites">
                <FavoritesIndexContainer />
              </li>
            </ul>

          </nav>
        </header>

        <div className={this.state.class1}>
          <GamesIndexContainer />
        </div>
        <div className={this.state.class2}>
          <HerosIndexContainer />
        </div>
      </div>
    );
  }
}

export default App;

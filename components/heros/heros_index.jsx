import React from 'react';
import HerosIndexDetail from './heros_index_detail';

class HeroIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hero: {}};
  }

  componentDidMount() {
    this.props.fetchAllHerosData();
    this.props.fetchAllHerosPairs();
  }

  handleclick(id){
    return (e) => {
      this.setState({hero: this.props.allHeros[id]});
    };
  }

  render() {
    if (Object.keys(this.props.allHeros).length === 0) {
      return (<div className="heros-index"></div>);
    } else {
      return (
        <div className="heros-index">
          <ul className="heros-ul">
            {Object.keys(this.props.allPairs).map( id=>
              <li className="heros-li" key={id} onClick={this.handleclick(id)}>
                {this.props.allPairs[id]}
              </li>
              )
            }
          </ul>
          <HerosIndexDetail hero={this.state.hero} />
        </div>);
    }
  }
}

export default HeroIndex;

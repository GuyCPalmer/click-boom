import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import CardItem from './components/CardItem/CardItem';
import images from './images.json'


class App extends Component {
  state = {
  images: images,
  score : 0,
  topScore : 0
  };

  sortImages = (id, clicked) => {

    const imgOrder = this.state.images;

    if (clicked) {
      window.confirm('You lost. Try again and pay more attention');
      imgOrder.forEach((img, index) => {
      imgOrder[index].clicked = false;
        
      });

      return this.setState({
        images: imgOrder.sort(() => Math.random() - 0.5),
        topScore: this.state.score,
        score: 0

      })
    }

    else {
      imgOrder.forEach((img, index) => {
        if(id === img.id) {
          imgOrder[index].clicked = true;
        }
      });
      return this.setState({images: imgOrder.sort(() => Math.random() - 0.5), score: this.state.score + 1})
  }
};


  render() {
    return (
      <div className="App">
        <Header 
          score = {this.state.score}
          topScore = {this.state.topScore}
        />
        <Cards>
        {this.state.images.map(img => (
            <CardItem
            key={img.id}
            id={img.id}
            src={img.image}
            clicked={img.clicked}
            sortImages={this.sortImages}
            />
        ))}
        </Cards>
      </div>
    );
  }
}

export default App;

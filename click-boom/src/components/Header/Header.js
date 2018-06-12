import React from 'react';
import './Header.css'

const Header = props => (
        <div className="header">
            <div className="row App-header">
                <h2 className="col-md-4 text-center header-name">Around the World Game</h2>
                <h5 className="col-md-8 text-center header-text">Click on an image to earn points, but don't click on any more than once!</h5>
            </div>
            <div className="row game-score">
                <h3 className="col-md">Score: {props.score}</h3>
                <h3 className="col-md">Top Score: {props.topScore}</h3>
            </div>
        </div>
);
export default Header;
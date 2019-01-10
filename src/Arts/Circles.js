import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '@Utils/getColor';

const Circle = styled.div`
  position: absolute;
  height: ${props => props.radius}px;
  width: ${props => props.radius}px;
  border-radius: 50%;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  ${props => Math.random() > 0.3 ?  'background-image:' + 
    'repeating-linear-gradient(' + (Math.random() > 0.5 ? '45deg' : '135deg') + ', '+props.color+', transparent 5px,' + props.color + ' 5px, rgba(255,255,255,.5) 10px)'
    : 'background-color: ' + props.color};
`;

const BoxClass = styled.div`
  display: grid;
  height: 400px;
  width: 400px;
  position: relative;
`;

class Circles extends Component {
  
  myRef = React.createRef();
  state = {rect : null};
  componentDidMount() {
    this.setState({rect: this.myRef.current.getBoundingClientRect()});
  }
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) - (max / 4)
  }

  render() {
    return (
      <Fragment> 
        <BoxClass ref={this.myRef}>
          {this.state.rect ? Array.from(Array(31)).map((_, rowIndex) => 
            (<Circle 
                key={'circles' + rowIndex + this.state.rect.height}
                x={this.getRandomNumber(this.state.rect.width)}
                y={this.getRandomNumber(this.state.rect.height)}
                radius={this.getRandomNumber(this.state.rect.height)}
                color={getRandomColor()}>
              </Circle>)  
          ) : ''}
        </BoxClass> 
      </Fragment>
    );
  }
}

export default Circles;
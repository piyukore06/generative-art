import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import pattern from '@Image/pattern.png'
import { getRandomColor } from '@Utils/getColor';
const Box = styled.div`
  height: 40px;
  width: 40px;
  margin: 1px;
  transition: transform .8s ease-in-out; 
  backround-color: ${props => props.color},
  transition-delay: ${props => (50 * props.index + 'ms')},
`;
/* // &::after {
//   background-image: url("${pattern}");
//   content: "";
//   height: 200%;
//   left: 50%;
//   opacity: 0.3;
//   position: absolute;
//   top: -50%;
//   width: 200%;
// } */
const Column = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 400px;
  width: 400px;
`;
const columns = 10;
const rows = 10;

class Gravel extends Component {
 
  getRandomRotation = (index) => {
    const random = ((2 * Math.random() * index) - index);
    return (random ? random : index) * 5;
  }

  render() {
    return (
      <Fragment> 
        {
          Array.from(Array(rows)).map((_, rowIndex) => 
            <Column key={rowIndex}>
              {Array.from(Array(columns)).map((_, columnIndex) => 
                <Box
                  color={getRandomColor()}
                  random={true}
                  key={'gravel' + rowIndex.toString() + columnIndex.toString()}
                  index={rowIndex}
                  shouldHideOverflow={(columnIndex === columns - 1) || (rowIndex === 0)}
                  rotation={this.getRandomRotation(rowIndex + 1)}
                />
              )}
            </Column>
            
          )
        }
      </Fragment>
    );
  }
}

export default Gravel;
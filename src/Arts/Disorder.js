import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '@Utils/getColor';

const ColumnClass = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: #F39D67;
`;

const columns = 5;
const rows = 5;

const Box = styled.div`
  height: 80px;
  width: 80px;
  margin: 1px;
  z-index: 1;
`;

const InnerBox = styled.div.attrs({
  width: props => (props.size - (3 * props.index)) + 'px',
  height: props => (props.size - (3 * props.index)) + 'px'
})`
  border: 0.5px solid ${props => props.color};
  margin: 1px;
  transition-delay: 200ms;
  transition: transform .8s ease-in-out;
  background-color: ${props => props.color};
  ${props => (props.rotation ? `transform: rotate(${props.rotation}deg);` : '')}
`;

class Disorder extends Component {

  getBoxes = (size, index) => {
    if (size < 40) {
      return '';
    }
    return (<InnerBox key={size + index} rotation={40} size={size} index={index} color={getRandomColor()} >
              {this.getBoxes(size - 2, index + 1)}     
    </InnerBox>);
  }
  render() {
    return (
      <Fragment> 
        {
          Array.from(Array(rows)).map((_, rowIndex) => 
            <ColumnClass>
              {Array.from(Array(columns)).map((_, columnIndex) => 
                <Box
                  key={'disorder' + rowIndex.toString() + columnIndex.toString()}
                  index={rowIndex}
                > 
                  {this.getBoxes(98, 1)}
                </Box>
              )}
            </ColumnClass>
          )
        }
      </Fragment>
    );
  }
}

export default Disorder;
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '@Utils/getColor';

const ColumnClass = styled.div`
  display: grid;
  grid-auto-flow: column;
  background-color: #EC9302;
`;

const columns = 4;
const rows = 1;

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

class BigDisorder extends Component {

  getBoxes = (size, index) => {
    if (size < 65) {
      return '';
    }
    return (<InnerBox key={'bigDisorder'+size + index} rotation={20} size={size} index={index} color={getRandomColor()} >
              {this.getBoxes(size - 1, index + 1)}     
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
                  key={'bigDisorder' + rowIndex.toString() + columnIndex.toString()}
                  index={rowIndex}
                > 
                  {this.getBoxes(200, 1)}
                </Box>
              )}
            </ColumnClass>
          )
        }
      </Fragment>
    );
  }
}

export default BigDisorder;
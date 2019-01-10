import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '@Utils/getColor';

const ColumnClass = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const columns = 5;
const rows = 5;

const Box = styled.div`
  height: 80px;
  width: 80px;
  margin: 1px;
  z-index: 1;
`;

const InnerBox = styled.div.attrs(({size, index}) => ({
  width: size - (3 * index) + 'px',
  height: size - (3 * index) + 'px'
}))`
  border: 0.5px solid ${props => props.color};
  margin: 1px;
  transition-delay: 200ms;
  transition: transform .8s ease-in-out;
  background-color: ${props => props.color};
  ${props => (getfloat(props.float))}
`;

const getfloat = (float) => {
  switch (float) {
    case 0:
      return `float: left`;
    case 1:
      return `float: center`;
    default:
      return `float: right`;
  }
}
class Lines extends Component {

  getBoxes = (size, index, key) => {
    if (size < 50) {
      return '';
    }
    const float = Math.floor(Math.random() * 3); 
    return (<InnerBox key={key + size} float={float} size={size} index={index} color={getRandomColor()} >
              {this.getBoxes(size - 1, index + 1)}     
    </InnerBox>);
  }
  render() {
    return (
      <Fragment> 
        {
          Array.from(Array(rows)).map((_, rowIndex) => 
            <ColumnClass key={'Lines' + rowIndex}>
              {Array.from(Array(columns)).map((_, columnIndex) => 
                <Box
                  key={'Lines' + rowIndex.toString() + columnIndex.toString()}
                  index={rowIndex}
                > 
                  {this.getBoxes(128, 1, rowIndex.toString() + columnIndex.toString())}
                </Box>
              )}
            </ColumnClass>
          )
        }
      </Fragment>
    );
  }
}

export default Lines;
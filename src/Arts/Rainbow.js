import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '@Utils/getColor';

const Box  = styled.div`
  background-color: ${props => props.color};
  transition-delay: 50 * ${props => props.index}ms;
  transition: transform .8s ease-in-out; 
  border-top: 20px solid ${props => props.top};
  border-left: 20px solid ${props => props.left};
  border-bottom: 20px solid ${props => props.bottom};
  border-right: 20px solid ${props => props.right};
`;

const Column = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
const columns = 10;
const rows = 10;

class Rainbow extends Component {

  reset = () => {
    this.setState({
      ...this.state,
      reset: true
    });
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
                  key={'rainbow' + rowIndex.toString() + columnIndex.toString()}
                  index={rowIndex}
                  top={getRandomColor()}
                  left={getRandomColor()}
                  right={getRandomColor()}
                  bottom={getRandomColor()}
                />
              )}
            </Column>
          )
        }
      </Fragment>
    );
  }
}
export default Rainbow;
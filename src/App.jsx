import React, { PureComponent } from 'react';
import { Octocat } from '@Components';
import '@Styles/App.scss';
import { Gravel, Circles, Disorder, Lines, Rainbow, BigDisorder } from '@Arts'
import styled from 'styled-components';
import { Router, navigate, Redirect } from "@reach/router";

export default class App extends PureComponent {
  NoOfArts = 5;
  constructor(props) {
    super(props);
    this.state = {current: 1};
  }
  getPrevious = () => {
    const prev = this.state.current - 1 === 0 ? this.NoOfArts : this.state.current - 1;
    this.setState({current: prev});
    navigate('/' + prev);
  }
  getNext = () => {
    const next = this.state.current + 1 === this.NoOfArts + 1 ? 1 : this.state.current + 1;
    this.setState({current: next});
    navigate('/' + next);
  }
  render() {
    return (
      <>
      <Octocat />
      <Heading>Generative Art</Heading>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Container>
          <Router>
            <Redirect from="/" to="/1" />
            <Lines path="/1" />
            <Circles path="/2"/>
            <Disorder path="/3"/>
            <BigDisorder path="/4"/>
            <Rainbow path="/5"/>
            <Gravel path="/6"/>
          </Router>
        </Container>
        <Navigator>
          <a onClick={this.getPrevious} className="btn"><span className="icon icon-left"></span></a>
          <a onClick={this.getNext} className="btn"><span className="icon icon-right"></span></a>
        </Navigator>
      </div>
      </>
    );
  }
}

const Heading = styled.h1`
  font-family: 'Cabin Sketch', cursive;
  font-size: 40px;
  text-align: center;
  padding: 20px;
`;

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 0px auto;
  overflow: hidden;
  display: block;
  @media screen and (max-width: 500px) {
    width : 300px;
  }
`;
const Navigator = styled.div`
  margin-top: 20px;
  text-align: center;
`;

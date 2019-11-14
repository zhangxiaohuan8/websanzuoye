import { Carousel } from 'antd-mobile';
import React, { Component } from 'react'
export default class Lunbo1 extends React.Component {
  state = {
    data: ['1', '2'],
    imgHeight: 400,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="/"
            >
              <img
                style={{ height: '100%',width:'100%'}}
                src={require('../images/s1.jpg')}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

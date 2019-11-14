import { Flex, WhiteSpace } from 'antd-mobile';
import React from 'react'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <img style={{width:'100%',height:'100%'}}src={require('../images/2.jpg')}/>
  <div style={{position: 'absolute',left: '40%',
    top: '50%'}}>热门品牌</div></div>
);

const HomeBuju = () => (
  <div className="flex-container">
    <Flex>
      <Flex.Item> <PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
     
  </div>
);
export default HomeBuju;
 
 
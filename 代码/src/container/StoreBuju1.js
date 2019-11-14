import { Flex, WhiteSpace } from 'antd-mobile';
import React from 'react'
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <div style={{backgroundColor:'#fff',paddingBottom:'15%'}}>
            <img style={{width:'100%',height:'100%'}}src={require('../images/s2.jpg')}/> 
        </div>
        <div style={{color:'#686868'}}>顺顺公益欧式风格</div>
    </div>
  );

const StoreBuju1 = () => (
  <div className="flex-container" style={{marginTop:"4%"}}>
    <Flex>
      <Flex.Item> <PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    
  </div>
);
export default StoreBuju1;
 
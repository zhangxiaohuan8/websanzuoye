import { Flex, WhiteSpace } from 'antd-mobile';
import React from 'react'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <div style={{width:'50px',height:'50px',backgroundColor:'red',borderRadius:'50%',padding:'15px'}}>
      <i className='iconfont icon-zhuangxiushangjia-'  ></i>
    </div>
    <div style={{color:'#000',marginLeft:'20px'}}>桌</div>
   </div>
);

const StoreBuju = () => (
  <div className="flex-container" style={{backgroundColor:'#fff',paddingLeft:'4%'}}>
    <Flex>
      <Flex.Item> <PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item> <PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
  </div>
);
export default StoreBuju;
 
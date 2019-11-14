import { Flex, WhiteSpace } from 'antd-mobile';
import React from 'react'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    <div style={{backgroundColor:'#fff',paddingBottom:'15%'}}>
      <img style={{width:'100%',height:'100%'}}src={require('../images/l1.jpg')}/>
      <div style={{position: 'absolute',left: '0%',top: '80%',color:'#000'}}>
      <img style={{width:'20%',height:'20%',borderRadius:'50%'}}src={require('../images/l1.jpg')}/>
    </div>
    <div style={{position: 'absolute',left: '30%',top: '87%',color:'#000'}}>橙色律动</div>
    <i style={{position: 'absolute',left: '85%',top: '87%',color:'#000',color:'red'}}className='iconfont icon-xin'></i>
    </div>
  </div>
);

const LinGanBuju = () => (
  <div className="flex-container">
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
  </div>
);
export default LinGanBuju;
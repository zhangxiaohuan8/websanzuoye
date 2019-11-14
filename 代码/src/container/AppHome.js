import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react'
import { Tabs} from 'antd-mobile';
import Lunbo from'./Lunbo';
import HomeBuju from'./HomeBuju';
const tabs = [
    { title: '推荐'},
    { title: '家居' },
    { title: '餐厨' },
    { title: '床上用品' },
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:"#3fcccb",color:'black'}}
                >
                    住吧家居
                </NavBar>
                <div style={{width:'100%'}}><Lunbo/></div>
                <div><HomeBuju/></div>
                <div style={{backgroundColor:'#fff',width:'100%',color:'#000',padding:'10px'}}>热门推荐</div>
                <div style={{position:'relative'}}><img style={{width:'100%',height:'100%'}}src={require('../images/4.jpg')}/><div style={{position: 'absolute',left:'5%',top:'90%',color:'#fff'}}>什么是英伦装修风格 什么是英伦装修风格 什么是英伦装修</div></div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Lunbo1 from'./Lunbo1';
import StoreBuju from'./StoreBuju';
import StoreBuju1 from './StoreBuju1';
export default class Store extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:"#3fcccb",color:'black'}}
                >
                    商城
                </NavBar>
                <div style={{width:'100%',height:'20%',position:'relative' }}>
                    <Lunbo1/>
                    <div style={{width:'100%',padding:'1%',color:'#fff',backgroundColor:'#000',position:'absolute',left:'0%',top:'0%',opacity:0.5 }}>
                        <i style={{float:'left',padding:'2%'}}className='iconfont icon-goutongye_santiaogang_tiaozhuanxuanzehaizi'></i>
                        <div style={{color:'#000'}}>
                        <input placeholder="输入关键字搜索" style={{width:"90%",padding:'2%'}}/>
                        </div>
                    </div> 
                </div>
                <div><StoreBuju/></div>
                <div><StoreBuju1/></div>
            </div>
        )
    }
}

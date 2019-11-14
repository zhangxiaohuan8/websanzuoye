 import React, { Component } from 'react'
 import { NavBar, Icon } from 'antd-mobile';
import { Tabs} from 'antd-mobile';
import LinGanBuju from './LinGanBuju';
const tabs = [
    { title: '推荐'},
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
  ];
 export default class Lingan extends Component {
     render() {
         return (
             <div>
                   <NavBar
                    style={{backgroundColor:"#3fcccb",color:'black'}}
                >
                    灵感
                </NavBar>
                 <Tabs tabs={tabs}
                      initialPage={0}
                >
                        
                    <div>
                        <LinGanBuju/>
                    </div>
                    <div >
                        Content of second tab
                    </div>
                    <div >
                        Content of third tab
                    </div>
                    <div >
                        Content of third tab
                    </div>
                </Tabs>
             </div>
         )
     }
 }
 
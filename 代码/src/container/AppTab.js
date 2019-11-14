import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from'./AppHome';
import LinGan from'./Lingan';
import Store from'./Store';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  
  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="yellow"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className='iconfont icon-home'></i>}
            selectedIcon= {<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-home'></i>}
   
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            title="灵感"
            key="Koubei"
            icon= {<i className='iconfont icon-linggan'></i>}
            selectedIcon={<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-linggan'></i>}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              console.log(1)
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
           <LinGan/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-shangcheng'></i>}
            selectedIcon={<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-shangcheng'></i>}
            title="商城"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              console.log(2)
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          <Store/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-wode'></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
           我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from '../../assets/logo.svg';
import styles from './Layout.less';
import Carousel from '../Carousel/Carousel';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default class BasedLayout extends React.Component {
  state = {
    activeTab:'nav 0',
  }
  handleSelect = (item,key,selectedKeys) => {
    console.log('item',item);
    this.setState({
      activeTab:item.item.props.children,
      content: item.key
    })
  }
  handleClick= (item,key,keyPath) => {
    // console.log('item',item);
  }
  render() {
    return (
      <Layout>
        <Header>
          <div className={styles.logo}>
            <img src={Logo} />
            <span>xxx平台</span>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{lineHeight: '64px',height: 64}}
            onSelect={this.handleSelect}
            onClick={this.handleClick}
          >
            <Menu.Item key='0' content={Carousel}>轮播图</Menu.Item>
            <SubMenu key='1' title='头像'>
              <Menu.Item key='1.1'>用户头像</Menu.Item>
              <Menu.Item key='1.2'>上传头像</Menu.Item>
            </SubMenu>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{ margin: '16px 0'}} >
            <Breadcrumb.Item onClick={()=> this.setState({activeTab:'nav 0'})}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.activeTab}</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.content}><Carousel /></div>
        </Content>
        <Footer style={{textAlign:'center'}}>Ant Design ©2017 Created by Annie Shen</Footer>
      </Layout>
    )
  }
}

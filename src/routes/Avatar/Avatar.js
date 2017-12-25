import React from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Avatar, Badge } from 'antd';
import styles from './Avatar.less';
import CustomerForm from '../../components/CustomerForm'

export default class Touxiang extends React.Component {
  render() {
    return (
      <PageHeaderLayout title="用户头像">
        <div>
          <Avatar icon="user" />
          <Avatar>U</Avatar>
          <Avatar style={{backgroundColor: '#f56a00'}}>Annie</Avatar>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
        <div>
          <Avatar icon="user" size='large'/>
          <Avatar icon="user" />
          <Avatar icon="user" size='small'/>
          <Avatar icon="user" shape="square" size='large'/>
          <Avatar icon="user" shape="square" />
          <Avatar icon="user" shape="square" size='small'/>
        </div>
        <div className={styles.threeDiv}>
          <Badge count={2}><Avatar shape="square" icon='user' /></Badge>
          <Badge dot><Avatar shape="square" icon='user' /></Badge>
        </div>
        <CustomerForm />
        <div className={styles.testDiv}>
          wenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字iwenziwenzi文字文字i
        </div>
      </PageHeaderLayout>
    )
  }
}

import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd'
import styles from './Notice.less';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

@connect(state => ({
  notice: state.notice,
}))
export default class Notice extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'notice/fetch'
    })
  }
  render() {
    const { notice: { notices }, dispatch } = this.props;
    console.log('=========',this.props);
    const columns = [
      {
        title: '序号',
        dataIndex: 'num',
        render: (val,record,index) => index+1
      },
      {
        title: '公告标题',
        dataIndex: 'title',
      },
      {
        title: '发布时间',
        dataIndex: 'datetime',
        sorter: true
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        render(val) {
          return <img style={{width:'24px',height:'24px'}} src={val}/>
        },
      },
      {
        title: '操作',
        render: (val) => (
          <p>
            <a href="javascript:void(0)" >编辑</a>
            <span className={styles.splitLine} />
            <a href="javascript:void(0)" >查看</a>
          </p>
        ),
      },
    ];
    return (
      <PageHeaderLayout title="通知公告">
        <div className={styles.normal}>
          <Table
            rowKey={record => record.id}
            dataSource={notices}
            columns={columns}
          />
        </div>
      </PageHeaderLayout>
    );
  }
}

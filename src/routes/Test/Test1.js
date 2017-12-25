import React from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Test.less';

const pStatus = ['未制作', '未审核', '审核中', '审核失败', '审核成功', '重新审核', '发布成功'];

class Test extends React.Component {
  constructor(){
    super();
    this.state={
      tab:1,
      showQcode: false
    }
  }
  componentDidMount(){
    this.setState({
      tab:2
    })
  }
  handleMouseEnter = () => {
    console.log('enter');
    this.setState({
      showQcode: true
    })
  }
  handleMouseLeave = () => {
    console.log('leave');
    this.setState({
      showQcode: false
    })
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    const { headImg, id, isAuth, verifyType, nickName, categotyList, qcode, status } = this.props.currentApp;

    return (
      <PageHeaderLayout title="测试">
        <div className={styles.normal}>
          <div className={styles.leftDiv} style={{position:'relative'}}>
            <div className={styles.leftItem} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <img src={headImg} className={styles.headImg}/>
              <span className={styles.nickName}>{nickName}</span>
            </div>
            <img src='http://imgcdnali.wfenxiao.com.cn/xcx/experience/7/5db4055beced4a0abb054e2061494dd8.jpg' style={{width:58,height:58,position:'absolute',display:this.state.showQcode?'inline-block':'none'}} />
            <div className={styles.leftItem}>
              认证状态：
              {verifyType==='1'?
                <span className={styles.radioImg} style={{color:'#44932C'}}><img src='/radio_checked.png' />已认证</span>:
                <span className={styles.radioImg} style={{color:'red'}}><img src='/radio_default.png' />未认证</span>
              }
            </div>
            <div className={styles.leftItem}>
              服务类目：{
                categotyList.map((item) => {
                  return <p
                })
              }
            </div>
            <div className={styles.leftItem}>
              小程序状态：{pStatus[status-1]}
            </div>
            <div className={styles.leftItem}>
              授权状态：{isAuth?<span>已授权<span className={styles.unbindBtn}>解绑</span></span>:'未授权'}
            </div>
          </div>
          <div className={styles.rightDiv}>
            <img src={qcode} />
          </div>
        </div>
      </PageHeaderLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentApp: {
      headImg: 'http://wx.qlogo.cn/mmopen/zWia1IiaSRnFEGP4k34phaIW7LwmBNxmZwumuBP6C7xUbgvfLJ7C6hU9aLl1rnjQsPOBzds402ibTOIqgXFQCA6TyQRT7tPJE1Z/0',
      id: 7,
      verifyType:'1',
      isAuth: true,
      nickName: '获客宝reg2',
      note: '生活服务-家政',
      qcode: 'http://imgcdnali.wfenxiao.com.cn/xcx/experience/7/a013455df63f42fea504993ad676b0d9.jpg',
      status: 4,
      categotyList: [
        {
            "categoryName": "餐饮-点评与推荐",
            "ids":"1-2-3"
        },
        {
            "categoryName": "快递业与邮政-快递、物流-寄件/收件",
            "ids":"1-2-3"
        },
        {
            "categoryName": "商业服务-会展服务",
            "ids":"1-2-3"
        }
      ]
    }
  };
}

export default connect(mapStateToProps)(Test);

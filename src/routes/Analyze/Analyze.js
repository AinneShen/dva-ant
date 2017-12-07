import React from 'react';
import { connect } from 'dva';
import styles from './Analyze.less';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import domtoimage from 'dom-to-image';
import { Card, Spin, Avatar, Icon } from 'antd';
const { Meta } = Card;

@connect((state) => ({
  analyze: state.analyze
}))
export default class Analyze extends React.Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'analyze/fetch'
    })
  }
  render() {
    const { analyze } = this.props;
    console.log('props',this.props);
    return (
      <div className={styles.normal}>
        <PageHeaderLayout title="数据分析">
            {
              analyze.cards.map((item)=>{
                  return (
                    <Card
                      loading={analyze.loading}
                      key={item.id}
                      hoverable
                      title={item.title}
                      extra={<a>more</a>} style={{ width: 300 }}
                    >
                      {item.content}
                    </Card>
                  )
              })
            }
            <Card
              loading={analyze.loading}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="<p>www.instagram.com</p><p>www.instagram.com</p>"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 300 }}
              bodyStyle={{padding:'5px 10px',height:'120px'}}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            >
              <div className={styles.courseTitle}>
                <a target="_blank" href="http://www.baidu.com">精准表达的套路与技法：8步让你说话直抵人心！</a>
              </div>
              <div className={styles.ratio}>
                <div className={styles.ratioLeft}>
                  <p>佣金金额：<span className={styles.redText}>￥41.40</span></p>
                  <p>课程单价：<span>￥69.00</span></p>
                </div>
                <div className={styles.ratioRight}>
                  <p>佣金比例：<span style={{fontSize:'20px'}} className={styles.redText}>60%</span></p>
                </div>
              </div>
            </Card>
        </PageHeaderLayout>
      </div>
    );
  }
}

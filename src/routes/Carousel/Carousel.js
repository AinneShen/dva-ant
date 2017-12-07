import React from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Avatar, Badge, Carousel, Button, Icon } from 'antd';
import styles from './Carousel.less';
import Slider from 'react-slick';

@connect((state)=>(
  {
    carousel: state.carousel
  }
))
export default class Zoumadeng extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'carousel/fetch',
    })
  }
  render() {
    const { carousel:{ banners } } = this.props;
    var settings = {
      dots: true,
      autoplay: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <PageHeaderLayout title="走马灯">
        <Carousel
          {...settings}
        >
          {banners.map((item,index)=>{
            return (
              <div key={index}>
                <a target="_blank" href={item.url}><img src={item.img}/></a>
              </div>
            )
          })}
        </Carousel>
        <div className={styles.sliderWrap}>

          <Slider {...settings}>
            {banners.map((item,index)=>{
              return (
                <div key={index} className={styles.slideItem}>
                  <a target="_blank" href={item.url} className={styles.item}>
                    <img src={item.img} className={styles.itemImg}/>
                  </a>
                </div>
              )
            })}
          </Slider>
        </div>
      </PageHeaderLayout>
    )
  }
}

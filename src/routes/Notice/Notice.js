import React from 'react';
import { connect } from 'dva';
import styles from './Notice.css';

@connect(state => ({
  notice: state.notice,
}))
export default class Notice extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        Route Component: Notice/Notice
      </div>
    );
  }
}

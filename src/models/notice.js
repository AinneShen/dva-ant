import { Get, Post } from '../services/api'
import { routerRedux } from 'dva/router'
export default {
  namespace: 'notice',
  state: {
    notices:[],
    loading: false,
    editModalVisible: false
  },
  effects: {
    *watchAndRefreshList({ dispatch }, { put, call, take }){
      let listAction = {};
      while(true){
        const action = yield take(['notice/fetch', 'notice/hideModal']);
        console.log('action', action);
        if(action.type == 'notice/fetch'){
          action.type = 'fetch';
          listAction = action;
        }
        if(action.type == 'notice/hideModal'){
          action.type = 'hideModal';
          dispatch(listAction);
        }
      }
    },
    *fetch({ payload }, { call, put }) {
      const response = yield call(Get, '/api/notices');
      yield put({
        type: 'changeLoading',
        payload: true
      })
      console.log('response-------------',response);
      yield put({
        type: 'save',
        payload: response
      })
      yield put({
        type: 'changeLoading',
        payload: false
      })
    },
    *gologin({ payload }, { call, put }) {
      yield put(routerRedux.push('/user/login'))
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        notices: action.payload
      }
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload
      }
    },
    showModal(state, action){
      return {
        ...state,
        editModalVisible: true
      }
    },

    hideModal(state, action){
      return {
        ...state,
        editModalVisible: false,
      }
    },
  },
  subscriptions: {
    //监听地址，如果地址含有app则跳转到登陆页
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname.includes('app')) {
          dispatch({
            type: 'gologin'
          })
        }
      });
    },
    watchAndRefreshList({ dispatch, history }){
      dispatch({
        type: 'watchAndRefreshList',
        dispatch
      });
    }
  },
};

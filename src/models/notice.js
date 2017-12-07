import { Get, Post } from '../services/api'
export default {
  namespace: 'notice',
  state: {
    notices:[],
    loading: false,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true
      })
      const response = yield call(Get, '/api/notices');
      console.log('response-------------',response);
      yield put({
        type: 'save',
        payload: response
      })
      yield put({
        type: 'changeLoading',
        payload: false
      })
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
    }
  },
  subscriptions: {},
};

import { Get, Post } from '../services/api'
export default {
  namespace: 'notice',
  state: {
    notices:[]
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(Get, '/api/notices');
      console.log('response-------------',response);
      yield put({
        type: 'save',
        payload: response
      })
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        notices: action.payload
      }
    }
  },
  subscriptions: {},
};

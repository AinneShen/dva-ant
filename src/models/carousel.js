import { Get, Post } from '../services/api';
export default {
  namespace: 'carousel',
  state: {
    banners:[],
  },
  effects: {
    *fetch({ payload },{call,put }) {
      const response = yield call(Get, '/api/banners');
      console.log(response);
      yield put({
        type: 'saveCards',
        payload: response
      })
    }
  },
  reducers: {
    saveCards(state,action){
      return {
        ...state,
        banners: action.payload
      }
    },

  },
  subscriptions: {},
};

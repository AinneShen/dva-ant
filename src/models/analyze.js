import { Get, Post } from '../services/api';
export default {
  namespace: 'analyze',
  state: {
    cards:[],
    loading: false
  },
  effects: {
    *fetch({ payload },{call,put }) {
      yield put({
        type:'changeLoading',
        payload: true
      })
      const response = yield call(Get,'/api/cards');
      yield put({
        type:'saveCards',
        payload: response
      })
      yield put({
        type:'changeLoading',
        payload: false
      })
    }
  },
  reducers: {
    saveCards(state,action){
      return {
        ...state,
        cards: action.payload
      }
    },
    changeLoading(state,action){
      return{
        ...state,
        loading:action.payload
      }
    }
  },
  subscriptions: {},
};

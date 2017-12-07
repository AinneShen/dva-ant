import { Get, Post } from '../services/api';
export default {
  namespace: 'avatar',
  state: {
  },
  effects: {
    *fetch({ payload },{call,put }) {

    }
  },
  reducers: {
    saveCards(state,action){
      return {
        ...state,
        cards: action.payload
      }
    },

  },
  subscriptions: {},
};

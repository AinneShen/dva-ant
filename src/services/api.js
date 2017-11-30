import { stringify } from 'qs';
import request from '../utils/request';
import genSign from './sign';
import 'isomorphic-fetch';
import FormData from 'form-data';
import Cookies from 'universal-cookie';

let cookies = new Cookies();

const preParam = () => ({
  ...GetParamsForFetch(),
  app: 'distribution_system_admin',
  sv: 1.0,
});

export function GetParamsForFetch(){
  let obj = {};
  let uid = cookies.get('uid');
  if(uid){
    obj.uid = uid;
  }
  let token = cookies.get('token');
  if(token){
    obj.token = token;
  }
  return obj;
}

export async function Get(path: string, data: Object){
  console.log(`API in get: ${path}`);
  const query_obj = { ...data, ...preParam() };
  const sign = genSign(query_obj);
  const obj = { ...query_obj, sign: sign };
  const query = Object.keys(obj).map(function(key) {
    return key + '=' + obj[key];
  }).join('&');
  const url = `${path}?${query}`;
  console.log('url in get api:', url);
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
  }).then(res => res.json());
}

export async function Post(path: string, data: Object){
  console.log(`API in post: ${path}`);
  const query_obj = { ...data, ...preParam() };
  const sign = genSign(query_obj);
  const obj = { ...query_obj, sign: sign };
  console.log('query in post api:', obj);
  let formData = new FormData();
  const form = Object.keys(obj).map(function(key) {
    formData.append(key,obj[key]);
  })

  const url = `${path}`;
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      //'Accept': 'application/json, application/xml, text/play, text/html, *.*',
      //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    credentials: 'include',
    body: formData
  }).then(res => res.json());
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeMobileLogin(params) {
  return request('/api/login/mobile', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

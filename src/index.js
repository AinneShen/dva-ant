import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './g2';
import './rollbar';
import models from './models';
import browserHistory from 'history/createBrowserHistory';
import './index.less';
import router from './router';

// 1. Initialize
const app = dva({
  history: browserHistory()
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
models.forEach((m) => {
  app.model(m);
});

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

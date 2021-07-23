import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import 'antd-mobile/dist/antd-mobile.css';
import './assets/fonts/iconfont.css'

// 导入 react-virtualized的css文件，该文件只需导入一次
// import 'react-virtualized/styles.css';
// 配置路由
import { HashRouter } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import router from './router/index';


ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>
    {/* <App /> */}
    {renderRoutes(router)}
  </HashRouter>

  //</React.StrictMode>
  ,
  document.getElementById('root')
);


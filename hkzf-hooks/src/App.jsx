
import { renderRoutes } from 'react-router-config';

import { TabBar } from 'antd-mobile';
import { useState } from 'react';

function App(props) {
  // tarBar数据
  const [tarbar, setTarbar] = useState([{
    title: "首页",
    icon: 'icon-ind',
    path: "/home"
  },
  {
    title: "找房",
    icon: 'icon-findHouse',
    path: "/findhouse"
  },
  {
    title: "资讯",
    icon: 'icon-infom',
    path: "/news"
  },
  {
    title: "我的",
    icon: 'icon-my',
    path: "/profile"
  }])
  // 控制tarBar是否隐藏
  const [hidden, setHidden] = useState(false)



  return (


    <div className="App">
      {renderRoutes(props.route.children)}
      <div className='tabBar'>
        <TabBar
          className='tabBar'
          // 控制TabBar是否隐藏
          hidden={hidden}
          // 字体颜色
          tintColor="#21b97a"
        >
          {
            tarbar.map((item) => {
              return (
                <TabBar.Item
                  key={item.path}
                  // 图下的标题
                  title={item.title}
                  // 图标
                  icon={<i className={`iconfont ${item.icon}`}></i>}
                  // 选中后的图标
                  selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                  // 点击触发函数
                  onPress={() => { props.history.push(item.path); }}
                />
              )
            })
          }
        </TabBar>
      </div>

    </div>


  );
}

export default App;

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FindHouse from '../pages/FindHouse';
import News from '../pages/News';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

import {
    Redirect
} from 'react-router-dom';
import App from '../App';

const router = [

    {
        path: '/',
        component: App,
        children: [

            {
                path: '/',
                exact: true,
                render: ()=> (<Redirect to={"/home"} />)
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/findhouse',
                component: FindHouse
            },
            {
                path: '/news',
                component: News
            },
        ]
    },
];

export default router;
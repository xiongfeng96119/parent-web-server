import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import Brand from './views/product/Brand'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //没有子菜单
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/mainPage', component: echarts, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '商品管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/Brand', component: Brand, name: '品牌管理'},
            { path: '/type', component: Table, name: '类型管理' },
            { path: '/attribute', component: Form, name: '属性管理' },
            { path: '/product', component: user, name: '产品管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/Brand', component: Brand, name: '品牌管理'},
            { path: '/type', component: Table, name: '类型管理' },
            { path: '/attribute', component: Form, name: '属性管理' },
            { path: '/product', component: user, name: '产品管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '营销管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/Brand', component: Brand, name: '品牌管理'},
            { path: '/type', component: Table, name: '类型管理' },
            { path: '/attribute', component: Form, name: '属性管理' },
            { path: '/product', component: user, name: '产品管理' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
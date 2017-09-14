import axios from 'axios'

const host = "http://www.easy-mock.com/mock/59b9d9a4e0dc663341a9161f/forReact/";

/*
    * 统一接口管理
*/
let api = {
    banner: 'banner',
    login : 'login',
    indexCount:'indexCount',
    iconList:'iconList',
    indexList:'indexList'
}

/*
    * 统一数据请求
    * {key, data,method, callback}
*/
export const getData = function (options) {
    const key = options.key;
    const data = options.data || {};
    const method = options.method || 'get';
    const callback = options.callback || function(){};
    axios[method](host + api[key], data)
        .then(function(res){
            callback&&callback(res.data)
        })
}

export default getData
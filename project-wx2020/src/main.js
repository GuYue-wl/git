import Vue from 'vue'
import App from './App'
import'../static/colorui/main.css'
import'../static/colorui/icon.css'
import'../static/iconfont/iconfont.css'
var Fly=require("flyio/dist/npm/wx")
var fly=new Fly
Vue.config.productionTip = false
fly.config.baseURL='http://39.97.168.208:8080'
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
  
    //   request.headers["rd_session"] =sessionStorage.getItem('code');
    // console.log(request);
    if(mpvue.getStorageSync('code')){
           request.headers["rd_session"] =mpvue.getStorageSync('code');
           console.log(request);
           
    }
     return request;
    
       })


//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)






Vue.prototype.$flyio = fly
App.mpType = 'app'

const app = new Vue(App)
app.$mount()



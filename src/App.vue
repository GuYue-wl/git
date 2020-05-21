<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.login({
      success:(res)=>{
        const code=res.code
        console.log(code);
        
        this.$flyio.get(`/login/${code}`
          
        ).then(res=>{
          console.log(res);
          // sessionStorage.setItem('code',res.body.code)
           mpvue.setStorageSync('code',res.data.rd_session);
           console.log(mpvue.getStorageSync('code'));
           
        })
      }
    })
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  },

  //引用导航栏

 



}
</script>

<style>
@import "../static/iconfont/iconfont.css";
@import "../static/colorui/main.css";
@import "../static/colorui/icon.css";


</style>

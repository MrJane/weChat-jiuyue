import config from '../config.js';
class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: config.baseUrl + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      method: params.method,
      success: (res) => {
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.success && params.success(res.data);
        } else {
          params.error && params.error(res);
        }
        //es6语法判断字符串开头
        // if(code.startsWith('2')){

        // }else{

        // }

      },
      fail: (res) => {
        params.fail && params.fail(err)
      },

    })
  }
}
export default HTTP;
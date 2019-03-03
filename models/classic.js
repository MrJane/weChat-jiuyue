import HTTP from '../utils/HTTP.js'
class ClassicModel extends HTTP {
  getLatest(callback) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        callback(res)
      }
    });
  }
  getPrevious(index, callback) {
    this.request({
      url: '/classic/' + index + '/previous',
      success: (res) => {
        
        callback(res)
      }
    });
  }
  isFirst(index){
    return index===1?true:false
  }
  isLatest(){
    
  }

}
export default ClassicModel;
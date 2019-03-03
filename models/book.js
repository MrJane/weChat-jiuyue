import HTTP from '../utils/HTTP.js'
class BookModel extends HTTP {
    getHotList(callback) {
    this.request({
      url: '/book/hot_list', 
      success: (res) => {
        callback(res)
      }
    });
  }
  getDetail(bid, callback) {
    this.request({
      url: '/book/' + bid + '/detail',
      success: (res) => {
        
        callback(res)
      }
    });
  }
  getLikeStatus(index){
    return index===1?true:false
  }
  getMyBookCount(){
    
  }
  getComment(bid,callback){
    this.request({
      url: '/book/' + bid + '/short_comment',
      method:'GET',
      success: (res) => {
        
        callback(res)
      }
    });
  }

}
export default BookModel;
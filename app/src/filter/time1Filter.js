export default function(time) {
    var day = new Date().toLocaleDateString()
    var day1 = Date.parse(day)
    var time1 = time.substr(0, 4)
    var time2 = time.substr(4, 2)
    var time3 = time.substr(6, 2)
    var time4 = time1 + '/' + time2 + '/' + time3
    var timea = Date.parse(time4)
    var date = new Date(timea);
    var w = date.getDay()
    var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    if (day1 == timea) {
        return '今日新闻'
    } else {
        return time2 + '月' + time3 + '日' + arr[w]
    }

    // var date = new Date(timea);
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    // var day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();

}
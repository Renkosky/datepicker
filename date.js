(function () {
  var datepicker = {}
  datepicker.getMonthData = function (year, month) {
    var ret = [];
    if (!year || !month) {
      var today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }
    //这个月的第一天
    var firstDay = new Date(year, month - 1, 1);
    var firstDateWeek = firstDay.getDay();
    if (firstDateWeek === 0) {firstDateWeek = 7;}
    //返回的年月
    month = firstDay.getMonth() + 1;
    year = firstDay.getFullYear();

    //上个月的最后一天
    var lastDayOfMonth = new Date(year, month - 1, 0);
    var lastDateofLastMonth = lastDayOfMonth.getDate();
    //要显示的上个月的天数
    var preMonthDayCount = firstDateWeek - 1;
    //当月的最后一天
    var lastDay = new Date(year, month, 0);
    var lastDate = lastDay.getDate();
    // 获取当月每一天
    for (var i = 0; i < 7*6; i++) {
      //当月显示的第一天
      var date = i - preMonthDayCount + 1;
      var showDate = date;
      var thisMonth = month;
      if (date <= 0) {
        thisMonth = month - 1;
        showDate = lastDateofLastMonth + date;
      }else if (date > lastDate) {
        //下个月
        thisMonth = month + 1;
        showDate = showDate -lastDate
      }
      if (thisMonth === 0) {
        thisMonth = 12;
      }
      if (thisMonth === 13) {
        thisMonth = 1;
      }
    
      ret.push({
        month: thisMonth,
        date: date,
        showDate: showDate
      });
    }
    return {
      year: year,
      month: month,
      days: ret
    };
  };
  window.datepicker = datepicker;
})();
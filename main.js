(function () {
  var datepicker = window.datepicker;
  var monthData;
  var $wrapper;
  datepicker.buildUi = function (year, month) {
	  monthData = datepicker.getMonthData(year, month);
		var html = '<div class="ui-datepicker-header">' +
			'<a href="#" class="ui-datepicker-btn datepicker-btn-prev">&lt;</a>' +
			'<a href="#" class="ui-datepicker-btn datepicker-btn-next">&gt;</a>' +
			'<span class="ui-datepicker-currmonth">' + monthData.year + '-' + monthData.month + '</span>'+
    '</div >'+
			'<div class="ui-datepicker-body">'+
				'<table>'+
					'<thead>'+
						'<tr>'+
							'<th>一</th>'+
							'<th>二</th>'+
							'<th>三</th>'+
							'<th>四</th>'+
							'<th>五</th>'+
							'<th>六</th>'+
							'<th>日</th>'+
						'</tr>'+
					'</thead>'+
					'<tbody>';

					for (let i = 0; i < monthData.days.length; i++) {
						const date = monthData.days[i];
						if (i%7 === 0) {
							html += '<tr>';
						}
						html += '<td>' + date.showDate +'</td>'
						if (i%7 === 6) {
							html += '</tr>'
						}
					};
					html += '</tbody>'+
				'</table>'+
			'</div>';

			return html;
		};
    datepicker.render = function (direction) {
      var year,month;
      if (monthData) {
        year = monthData.year;
        month = monthData.month;
      }

      if (direction === 'prev') {
        month--;
        if (month === 0) {
          month = 12;
          year--;
        }
      }
      if (direction === 'next') {
        month++;
      }

      var html = datepicker.buildUi(year, month);
      if (!$wrapper) {
        $wrapper = document.createElement('div');
        $wrapper.className = 'ui-datepicker-wrapper';
        document.body.appendChild($wrapper);
      }
      $wrapper.innerHTML = html;
    }
    datepicker.init = function ($input) {
        datepicker.render();
				$wrapper.addEventListener('click',function(e) {
					var target = e.target;
          // if (!target.classList.contains('ui-datepicker-btn')) 
					// 	break;
          
          if (target.classList.contains('datepicker-btn-prev')) {
            datepicker.render('prev');
          }
          else if (target.classList.contains('datepicker-btn-next')) {
            datepicker.render('next');
          }
				},false)
			};
})();
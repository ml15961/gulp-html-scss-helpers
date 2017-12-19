//= partials/parallax-js.js

//= partials/easypaginate.js
//= partials/watermark.js


$(document).ready(function() {
    //= partials/typefile.js
    
    
    $('.btn-navbar').click(function(){
		$('.btn-navbar').toggleClass('active'); // добавляет/удаляет класс
		$('.menu').slideToggle(600); //разворачивает/сворачивает меню
		return false;
	});
    
    $('.loader_wrap').click(function(){
		$(this).toggleClass('active'); //.slideToggle(600);
		return false;
	});
    
    
    //Ограничение количества символов в textarea и input (работает коряво - только на один инпут цепляется)
    //--------------------------------------------------------------------
    //limitField — поле, где будем считать симолы
    //limitCount — поле, где будем показывать оставшиеся
    //limitNum— сколько максимально символов можно ввести
    (function($) {
        $.fn.extend( {
            limiter: function(limit, elem) {
                $(this).on("keyup focus", function() {
                    setCount(this, elem);
                });
                function setCount(src, elem) {
                    var chars = src.value.length;
                    if (chars > limit) {
                        src.value = src.value.substr(0, limit);
                        chars = limit;
                    }
                    elem.html( limit - chars );
                }
                setCount($(this)[0], elem);
            }
        });
    })(jQuery);
    var elem = $("#chars1");
    $("#text1").limiter(21, elem);
    var elem = $("#chars2");
    $("#text2").limiter(100, elem);
    //====================================================================
    
    //Вывод года из системного времени
    //--------------------------------------------------------------------
    
    window.onload = initDate;
    function initDate() {
        var now = new Date();
        var thisYear = now.getFullYear();
        
        document.getElementById('nowDate').innerHTML = thisYear;
    };
    //====================================================================
    
    $('.product_description').click(function(){
		$('.toggle').toggleClass('open'); // .slideToggle(600)
		return false;
	});
    
    
    $('.js input[type=file]').customFile();
    
});


jQuery(function($){
    $('.globalWrapper').easyPaginate({
        step:1
    });
});




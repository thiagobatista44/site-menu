    $(document).ready(function(){
    
   $('.news-wrap .news-item').hide();
   
   $('.news-wrap').children('.news-item:lt(8)').show();

   $('.load-more').click(function() {
   	 $('.news-wrap').children('.news-item:hidden:lt(8)').show();
   });

  });
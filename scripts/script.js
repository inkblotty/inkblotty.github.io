$("a[href^='#']").click(function(t){t.preventDefault();var o=$(this).attr("href");$("html,body").animate({scrollTop:$(o).offset().top-100},"slow")}),$.ajax({async:!0,contentType:"application/json",crossDomain:!0,url:"http://lctva.joel.io/api/online/inkblotty/",method:"GET",success:function(){},complete:function(t,o){}}).done(function(t){});
$("#scroll-home").click(function(){$("html, body").animate({scrollTop:$("#home").offset().top-100},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")}),$("#scroll-about").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top-100},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")}),$("#scroll-works").click(function(){$("html, body").animate({scrollTop:$("#how_it_works").offset().top-100},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")}),$(".scroll-works").click(function(){$("html, body").animate({scrollTop:$("#how_it_works").offset().top-100},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")}),$("#scroll-services").click(function(){$("html, body").animate({scrollTop:$("#services").offset().top-70},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")}),$("#scroll-contact").click(function(){$("html, body").animate({scrollTop:$("#contact").offset().top},1e3),$(".active").removeClass("active"),$(this).parent().addClass("active")});var btn=$(".scroll-top");$(window).scroll(function(){$(window).scrollTop()>300?btn.addClass("show"):btn.removeClass("show"),$(window).scrollTop()<550&&($(".active").removeClass("active"),$("#scroll-home").parent().addClass("active")),$(window).scrollTop()<1050&&$(window).scrollTop()>550&&($(".active").removeClass("active"),$("#scroll-about").parent().addClass("active")),$(window).scrollTop()<1700&&$(window).scrollTop()>1050&&($(".active").removeClass("active"),$("#scroll-works").parent().addClass("active")),$(window).scrollTop()<3200&&$(window).scrollTop()>1900&&($(".active").removeClass("active"),$("#scroll-services").parent().addClass("active")),$(window).scrollTop()>=3200&&($(".active").removeClass("active"),$("#scroll-contact").parent().addClass("active"))}),btn.on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"300")});
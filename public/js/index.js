$(document).ready(function(){

  //login box should be on the top of the windows
  $(window).scroll(function () {
      var offSet = $(document).scrollTop();   //get the offset of the page
      var topHeight = 44;                     //set the height of the box
      if (offSet >= topHeight) {
          $("#head_logo1").css({position: "fixed", top: 0});
      } else {
          $("#head_logo1").css({position: "static"});
      }

  });
  $( "span#menu" ).hide();
  $(window).resize(function () {
    if ($(window).width() > 760 ){
       $( "span#menu" ).hide();
       $(".head_com").show();
    } else {
        $( "span#menu" ).show();
        $("#head_nav ul li").addClass("list_show");
        $(".head_com").hide();
        $("#head_nav ul li").show();
    }

  });

  $( "span#menu" ).click(function() {
     $( "#head_nav ul li" ).slideToggle( 300, function() {
                 // Animation complete.
      });
  });

  var index = window.location.href.split('/').length -1;
  var href = window.location.href.split('/')[index].substr(0,4);
  $("#head_nav li a[href^='"+href+"']").parent().addClass("on");
  console.log($("#head_nav li a[href^='"+href+"']").parent());

  //slide the picture one by one
  var slider_count = 0;   //Slide counter
  var clone_the_first = $("#slider .slider_img li").first().clone();
  $("#slider .slider_img").append(clone_the_first);
   $("#slider .slider_img li").first().addClass("slider_on");
  var size = $("#slider .slider_img li").size();
  //Click on the right, and slide to the right.
  $("#slider .slider_btn_right").click(function() {
    slider_right();
  })
  //Click on the left, and slide to the left.
  $("#slider .slider_btn_left").click(function() {
    slider_left();
  })
  $("#slider .slider_num li").click(function() {
    var slider_index = $(this).index();
    $(this).addClass("slider_on").siblings().removeClass();
    slider_count = slider_index;
    $("#slider .slider_img").stop().animate({left:-slider_count*1366},500);
  })
  //Did not click, then slide to the right automatically.
  setInterval(function(){
    slider_right();
  }, 6000);

  function slider_right() {
    slider_count++;
    if (slider_count == size) {
      $("#slider .slider_img").css({left:0});
      slider_count = 1;
    }
    $("#slider .slider_img").stop().animate({left:-slider_count*1366},500);
    if (slider_count == size - 1) {
      $("#slider .slider_num li").eq(0).addClass("slider_on").siblings().removeClass('slider_on');
    } else {
      $("#slider .slider_num li").eq(slider_count).addClass("slider_on").siblings().removeClass('slider_on');
    }
  }

  function slider_left() {
    slider_count--;
    if (slider_count == -1) {
          $("#slider .slider_img").css({left:-(size - 1)*1366});
      slider_count = size - 2;
    }
    $("#slider .slider_img").stop().animate({left:-slider_count*1366},500);
    $("#slider .slider_num li").eq(slider_count).addClass("slider_on").siblings().removeClass('slider_on');
  }

  //search
  $("#search").click(function() {
  });

   //---------------blog slider------------
   $('#sdt_menu > li').bind('mouseenter',function(){
      var $elem = $(this);
      $elem.find('img')
         .stop(true)
         .animate({
            'width':'120px',
            'height':'100px',
            'left':'0px'
            },400,'easeOutBack')
         .andSelf()
         .find('.sdt_wrap')
         .stop(true)
         .animate({'top':'100px'},500,'easeOutBack')
         .andSelf()
         .find('.sdt_active')
         .stop(true)
         .show()
         .animate({'height':'100px'},300,function(){
          });
    }).bind('mouseleave',function(){
      var $elem = $(this);
      $elem.find('.sdt_active')
         .stop(true)
         .show()
         .animate({'height':'0px'},300)
         .andSelf().find('img')
         .stop(true)
         .animate({
           'width':'0px',
           'height':'0px',
           'left':'50px'},400)
         .andSelf()
         .find('.sdt_wrap')
         .stop(true)
         .animate({'top':'0px'},500);
    });

//------------------project slider-------------------
//seamless Slide counter
    var slider_seamless_count = 0;
    var clone_the_first = $("#slider_seamless .slider_img li").first().clone();
    $("#slider_seamless .slider_img").append(clone_the_first);
    $("#slider_seamless .slider_img li").first().addClass("slider_on");
    var size_seamless = $("#slider_seamless .slider_img li").size();
    //Click on the right, and slide to the right.
    $("#slider_seamless .slider_btn_right").click(function() {
      slider_seamless_right();
    })
    //Click on the left, and slide to the left.
    $("#slider_seamless .slider_btn_left").click(function() {
      slider_seamless_left();
    })
    //---------------
    $("#slider_seamless .slider_num li").click(function() {
      var index = $(this).index();
      $(this).addClass("slider_on").siblings().removeClass();
          slider_seamless_count = index;
      $("#slider_seamless .slider_img").stop().animate({left:-slider_seamless_count*1000},500);
    })
        //Did not click, then slide to the right automatically.
    setInterval(function(){
      slider_seamless_right();
    }, 6000);

    function slider_seamless_right() {
    slider_seamless_count++;
      if (slider_seamless_count == size_seamless) {
        $("#slider_seamless .slider_img").css({left:0});
        slider_seamless_count = 1;
      }
      $("#slider_seamless .slider_img").stop().animate({left:-slider_seamless_count*1000},500);
      if (slider_seamless_count == size_seamless - 1) {
        $("#slider_seamless .slider_num li").eq(0).addClass("slider_on").siblings().removeClass('slider_on');
      } else {
        $("#slider_seamless .slider_num li").eq(slider_seamless_count).addClass("slider_on").siblings().removeClass('slider_on');
      }
    }

    function slider_seamless_left() {
    slider_seamless_count--;
      if (slider_seamless_count == -1) {
            $("#slider_seamless .slider_img").css({left:-(size_seamless - 1)*1000});
        slider_seamless_count = size_seamless - 2;
      }
      $("#slider_seamless .slider_img").stop().animate({left:-slider_seamless_count*1000},500);
      $("#slider_seamless .slider_num li").eq(slider_seamless_count).addClass("slider_on").siblings().removeClass('slider_on');
    }

/*-------------project example----------------*/

    $.each($("#project_example .block_example_box"), function() {
      $(this).click(function() {
        window.location = 'project_show.html';
      });
    });
/*----------------------------------blog_views-------------------------------*/
  var blog_txt_count = 14;
  var blog_nav_num = 2;
     $("#blog_new").click(function() {



     })



/*---------------------------upload blog to the view-----------------*/
var blog_num = 1;
var blog_top;
setTimeout(function() {
     blog_num = 0;
     //blog_top = blog_num * (-142) + 20;
     blog_top=-13920;
     $("#blog_change").css("top",blog_top+'px');
},5);
$.each($("#blog_nav a"), function() {
            $(this).click(function() {
                var blog_pages = Number($(this).html());
                blog_num = 10 * (blog_pages - 1);
                blog_top = blog_num * (-142) ;
                $("#blog_change").css("top",blog_top+'px');
            });
    });

$("#xxx").click(function() {

/*        var blog_before = blog_txt_count;
        blog_txt_count++;
        var new_blog_id = "blog_change_txt" + blog_txt_count;
        var new_blog_node = $('<div class = "block_p1" ><div class = "per_com per_detail"><a href="#"><h3>文章15</h3></a><p>小标题</p><p>作者：发表日期</p><p>内容内容内容内容---------------------------------------------------------------------------------------------</p></div></div>');
        new_blog_node.attr("id",new_blog_id);

        $("#blog_change").prepend(new_blog_node);
        alert($("#blog_change"));
        if (blog_txt_count%2 == 0) {
          var new_blog_nav = '<a></a>';
          blog_nav_num++;
          $("#blog_nav").append(new_blog_nav);
          $("#blog_nav a").eq(blog_nav_num - 1).html(blog_nav_num);

          $.each($("#blog_nav a"), function() {
            $(this).click(function() {
                alert($(this).html());
            });
          });
        }
        */


});




});



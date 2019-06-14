var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}


//////////////////////////////////////////
$('#blogCarousel').carousel({
  interval: 2000
});

//////////////////////////////////////////

$(window).on("load", function () {
  $(".loading-overlay .spinner").fadeOut(1000, function () {
    $(this).parent().fadeOut(3000, function () {
      $("body").css("overflow", "auto");
      $(this).remove();
    });
  });
});


//////////////////////////////////////////////////


//caching the scroll top element
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {
    scrollButton.show();
  }
  else {
    scrollButton.hide();
  }
});

scrollButton.click(function () // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
{
  $("html,body").animate({ scrollTop: 0 }, 600);
});


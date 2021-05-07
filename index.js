var newYear="1 Jan 2022";

$('#submit').click(function () { 
    
      newYear = $("#start").val();
      var html=$("#text").val();
      $("h1").html(html);
});




 // undefined


function countdown(){
    const newYearsDate=new Date(newYear);
const currentDate=new Date();
var timeLeft=(newYearsDate-currentDate)/1000;

var days=Math.floor(timeLeft/(3600*24));
var hours=Math.floor((timeLeft/3600)%24);
var mins=Math.floor((timeLeft/60)%60);
var secs=Math.floor(timeLeft%60);
console.log(days,hours,mins,secs);
$("#secs").html(formatTime(secs) );
$("#mins").html(formatTime(mins));
$("#days").html(formatTime(days));
$("#hours").html(formatTime(hours));
}
countdown();
setInterval(countdown,1000);
function formatTime(time){
    if (time<10) {
        return "0"+time;
    } else {
        return time;
    }
}

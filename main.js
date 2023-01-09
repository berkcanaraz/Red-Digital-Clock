function GetTime(){
    var now = new Date(); // Anlık saati alıyoruz.
    var hour= now.getHours();
    var minute=now.getMinutes();
    var second= now.getSeconds();


   (hour<10) ? document.getElementById("hour").innerHTML="0"+hour : 
               document.getElementById("hour").innerHTML=hour;

   (minute<10) ? document.getElementById("minute").innerHTML="0"+minute :
                 document.getElementById("minute").innerHTML=minute;
   (second<10) ? document.getElementById("second").innerHTML="0"+second :
                 document.getElementById("second").innerHTML=second;

}
setInterval(function(){GetTime();},1000);

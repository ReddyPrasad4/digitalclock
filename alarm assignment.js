function timeShow()
{
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var mo = date.getMonth();
    var dd = date.getDay();
    var dat  = date.getDate();
    var yy = date.getFullYear()
    var am_pm = "AM";
    var ss = date.getSeconds()
    if(hh>=12)
    {
        am_pm = "PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh= 12;
    }

    switch(mo)
    {
        case 0 : mo = "Jan" ;
        break;
        case 1 : mo = "Feb" ;
        break;
        case 2 : mo = "Mar" ;
        break;
        case 3 : mo = "Apr" ;
        break;
        case 4 : mo = "May" ;
        break;
        case 5 : mo = "Jun" ;
        break;
        case 6 : mo = "Jul" ;
        break;
        case 7 : mo = "Aug" ;
        break;
        case 8 : mo = "Sep" ;
        break;
        case 9 : mo = "Oct" ;
        break;
        case 10 : mo = "Nov" ;
        break;
        case 11 : mo = "Dec" ;
    }

    if(dd==0)
    {
        document.getElementById("day").innerHTML = "Sunday";
        document.body.style.backgroundImage = "url(nature7.jpg)"
    }
    else if(dd==1)
    {
        document.getElementById("day").innerHTML = "Monday";
        document.body.style.backgroundImage = "url(nature2.jpg)"

    }
    else if(dd==2)
    {
        document.getElementById("day").innerHTML = "Tuesday";
        document.body.style.backgroundImage = "url(nature3.jpg)"

    }
    else if(dd==3)
    {
        document.getElementById("day").innerHTML = "Wednesday";
        document.body.style.backgroundImage = "url(nature4.jpg)"

    }
    else if(dd==4)
    {
        document.getElementById("day").innerHTML = "Thursday";
        document.body.style.backgroundImage = "url(nature5.jpg)"

    }
    else if(dd==5)
    {
        document.getElementById("day").innerHTML = "Friday";
        document.body.style.backgroundImage = "url(nature6.jpg)"


    }
    else if(dd==6)
    {
        document.getElementById("day").innerHTML = "Saturday";
        document.body.style.backgroundImage = "url(nature1.jpg)"

    }
    document.getElementById("time").innerHTML = `${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML = `${dat}/${mo}/${yy}`  
    document.getElementById("sec").innerHTML = ss; 
    setTimeout(timeShow,1000)
}

var aud = new Audio();
aud.src = "abstract-style-121455.mp3";
function alarmSet()
{
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var am_pm = "AM"
    if(hrs>=12)
    {
        am_pm = "PM";
        if(hrs>12)
        {
            hrs-=12;
        }
    }
    if(hrs == 0)
    {
        hrs = 12;
    }
    var h = document.getElementById("hours").value;
    var m = document.getElementById("minutes").value;
    var a = document.getElementById("aft").value;
    if(h==hrs && m==mins && a==am_pm)
    {
        aud.play();
    }
    else
    {
        aud.pause();
    }
    var a = setTimeout(alarmSet,1000);
   // document.getElementById("alarmBlock").style.display = "none";
}
function hide()
{
    document.getElementById("alarmBlock").style.display = "none";
}
function show()
{
    document.getElementById("alarmBlock").style.display = "flex";
}

timeShow()

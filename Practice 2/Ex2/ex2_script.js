$(document).ready(function(){


   var likesCount = 1230342;
   var sharesCount = 3429;
   document.getElementById("likesCount").innerHTML = likesCount;
   document.getElementById("sharesCount").innerHTML = sharesCount;

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookies() {
  //$('.dialog-form').show();
    var email=getCookie("email");
    var emailv = document.getElementById( "emailv" ).value;
    var password=getCookie("password");
    var passwordv = document.getElementById( "passwordv" ).value;
    var user=getCookie("user");
    var flname=getCookie("flname");
    var bday=getCookie("bday");
    var photo=getCookie("photo");
    var lang=getCookie("lang");
    var addr=getCookie("addr");
    var pmethod=getCookie("pmethod");
    var ccnum=getCookie("ccnum");
    var vt1=getCookie("vt1");
    var vt2=getCookie("vt2");
    var cccode=getCookie("cccode");
    var bthname=getCookie("bthname");
    var btnum=getCookie("btnum");
    var btname=getCookie("btname");


    if (email==emailv && password==passwordv) {
        $(".dialog-form").hide();
    } else {
         window.location.href = "../EX1/EX1.html";
    }
}




$("#ok").click(function(){

      var emailv = document.getElementById( "emailv").value;
      var passwordv = document.getElementById( "passwordv" ).value;
      if(emailv=="" || emailv==null || passwordv=="" || passwordv==null){
        alert("Required field missing");
      }
      else{
        checkCookies();
        $(".dialog-form").hide();
      }

});


  $("#counterLike").click(function(){
      likesCount++;
      document.getElementById("likesCount").innerHTML = likesCount;
  });

  $("#counterShare").click(function(){
      sharesCount++;
      document.getElementById("sharesCount").innerHTML = sharesCount;
  });

  $("#FiringGroundsDesc").dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "blind",
        duration: 1000
    }
    
});

  $("#FiringGroundsOpener").click(function () {
      $("#FiringGroundsDesc").dialog("open");
   });

  $("#RunningDesc").dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "blind",
        duration: 1000
    }
    
});

  $("#RunningOpener").click(function () {
      $("#RunningDesc").dialog("open");
   });

  $("#DeshDesc").dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "blind",
        duration: 1000
    }
    
});

  $("#DeshOpener").click(function () {
      $("#DeshDesc").dialog("open");
   });
});

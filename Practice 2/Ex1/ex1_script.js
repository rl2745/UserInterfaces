$(document).ready(function(){

  $("#pmethod").change(function(){
      var value = $("#pmethod option:selected").val();
      var theDiv = $(".is" + value);

      theDiv.slideDown();
      theDiv.siblings('[class*=is]').slideUp(function() { $(this).addClass("hidden"); });
  });

  $("#c").click(function(){
    $('[class*=is]').slideUp(function() { $(this).addClass("hidden"); });
  });

  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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


    if (email != "" && email==emailv) {
        $("#email").val(email);
        $("#password").val(password);
        $("#user").val(user);
        $("#flname").val(flname);
        $("#bday").val(bday);
        $("#photo").val(photo);
        $("#lang").val(lang);
        $("#addr").val(addr);
        $("#pmethod").val(pmethod);
        $("#ccnum").val(ccnum);
        $("#vt1").val(vt1);
        $("#vt2").val(vt2);
        $("#cccode").val(cccode);
        $("#bthname").val(bthname);
        $("#btnum").val(btnum);
        $("#btname").val(btname);
    } else {
      $("#email").val(emailv);
      $("#password").val(passwordv);
    }
}



$("#sm").click(function(){

  var email = document.getElementById( "email" ).value;
  var password = document.getElementById( "password" ).value;
  var user = document.getElementById( "user" ).value;
  var flname = document.getElementById( "flname" ).value;
  var bday = document.getElementById( "bday" ).value;
  var photo = document.getElementById( "photo" ).value;
  var lang = document.getElementById( "lang" ).value;
  var addr = document.getElementById( "addr" ).value;
  var pmethod = document.getElementById( "pmethod" ).value;
  var ccnum = document.getElementById( "ccnum" ).value;
  var vt1 = document.getElementById( "vt1" ).value;
  var vt2 = document.getElementById( "vt2" ).value;
  var cccode = document.getElementById( "cccode" ).value;
  var bthname = document.getElementById( "bthname" ).value;
  var btnum = document.getElementById( "btnum" ).value;
  var btname = document.getElementById( "btname" ).value;

  var emailprev=getCookie("email");
  var passwordprev=getCookie("password");
  var userprev=getCookie("user");
  var flnameprev=getCookie("flname");
  var bdayprev=getCookie("bday");
  var photoprev=getCookie("photo");
  var langprev=getCookie("lang");
  var addrprev=getCookie("addr");
  var pmethodprev=getCookie("pmethod");
  var ccnumprev=getCookie("ccnum");
  var vt1prev=getCookie("vt1");
  var vt2prev=getCookie("vt2");
  var cccodeprev=getCookie("cccode");
  var bthnameprev=getCookie("bthname");
  var btnumprev=getCookie("btnum");
  var btnameprev=getCookie("btname");

  if (email != "" && email != null) {
      setCookie("email", email, 30);
  }

  if (password != "" && password != null) {
    if(password!=passwordprev && email==emailprev){
      alert("The password field is going to be modified. The previous value was "+passwordprev+". Are you sure you want to change it?");
    }
      setCookie("password", password, 30);
  }

  if (user != "" && user != null) {
    if(user!=userprev && email==emailprev){
      alert("The user field is going to be modified. The previous value was "+userprev+". Are you sure you want to change it?");
    }
      setCookie("user", user, 30);
  }

  if (flname != "" && flname != null) {
    if(flname!=flnameprev && email==emailprev){
      alert("The flname field is going to be modified. The previous value was "+flnameprev+". Are you sure you want to change it?");
    }
      setCookie("flname", flname, 30);
  }

  if (bday != "" && bday != null) {
    if(bday!=bdayprev && email==emailprev){
      alert("The bday field is going to be modified. The previous value was "+bdayprev+". Are you sure you want to change it?");
    }
      setCookie("bday", bday, 30);
  }

  if (photo != "" && photo != null) {
    if(photo!=photoprev && email==emailprev){
      alert("The photo field is going to be modified. The previous value was "+photoprev+". Are you sure you want to change it?");
    }
      setCookie("photo", photo, 30);
  }

  if (lang != "" && lang != null) {
    if(lang!=langprev && email==emailprev){
      alert("The lang field is going to be modified. The previous value was "+langprev+". Are you sure you want to change it?");
    }
      setCookie("lang", lang, 30);
  }

  if (addr != "" && addr != null) {
    if(addr!=addrprev && email==emailprev){
      alert("The addr field is going to be modified. The previous value was "+addrprev+". Are you sure you want to change it?");
    }
      setCookie("addr", addr, 30);
  }

  if (pmethod != "" && pmethod != null) {
    if(pmethod!=pmethodprev && email==emailprev){
      alert("The pmethod field is going to be modified. The previous value was "+pmethodprev+". Are you sure you want to change it?");
    }
      setCookie("pmethod", pmethod, 30);
  }

  if (ccnum != "" && ccnum != null) {
    if(ccnum!=ccnumprev && email==emailprev){
      alert("The ccnum field is going to be modified. The previous value was "+ccnumprev+". Are you sure you want to change it?");
    }
      setCookie("ccnum", ccnum, 30);
  }

  if (vt1 != "" && vt1 != null) {
    if(vt1!=vt1prev && email==emailprev){
      alert("The vt1 field is going to be modified. The previous value was "+vt1prev+". Are you sure you want to change it?");
    }
      setCookie("vt1", vt1, 30);
  }

  if (vt2 != "" && vt2 != null) {
    if(vt2!=vt2prev && email==emailprev){
      alert("The vt2 field is going to be modified. The previous value was "+vt2prev+". Are you sure you want to change it?");
    }
      setCookie("vt2", vt2, 30);
  }

  if (cccode != "" && cccode != null) {
    if(cccode!=cccodeprev && email==emailprev){
      alert("The cccode field is going to be modified. The previous value was "+cccodeprev+". Are you sure you want to change it?");
    }
      setCookie("cccode", cccode, 30);
  }

  if (bthname != "" && bthname != null) {
    if(bthname!=bthnameprev && email==emailprev){
      alert("The bthname field is going to be modified. The previous value was "+bthnameprev+". Are you sure you want to change it?");
    }
      setCookie("bthname", bthname, 30);
  }

  if (btnum != "" && btnum != null) {
    if(btnum!=btnumprev && email==emailprev){
      alert("The btnum field is going to be modified. The previous value was "+btnumprev+". Are you sure you want to change it?");
    }
      setCookie("btnum", btnum, 30);
  }

  if (btname != "" && btname != null) {
    if(btname!=btnameprev && email==emailprev){
      alert("The btname field is going to be modified. The previous value was "+btnameprev+". Are you sure you want to change it?");
    }
      setCookie("btname", btname, 30);
  }

});



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

});

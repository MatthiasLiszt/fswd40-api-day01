
var Key;

//lat=-34.397,lng=150.644,zoom=8

function generateKey(){
 var oneTime="i6ltOuAmgYSF8BXqJsySmURIRm7GicCGE5aHyJ6";
 var x=$("#username").val()+$("#password").val();
 var key;
 console.log("generate key");
 key=decrypt(x,oneTime);
 if(key.indexOf("LvP0")>0)
  {$("#logintemp").hide();
   $("#gps").show();
   $("#map").show();
   Key=key;
  }
 else
  {alert("login failed");}
} 

function showMap(key)
 {var mapUrl="https://maps.googleapis.com/maps/api/js";
  var callback='initMap';
  var apiCall=`${mapUrl}?key=${key}&callback=${callback}`;
  alert(apiCall+" "+Lat+" "+Lng);
  $.getScript(apiCall);
 }

function decrypt(x,y){
 var base64="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-";
 var safeTable=base64.split(''); 
 var xS=x.split('');
 var yS=y.split(''); 
 var decode=[];

 for(var i=0;i<x.length;++i)
  {var xx=base64.indexOf(xS[i]);
   var yy=base64.indexOf(yS[i]);
   //console.log(xx+" "+yy+" "+(xx^yy));
   decode.push(safeTable[xx^yy]);   
  }

 return decode.join('');
}

function setLatitude(){
 Lat=Number($('#latitude').val());
 showMap(Key);
}

function setLongitude(){
 Lng=Number($('#longitude').val());
 showMap(Key);
}


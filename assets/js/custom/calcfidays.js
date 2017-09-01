function logbase(val, base) {
  var x=Math.log(val) / Math.log(base);
  return x
}

function calcdays() {

var balance=document.forms.namedItem("daysform").balance.value*1;
var invrate=document.forms.namedItem("daysform").invrate.value*1/100;
var exprate=document.forms.namedItem("daysform").exprate.value*1/100;
var extra=document.forms.namedItem("daysform").extra.value*1;

var result;

result=logbase(1+extra/balance, (1+invrate)/(1+exprate))*365.25;

document.getElementById('calcdays').innerHTML =
                                      "Total Days Saved: "+result.toFixed(2);
}

function calcprice() {

var balance=document.forms.namedItem("dollarsform").balance.value*1;
var invrate=document.forms.namedItem("dollarsform").invrate.value*1/100;
var exprate=document.forms.namedItem("dollarsform").exprate.value*1/100;

var result;

result=(Math.pow((1+invrate)/(1+exprate),(1/365.25))-1)*balance;

document.getElementById('calcdayprice').innerHTML =
                                      "Price for an extra day: $"+result.toFixed(2);

result=(((1+invrate)/(1+exprate))-1)*balance;

document.getElementById('calcyearprice').innerHTML =
                                      "Price for an extra year: $"+result.toFixed(2);
}

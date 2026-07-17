var olma = 26;
var dost = 6;
var harbiriga = Math.floor(olma / dost);
console.log(harbiriga);

var yilkuni = 100;
var haftaKuni = yilkuni % 7;
console.log(haftaKuni);

var oquvchi = 23;
var qoldiq = oquvchi % 5;
console.log(qoldiq);

var shokoladNarxi = 7000;
var pul = 20000;
var shokoladSoni = Math.floor(pul / shokoladNarxi);
console.log(shokoladSoni);

var kishi = 18;
var taxisigimi = 4;
var toliqTaxi = Math.floor(kishi / taxisigimi);
var qolganodam = kishi % taxisigimi;
console.log("To'liq taksilar:", toliqTaxi);
console.log("Oxirgi mashinaga qoladi:", qolganodam);

var ism = "Ali";
var yosh = 20;
var talabami = true;
console.log(`foydalanuvchi: ${ism}, yoshi: ${yosh} da, talaba: ${talabami}`);

var shahar = "Toshkent";
var harorat = 28;
console.log(`Bugun ${shahar} shahrida harorat ${harorat} daraja issiq`);

var mashinanarxi = 12000;
var hamyon = 50000;
var mashinasoni = Math.floor(hamyon / mashinanarxi);
var qaytim = hamyon % mashinanarxi;
console.log("Mashinalar soni:", mashinasoni);
console.log("Qaytim:", qaytim);

var tomon = 8;
var yuza = tomon * tomon;
console.log(yuza);
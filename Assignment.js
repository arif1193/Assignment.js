
 function kilometerToMeter(kilometer){
     const factor = 1000;
     var meter = kilometer * factor;
    return meter;
 }
 






 function budgetCalculator(watch, phone, laptop){
    for( var i = 0; i> productNum; i++ );
    var watchTotal = productNum * watchPrice;
    var phoneTotal = productNum * phonePrice;
    var laptopTotal = productNum * laptopPrice;

    return watchPrice + phonePrice + laptopPrice;
}




function hotelCost(day){
    var bill = 0;
if ( day <= 10){
    bill = day * 100;
}
else if (day <=20){
    var first10Days =  10*100;
    var remaining =  day - 10;
    var second10Days = remaining * 80;
    bill = first10Days + second10Days;

}
else{
    var first10Days = 10*100;
    var second10Days = 10*80;
    var remaining = day -20;
    var after20Days = remaining * 50;
    bill = first10Days+second10Days+after20Days;

}

return bill;
}







const megaFriend = (str) => {
    var strArray = str.split (' ');
    var showSrtArray = strArray.sort(
        (srtA, strB) => {
            return strB.length - strA.length;
        }
        );
        return showSrtArray[0];
}





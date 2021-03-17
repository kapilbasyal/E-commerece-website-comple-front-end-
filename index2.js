// add to cart page

var totalprice = document.getElementById("totalprice")
var payamt = document.getElementById("payamt")
var shipping = document.getElementById("shipping")

const decrement = (incdec, itemprice) => {
    var itemvalue = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
      
    if(itemvalue.value <= 0){
        itemvalue.value = 0;
        alert("Negative value not allowded")
    }else {
        itemvalue.value = parseInt(itemvalue.value) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 125000;
        totalprice.innerHTML = parseInt(totalprice.innerHTML) - 125000;

        payamt.innerHTML = parseInt(totalprice.innerHTML) + parseInt(shipping.innerHTML);
    }
}
const increment = (incdec,itemprice) => {
    var itemvalue = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if(itemvalue.value >= 5){
        itemvalue.value = 5;
        alert("Max 5 Allowded")
    }else {
        itemvalue.value = parseInt(itemvalue.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 125000;
        totalprice.innerHTML = parseInt(totalprice.innerHTML) + 125000;
        payamt.innerHTML = parseInt(totalprice.innerHTML) + parseInt(shipping.innerHTML);
    }

}



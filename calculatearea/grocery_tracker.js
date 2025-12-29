let Amount1;
let Amount2;
let Amount3;
function calculateAmount(){
    Amount1 = parseFloat(document.getElementById('Grocery Amount-1').value);
    Amount2 = parseFloat(document.getElementById('Grocery Amount-2').value);
    Amount3 = parseFloat(document.getElementById('Grocery Amount-3').value);
    let sum = Amount1+ Amount2 +Amount3;
    document.getElementById('result').innerText=`The Total Amount is : ${sum}`;
}
function about(){
    window.alert('PROGRAMMED BY MA.JANE LALAINE ROQUE');
    console.log('PROGRAMMED BY MA.JANE LALAINE ROQUE ');
}
function sum(){
    let n1,n2,sum
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    sum=n1+n2;
   document.getElementById('total').value = sum
}
function sub(){
    let n1,n2,sub
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    sub=n1-n2;
   document.getElementById('total').value = sub
}
function pro(){
    let n1,n2,pro
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2'). value)
    pro=n1*n2;
   document.getElementById('total').value = pro
}

function quo(){
    let n1,n2,quo
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    quo=n1/n2;
   document.getElementById('total').value = quo
}
function clearr(){
    document.getElementById('num1').value = '';
         document.getElementById('num2').value = '';
           document.getElementById("total").value = '';
}
function dis(){
    document.getElementById('total').disabled = true;
}

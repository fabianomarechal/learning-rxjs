var op1 = 0;
var op2 = 0;
var operacao = null;

setop = function(a) {
    operacao = a;
    document.getElementById('result').value = 0;
}

calcule = function (a,b) {
    if (operacao) {
        if (operacao == '+') {
            op1 = Number(op1) + Number(op2); 
        } else if (operacao == '-') {
            op1 = Number(op1) -Number( op2);
        } else if (operacao == '*') {
            op1 = Number(op1) *Number( op2);
        } else {
            op1 = Number(op1)/Number(op2);
        }
    }
    
    document.getElementById('result').value = op1;
};

concatene = function(a){
    let res = document.getElementById('result');
    if(Number(res.value) == 0) {
        res.value = a;
    } else {
        res.value += a;
    }
    if(op1) {
        op2 = res.value;
    } else {
        op1 = res.value;
    }
    
}



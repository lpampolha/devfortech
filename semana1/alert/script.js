function somarValores(){
    var num1 = (document.getElementById("soma1").value)
    var num2 = (document.getElementById("soma2").value)
    var soma = parseInt(num1) + parseInt(num2)
    console.log(soma)
    document.querySelector(".soma").innerHTML = soma
    alert(soma)
}

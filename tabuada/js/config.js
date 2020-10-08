function resultado(){

    var num = window.document.getElementById('number')
    var tab = window.document.getElementById('seltab')
    
    if(num.value.length == 0) {
        alert('Digite um numero!')

    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''    //limpar tipo função clear
        while(c <= 10) {
            var item = document.createElement('option')  //criando jum elemento option igual no html
            item.text = `${n} x ${c} = ${n*c}`   //resultado em placeholder multiplicação de duas variaveis
            tab.appendChild(item)     //adicionar um elemento child
            item.value = `tab${c}`
            c++
        }
        
    }

}

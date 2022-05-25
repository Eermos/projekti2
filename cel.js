document.getElementById('lasku').onclick = laskuri2;
let numero = document.getElementById('numberfield').value;
function laskuri2(event){
    event.preventDefault()
    
    var d1 = document.getElementById('desimal1')
    var d2 = document.getElementById('desimal2')
    var d3 = document.getElementById('desimal3')
    
    if (numero < -459.67){
        alert("Ei mennä alemmas")
    }

    if(document.getElementById('numberfield').value.length == 0) {
        alert('Ei tyhjää')
    }

    if (numero >= -459.67){
        let fahrenheit = 0;
        if(d1.checked == true){
            fahrenheit = (numero -32) / (9/5);
            fahrenheit = parseFloat(fahrenheit).toFixed(1)

            console.log(fahrenheit)
        }
        else if (d2.checked == true){
            fahrenheit = (numero -32) / (9/5);
            fahrenheit = parseFloat(fahrenheit).toFixed(2)
            console.log(fahrenheit)
        }
        else if (d3.checked == true){
            fahrenheit = (numero -32) / (9/5);
            fahrenheit = parseFloat(fahrenheit).toFixed(3)
            console.log(fahrenheit)
        }
        document.getElementById('tulos').value = fahrenheit;
    }

}


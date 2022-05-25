document.getElementById('laskin').onclick = laskuri1;

function laskuri1(event){
    event.preventDefault()
    let numero = document.getElementById('numberfield').value;
    var d1 = document.getElementById('desimal1')
    var d2 = document.getElementById('desimal2')
    var d3 = document.getElementById('desimal3')
    
    if (numero < -273.15){
        alert("Ei mennä alemmas")
    }

    if(document.getElementById('numberfield').value.length == 0) {
        alert('Ei tyhjää')
    }

    if (numero >= -273.15){
        let fahrenheit = 0;
        if(d1.checked == true){
            fahrenheit = numero * (9/5) + 32;
            fahrenheit = parseFloat(fahrenheit).toFixed(1)

            console.log(fahrenheit)
        }
        else if (d2.checked == true){
            fahrenheit = numero * (9/5) + 32;
            fahrenheit = parseFloat(fahrenheit).toFixed(2)
            console.log(fahrenheit)
        }
        else if (d3.checked == true){
            fahrenheit = numero * (9/5) + 32;
            fahrenheit = parseFloat(fahrenheit).toFixed(3)
            console.log(fahrenheit)
        }
        document.getElementById('tulos').value = fahrenheit;
    }
}


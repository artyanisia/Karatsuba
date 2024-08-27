window.addEventListener("load", (event) => {

    const button= document.getElementById("button");

    button.addEventListener( 'click', () => {

        let result= 0;

        let x =  document.getElementById("firstNumInput").value.trim();
        let y = document.getElementById("secondNumInput").value.trim();
        let output = document.getElementById("output");

        if(x === '' || y === '') {

            output.textContent = 'Fill out both variables';

        }
        else if(/^-?\d+$/.test(x) && /^-?\d+$/.test(y)){        
            let result =  karatsuba(x,y);
            output.textContent=result;

        }
        else {
            firstNumInput.value = '';
            secondNumInput.value = '';
            output.textContent = 'Please write only numbers';
        }
    });
});
    //1524155677489
    function karatsuba(x, y) {
        let BigIntX = BigInt(x);
        let BigIntY = BigInt(y);

        if (BigIntX < 10n || BigIntY < 10n) {
            return BigIntX * BigIntY;
        }

        let m = Math.min(x.toString().length-1,y.toString().length-1);
        m = BigInt(Math.ceil(m / 2));
    
        let divisor = 10n ** m;

        let lowPartX = BigIntX % divisor;
        let highPartX = BigIntX / divisor;
        let lowPartY = BigIntY % divisor;
        let highPartY = BigIntY / divisor;

        let z0 = karatsuba(lowPartX, lowPartY);
        let z1 = karatsuba(lowPartX + highPartX, lowPartY + highPartY);
        let z2 = karatsuba(highPartX, highPartY);
        

        let squaredDivisor = divisor * divisor;

        let result = (z2 * squaredDivisor) + ((z1 - z2 - z0) * divisor) + z0;

        return result;
        
    }

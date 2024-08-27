window.addEventListener("load", (event) => {

    const button= document.getElementById("button");

    button.addEventListener( 'click', () =>{

        let result= [];

        let x =  document.getElementById("firstNumInput").value.trim();
        let y = document.getElementById("secondNumInput").value.trim();
        let output = document.getElementById("output");
        if(x === '' || y === '') {
            
            output.textContent = 'Fill out both variables';

        }
        else if(/^-?\d+$/.test(x) && /^-?\d+$/.test(y)){

            let BigIntX = BigInt(x);
            let BigIntY = BigInt(y);

            let m = Math.min(x.length-1,y.length-1);

            let divisor = BigInt(10 ** m);

            let lowPartX = BigIntX % divisor;
            let highPartX = BigIntX / divisor;
            let lowPartY = BigIntY % divisor;
            let highPartY = BigIntY / divisor;

            let z2 = highPartX * highPartY;
            let z0 = lowPartX * lowPartY;
            let z1 = (highPartX + lowPartX) * (highPartY + lowPartY) - z2 - z0;

            let squaredDivisor = divisor * divisor;

            result = z2 * squaredDivisor + z1 * divisor + z0;

            output.textContent=result;
        }
        else {
            firstNumInput.value = '';
            secondNumInput.value = '';
            output.textContent = 'Please write only numbers';
        }

    })

})
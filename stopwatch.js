window.onload = function () {

    let seconds = 00;
    let tens = 00;
    let addSeconds = document.getElementById("seconds");
    let addTens = document.getElementById("tens");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let addLap = document.getElementById("lap-times");
    let buttonLap = document.getElementById("button-lap");
    let Interval;



    let startTimer = () => {
        tens++;

        switch (Math.sign(tens - 9)) {
            case -1:
            case 0:
                addTens.innerHTML = "0" + tens;
                break;
            case 1:
                addTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            addSeconds.innerHTML = "0" + seconds;
            tens = 0;
            addTens.innerHTML = "0" + 0;
        }

        if (seconds > 9 ) {
            addSeconds.innerHTML = seconds;
        }

        buttonLap.onclick = () => {
                if(tens <= 9) {
                    tens = "0" + tens;
                }
                let text = document.createTextNode(`${seconds}:${tens}`);
                let li = document.createElement("li");
                li.appendChild(text);
                document.getElementById(`lap-times`).appendChild(li)
        }

        
    }

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = () => {
        clearInterval(Interval);
    }

    buttonReset.onclick = () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        addLap.innerHTML = "";
        addTens.innerHTML = tens;
        addSeconds.innerHTML = seconds;
    }




}


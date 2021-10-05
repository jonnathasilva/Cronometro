let iniciar = document.getElementById('iniciar');
let pausar = document.getElementById('pausar');
let parar = document.getElementById('parar');

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;//Quantos milésimos valem 1 segundo?
let cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);

}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron)
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("cron").innerText = '00:00:00';
}

function timer() {
    ss++;
    if (ss == 59) {
        ss = 0;
        mm++;
        if (mm == 59) {
            mm = 0
            hh++;
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById("cron").innerText = format;

    return format ;
};

iniciar.addEventListener("click", () => {
    start()
    iniciar.style.display = 'none'
    parar.style.display = 'inline-block'
});

pausar.addEventListener("click", () => {
    pause()
    iniciar.style.display = 'inline-block'
    parar.style.display = 'none'
});

parar.addEventListener("click", () => {
    stop()
    iniciar.style.display = 'inline-block'
    parar.style.display = 'none'
});

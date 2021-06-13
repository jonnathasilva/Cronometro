
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
    let hh = 0;
    let mm = 0;
    let ss = 0;

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
}
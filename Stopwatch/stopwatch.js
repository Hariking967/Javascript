let startTime = null;
let timeElapsed = 0;
let timeoutId = null;

function StartStopwatch()
{
    if (startTime == null)
    {
        startTime = Date.now();
    }
    timeoutId = setInterval(()=>{
        timeElapsed = Date.now() - startTime;
        let d = new Date(timeElapsed);
        let milliseconds = String(Math.floor(d.getUTCMilliseconds()/10)).padStart(2,'0');
        let seconds = String(d.getUTCSeconds()).padStart(2,'0');
        let minutes = String(d.getUTCMinutes()).padStart(2,'0');
        let hours = String(d.getUTCHours()).padStart(2,'0');
        let disp = `${hours}:${minutes}:${seconds}:${milliseconds}`;
        document.getElementById("timer").textContent = disp;
    }, 10);
}

function StopStopwatch()
{
    if (timeoutId != null)
    {
        startTime = Date.now() - timeElapsed;
        clearInterval(timeoutId);
    }
}

function ResetStopwatch()
{
    clearInterval(timeoutId);
    startTime = null;
    timeElapsed = 0;
    document.getElementById("timer").textContent = `00:00:00:00`;
}

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener('click',StartStopwatch);
stopBtn.addEventListener('click', StopStopwatch);
resetBtn.addEventListener('click', ResetStopwatch);
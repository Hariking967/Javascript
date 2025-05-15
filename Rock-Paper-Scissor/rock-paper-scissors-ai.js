let score = JSON.parse(localStorage.getItem('score')) || {'Wins':0, 'Losses':0, 'Ties':0};
dispscore();
function game(user)
{
    dispscore();
    let cpu = cpumove();
    document.querySelector('.js-moves').innerHTML = `You <img src="${user}-emoji.png" class="img"> <img src="${cpu}-emoji.png" class="img"> Computer `;
    if (cpu == user)
        {
            score.Ties++;
            document.querySelector('.js-result').innerHTML = 'TIE';
        }
    else if ((user == 'rock' && cpu == 'scissors') || (user == 'paper' && cpu == 'rock') || (user == 'scissors' && cpu == 'paper'))
        {
            score.Wins++;
            document.querySelector('.js-result').innerHTML = 'YOU WIN';
        }
    else
        {
            score.Losses++;
            document.querySelector('.js-result').innerHTML = 'YOU LOSE';
        }
    localStorage.setItem('score',JSON.stringify(score));
    dispscore();
}

function cpumove()
{
    let seed = Math.random();
    if (seed<1/3)
    {
        return 'rock';
    }
    else if (seed<2/3)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

function dispscore()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

let intervalID;

function autoplay()
{
    let apelement = document.querySelector('.js-auto-play-button');
    if (apelement.innerHTML == 'Auto Play')
    {
        intervalID = setInterval(function(){
            const user = cpumove();
            game(user);
        }, 1000);
        apelement.innerHTML = 'Stop Play';
    }
    else
    {
        clearInterval(intervalID);
        apelement.innerHTML = 'Auto Play';
    }
}
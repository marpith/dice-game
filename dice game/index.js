function roll() {
    var x = Math.floor((Math.random()*6)+1);

    var img = 'images/dice'+x+'.png';

    var diceimage = document.querySelectorAll('img')[0];

    diceimage.setAttribute("src", img);

    var y = Math.floor((Math.random()*6+1));
    var img2 = 'images/dice'+y+'.png';
    document.querySelectorAll('img')[1].setAttribute("src",img2);

    if (x > y) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if (y > x){
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}
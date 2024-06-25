let random1=Math.floor((Math.random()*6)+1);
let random_img="./images/dice" + random1 +".png";

var random_img_src=document.querySelectorAll("img")[0];
random_img_src.setAttribute("src", random_img);


let r2=Math.floor((Math.random()*6)+1);
let src2="images/dice"+r2+".png";

document.querySelectorAll("img")[1].setAttribute("src",src2);

if(random1>r2)
    {
        document.querySelector("h1").innerHTML=("PLAYER 1")
    }
    else if(r2>random1)
        {
            document.querySelector("h1").innerHTML=("PLAYER 2")
        }
        else
        {
            document.querySelector("h1").innerHTML=("DRAW")
        }
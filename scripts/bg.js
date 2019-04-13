// Background Changer
function bg(x)
{
    switch(x)
        {
            case 0 : 
                document.body.style.background = "none";
                document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
                break;
            case 1 :
                document.body.style.backgroundImage = "url(images/backgrounds/bg1.jpg)"; // Background #1
                document.body.style.backgroundSize = "100% 100%";
                break;
            case 2 :
                document.body.style.backgroundImage = "url(images/backgrounds/bg2.jpg)"; // Background #2
                document.body.style.backgroundSize = "100% 100%";
                break;
            case 3 :
                document.body.style.backgroundImage = "url(images/backgrounds/bg3.jpg)"; // Background #3
                document.body.style.backgroundSize = "100% 100%";
                break;
            case 4 :
                document.body.style.backgroundImage = "url(images/backgrounds/bg4.jpg)"; // Background #4
                document.body.style.backgroundSize = "100% 100%";
                break;
            case 5 :
                document.body.style.backgroundImage = "url(images/backgrounds/bg5.jpg)"; // Background #5
                document.body.style.backgroundSize = "100% 100%";
                break;
        }
}
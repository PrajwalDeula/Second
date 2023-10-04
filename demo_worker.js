let i = 0;
function timedOut(){
    i++;
    postMessage(i);
    setTimeout("timedCount()",100);
}

timedOut();
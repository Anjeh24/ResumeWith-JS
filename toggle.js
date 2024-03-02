
//var hideIt = "Show less";

function theSummary() {
    let varia1 = document.getElementById("dottyspan");
    let varia2 = document.getElementById("fullpara");
    let varia3 = document.getElementById("thelink1");
    let varia7 = document.getElementById("qt1");

    if(varia1.style.display === "none") {
        varia1.style.display = "inline";
        varia3.innerHTML = "click for more";
        varia2.style.display = "none";
        varia7.style.display = "inline";
    }else {
        varia1.style.display = "none";
        varia3.innerHTML = "Show less";
        varia2.style.display = "inline";
        varia7.style.display = "none";
    }

} 


function theSummary1() {
    let varia4 = document.getElementById("dottyspan1");
    let varia5 = document.getElementById("fullpara1");
    let varia6 = document.getElementById("thelink2");
    let varia8 = document.getElementById("qt2");

    if(varia4.style.display === "none") {
        varia4.style.display = "inline";
        varia6.innerHTML = "click for more";
        varia5.style.display = "none";
        varia8.style.display = "inline";
    }else {
        varia4.style.display = "none";
        varia6.innerHTML = "show less";
        varia5.style.display = "inline";
        varia8.style.display = "none";
    }
}


 function dismsg() {
    let kard = document.getElementById("divfrm");
    //let clsfrm = document.getElementsByClassName("close");

    kard.style.display = "block";
   
    
}

function clsfrm() {
    let clskrd = document.getElementsByClassName("close");
    let kard = document.getElementById("divfrm");
    if (kard.style.display === "block") {
        kard.style.display = "none";
    }

}




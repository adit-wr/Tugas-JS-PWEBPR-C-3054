function btnN(){
    document.getElementById("container").style.backgroundColor = "#6FD240";
    document.getElementById("Y").remove();
    document.getElementById("N").remove();
    document.getElementsByClassName("detektif")[0].src = "assets/y.png";
    document.getElementsByClassName("title")[0].innerHTML = "Anda Benar!";
    document.getElementsByClassName("txt")[0].innerHTML = "Anda adalah seorang Mahasiswa";
}

function btnY(){
    document.getElementById("container").style.backgroundColor = "#e12e2e";
    document.getElementById("Y").remove();
    document.getElementById("N").remove();
    document.getElementsByClassName("detektif")[0].src = "assets/n.png";
    document.getElementsByClassName("title")[0].innerHTML = "Anda Berbohong!";
    document.getElementsByClassName("txt")[0].innerHTML = "Anda adalah seorang Teknisi";
}

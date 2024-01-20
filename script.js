var btn = document.getElementById("calcul");
var res = document.getElementById("moy");

var moyR = document.getElementById("moy");
moyR.innerHTML = roundPoint2V(localStorage.moyenne);
var IHMTDt = document.getElementById("IHMTD");
IHMTDt.value = localStorage.IHMTD;
var IHMTPt = document.getElementById("IHMTP");
IHMTPt.value = localStorage.IHMTP;
var IHMEXAMt = document.getElementById("IHMEXAM");
IHMEXAMt.value = localStorage.IHMEXAM;

var COMPTDt = document.getElementById("COMPTD");
COMPTDt.value = localStorage.COMPTD;
var COMPTPt = document.getElementById("COMPTP");
COMPTPt.value = localStorage.COMPTP;
var COMPEXAMt = document.getElementById("COMPEXAM");
COMPEXAMt.value = localStorage.COMPEXAM;

var SETDt = document.getElementById("SETD");
SETDt.value = localStorage.SETD;
var SETPt = document.getElementById("SETP");
SETPt.value = localStorage.SETP;
var SEEXAMt = document.getElementById("SEEXAM");
SEEXAMt.value = localStorage.SEEXAM;

var GLTDt = document.getElementById("GLTD");
GLTDt.value = localStorage.GLTD;
var GLTPt = document.getElementById("GLTP");
GLTPt.value = localStorage.GLTP;
var GLEXAMt = document.getElementById("GLEXAM");
GLEXAMt.value = localStorage.GLEXAM;

var PLTDt = document.getElementById("PLTD");
PLTDt.value = localStorage.PLTD;
var PLEXAMt = document.getElementById("PLEXAM");
PLEXAMt.value = localStorage.PLEXAM;

var SETDt = document.getElementById("SETD");
SETDt.value = localStorage.SETD;
var SETPt = document.getElementById("SETP");
SETPt.value = localStorage.SETP;
var SEEXAMt = document.getElementById("SEEXAM");
SEEXAMt.value = localStorage.SEEXAM;

var PSTDt = document.getElementById("PSTD");
PSTDt.value = localStorage.PSTD;
var PSEXAMt = document.getElementById("PSEXAM");
PSEXAMt.value = localStorage.PSEXAM;

var DEEXAMt = document.getElementById("DEEXAM");
DEEXAMt.value = localStorage.DEEXAM;
btn.onclick = function(){
    var IHMTD = parseFloat(document.getElementById("IHMTD").value);
    window.localStorage.IHMTD = IHMTD;
    var IHMTP = parseFloat(document.getElementById("IHMTP").value);
    window.localStorage.IHMTP = IHMTP;
    var IHMEXAM = parseFloat(document.getElementById("IHMEXAM").value);
    window.localStorage.IHMEXAM = IHMEXAM;

    var COMPTD = parseFloat(document.getElementById("COMPTD").value);
    window.localStorage.COMPTD = COMPTD;
    var COMPTP = parseFloat(document.getElementById("COMPTP").value);
    window.localStorage.COMPTP = COMPTP;
    var COMPEXAM = parseFloat(document.getElementById("COMPEXAM").value);
    window.localStorage.COMPEXAM = COMPEXAM;

    var GLTD = parseFloat(document.getElementById("GLTD").value);
    window.localStorage.GLTD = GLTD;
    var GLTP = parseFloat(document.getElementById("GLTP").value);
    window.localStorage.GLTP = GLTP;
    var GLEXAM = parseFloat(document.getElementById("GLEXAM").value);
    window.localStorage.GLEXAM = GLEXAM;

    var PLTD = parseFloat(document.getElementById("PLTD").value);
    window.localStorage.PLTD = PLTD;
    var PLEXAM = parseFloat(document.getElementById("PLEXAM").value);
    window.localStorage.PLEXAM = PLEXAM;

    var SETD = parseFloat(document.getElementById("SETD").value);
    window.localStorage.SETD = SETD;
    var SETP = parseFloat(document.getElementById("SETP").value);
    window.localStorage.SETP = SETP;
    var SEEXAM = parseFloat(document.getElementById("SEEXAM").value);
    window.localStorage.SEEXAM = SEEXAM;

    var PSTD = parseFloat(document.getElementById("PSTD").value);
    window.localStorage.PSTD = PSTD;
    var PSEXAM = parseFloat(document.getElementById("PSEXAM").value);
    window.localStorage.PSEXAM = PSEXAM;
    
    var DEEXAM = parseFloat(document.getElementById("DEEXAM").value);
    window.localStorage.DEEXAM = DEEXAM;

    // calcule

    let IHMmoy = IHMTD*0.2 + IHMTP*0.2 + IHMEXAM*0.6;
    let COMPmoy = COMPTD*0.2 + COMPTP*0.2 + COMPEXAM*0.6;
    let SEmoy = SETD*0.2 + SETP*0.2 + SEEXAM*0.6;
    let GLmoy = GLTD*0.2 + GLTP*0.2 + GLEXAM*0.6;
    let PSmoy = PSTD*0.4 + PSEXAM*0.6;
    let PLmoy = PLTD*0.4 + PLEXAM*0.6;
    let DEmoy = DEEXAM;

    let moy = (IHMmoy*3 + COMPmoy*3 + SEmoy*3 + GLmoy*3 + PSmoy*2 + PLmoy*2 + DEmoy)/17;
    moyR.innerHTML = roundPoint2V(moy);
    console.log("IHM : ", IHMmoy);
    console.log("COMP : ", COMPmoy);
    console.log("GL : ", GLmoy);
    console.log("SE : ", SEmoy);
    console.log("PS : ", PSmoy);
    console.log("PL : ", PLmoy);
    console.log("DE : ", DEmoy);
    console.log("Moyen General", roundPoint2V(moy));
    window.localStorage.moyenne = moy;
    
}

function roundPoint2V(number) {
    return Math.round(number * 100) / 100;
}

function notYet()
{
    window.alert("not yet!");
}
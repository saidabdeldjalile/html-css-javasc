class Etudiant{
    constructor(nomE,prenomE,ageE){
        this.nomE=nomE;
        this.prenomE=prenomE;
        this.ageE=ageE;
    }
}
let tab=["Etudiant1","Etudiant2","Etudiant3"];
var E= new Etudiant("said","bensalma",40);
var Etudiantlist=[
    new Etudiant("Samir","abdelaziz",18),
    new Etudiant("janki","peter",40),
    new Etudiant("amin","jared",23)
];
document.getElementById("tabE").onclick= function (){
    let i=Number();
    for(i=0;i<tab.length;i++){
     console.log(tab[i]);
    }
}

document.getElementById("objE").addEventListener("click",afficherObjet);
function afficherObjet(){
        console.log("{nom:"+E.nomE+" , prenom: "+E.prenomE+" , age :"+E.ageE+"}");
}

document.getElementById("tabobjE").addEventListener("click",afficherTableauObjet);
function afficherTableauObjet(){
    let i=Number();
 for(i=0;i<Etudiantlist.length;i++){
    console.log("{nom:"+Etudiantlist[i].nomE+" , prenom: "+Etudiantlist[i].prenomE+" , age :"+Etudiantlist[i].ageE+"}");
 }
}

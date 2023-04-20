class Etudiant{
    constructor(matricule,nom,prenom,note,assiduité){
        this.matricule=matricule;
        this.nom=nom;
        this.prenom=prenom;
        this.note=note;
        this.assiduité=assiduité;
    }
    estAdmissible(note){
        if(note<10){return false;
        }else{return true;}
    }
}
let etudiants=[
    new Etudiant(1000,"abderhman","lmin",17,5),
    new Etudiant(2000,"kaml","bensalma",9,1),
    new Etudiant(3000,"Rayane","nassim",13,3)
];


document.getElementById("delib").addEventListener("click",delibiration);
function delibiration(){let i=Number();
    for(i=0;i<etudiants.length;i++){
        if(etudiants[i].estAdmissible(etudiants[i].note)){
         console.log(etudiants[i].matricule+" :ADMIS!");
        }else{console.log(etudiants[i].matricule+" :AJOURNEE!");}
    }
}
let total_points=0;
function doInsertrowtable(num,nom,prenom,points){
    const tab = document.getElementById('slam');
    const row = document.createElement('tr');
    row.setAttribute('table-container', '');
  
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    const col4 = document.createElement('td');
    const col5 = document.createElement('td');
  
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
  
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    col5.appendChild(checkbox);
  
    col1.setAttribute('class', 'col_number');
    col2.setAttribute('class', 'col_text');
    col3.setAttribute('class', 'col_text');
    col4.setAttribute('class', 'col_number');
    col5.setAttribute('class', 'col_chkbox');
  
    row.append(col1, col2, col3, col4, col5);
    tab.append(row);

   
  }
  personne =[
    {
        nom:"nom-1",
        prenom:"prenom-1",
        points:5,
    },
    {
        nom:"nom-2",
        prenom :"prenom-2",
        points :10,
    },
    {
        nom:"nom-3",
        prenom:"prenom-3",
        points :15,
    }
]


let num=0;

function doinsert(nom,prenom,points){
num=num+1;
total_points=total_points+points;
doInsertrowtable(num,nom,prenom,points);
update_summry();
}

document.getElementById('consol').onclick=function(){
    console.log(personne);
}

function update_summry(){
    e1=document.getElementById('p1');
    e1.innerHTML=num+" ling(s)"

    e3=document.getElementById('p3');
    e3.innerHTML="Total point(s)= "+total_points;
}
function Donewdata(){
    let nom;
    let prenom;
    let points;
    const d1=document.getElementById('form_nom');
    const d2=document.getElementById('form_prenom');
    const d3=document.getElementById('form_points');
    nom=d1.value;
    prenom=d2.value;
    points=parseInt(d3.value,10);
    if(nom=='' || prenom=='' ||(Number.isNaN(points)) ){alert("ficher incomplete");}
    else{
    doinsert(nom,prenom,points);
    personne.push({nom,prenom,points});
    d1.value = '';
    d2.value = '';
    d3.value = '';
    }
}

function dtetlRow(){
    if(num<=0){
        alert("tableau deja vide");
    }else{
        table=document.getElementsByTagName("table")[0];
        checkbox_list=table.querySelectorAll(".col_chkbox input");
        isOneChecked=false;
        for(let i=0 ;i<checkbox_list.length;i++){
            if(checkbox_list[i].checked){
                isOneChecked=true;
            }
        }
        if(!isOneChecked){
            alert("selctioner au moin un ficher");
        }else{
            if(confirm("vouler vous supprimer cette linge")){
               isOneChecked=false;
               let i=1;
        while(i<table.rows.length){
            if(checkbox_list[i-1].checked){
                rows=table.getElementsByClassName("row");
                var row = checkbox_list[i-1].parentNode.parentNode;
               /* total_points=total_points -parseInt(table.rows[i+1].ChildNodes[3].innerText);*/
                       total_points=total_points-parseInt(table.rows[i].childNodes[3].innerText);
                    table.rows[i].remove();
                        personne.splice(i+2,1);
                        num--;
                    }else{i++;}   
                }
                alert("la linge supprimer avec succser");
                update_summry();
            }
        }

    }
}
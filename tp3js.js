
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
function init(){
    for (const iterator of personne){
        doinsert(iterator.nom,iterator.prenom,iterator.points);
    }
}

let num=3;

function doinsert(nom,prenom,points){
num=num+1;
doInsertrowtable(num,nom,prenom,points)
}

document.getElementById('consol').onclick=function(){
    console.log(personne);
}

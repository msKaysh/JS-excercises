var tab = new Array(10);
var rand = (Math.floor(Math.random() * 10));

for(i = 0; i<10; i++){
    tab[i]= new Array(10);
}

for (i=0; i<10; i++){    
    for(s=0; s<10; s++){
        tab[i][s] = Math.floor(Math.random() * 10);
        document.write(tab[i][s]+"<br>");
    }
}


//document.write(tab[i][s]+"<br>");
function doit(){
    var tablica = new Array(0);

    for(var i = 0; i<5; i++){
      tablica.push(Math.floor(Math.random() * 100));
      document.write(tablica[i] + "<br>");
    };

do{
    var issort = true;
    for(i=0;i<tablica.length-1;i++){
        var a = tablica[i];
        var b = tablica[i+1];
            if(a>b){
                var temp;
                temp = tablica[i];
                tablica[i]=tablica[i+1];
                tablica[i+1]=temp;
                issort = false;
            }
    }
    
}
    
    while (issort == false);
    
    document.write(tablica + "<br>");
};

doit();
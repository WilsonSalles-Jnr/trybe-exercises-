function around(word, ending){
    let ultimasLetras ='';
    for(let i =0;i<word.length;i+=1){
        ultimasLetras += word[word.length];
    }
    if(word[word.length-1][word.length-2]===ending){
        console.log(true);
    }
}
around('trybe','be');
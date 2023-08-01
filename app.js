const func = (arr)=>{
    console.log(1);
    console.log('dev');
    return [...new Set(arr)]
    
}

console.log(func(['1','1','1','2']));
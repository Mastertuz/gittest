const func = (arr)=>{
    return [...new Set(arr)]
}

console.log(func(['1','1','1','2']));
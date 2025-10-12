function fun(data){
    let Update = data.map((eachData)=>{
        return eachData*eachData
    })
    return JSON.stringify(Update.sort((a,b)=> a-b));

}

console.log(fun([1,4,6,-1,5,10]));


function func(resolve,reject)
{
    let x=0;
    if(x)
    {
        resolve({name:"Divyanshi"});
    }
    else
    {
        reject({error:"Failed"});
    }
}

const prom = new Promise(func);

prom.then((data) => console.log(data)).catch((error) => console.log(error));
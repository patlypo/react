const myPromise = new Promise<number>((resolve, reject) =>{
    setTimeout(()=>{
        //resolve(100);
        reject('nop')
    }, 2000);
});

myPromise.then((myMoney) =>{
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch((reason)=> {
    console.warn(reason);
}).finally(()=>{
    console.log('listop');
})
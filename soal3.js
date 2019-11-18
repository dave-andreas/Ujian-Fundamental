cekkoin=(a)=>{
    sisah=a
    koin=0
    for(i=0;;i++){
        if(sisah/25>1){
            koin+=Math.floor(sisah/25)
            sisah=sisah%25
            // console.log(sisah)
            // console.log(koin)
        }else if(sisah/10>1){
            koin+=Math.floor(sisah/10)
            sisah=sisah%10
            // console.log(sisah)
            // console.log(koin)
        }else if(sisah/5>1){
            koin+=Math.floor(sisah/5)
            sisah=sisah%5
            // console.log(sisah)
            // console.log(koin)
        }else if(sisah/1>=1){
            koin+=Math.floor(sisah/1)
            sisah=sisah%1
            // console.log(sisah)
            // console.log(koin)
        }else{
            break
        }
    }
    return koin
}
console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))

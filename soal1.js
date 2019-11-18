lelang=(a)=>{
    hasil=10000
    for(i=0;i<a;i++){
        if(i%4==0&&i>2){
            hasil=Math.ceil(hasil*1.1)
        }else{
            hasil=Math.ceil(hasil*1.2)
        }
    }
    // hasil=Math.ceil(hasil)
    if(hasil>30000000){
        return 'barang sudah terjual'
    }else{
        return 'harganya '+ hasil
    }
}
console.log(lelang(49))
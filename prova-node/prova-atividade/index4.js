const fs = require('fs')

const arqAn = 'arquivo.txt'
const arqNo = 'nasc.txt'

fs.rename(arqAn, arqNo, (err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(`o arquivo ${arqAn} foi renomeado para ${arqNo}`)
})
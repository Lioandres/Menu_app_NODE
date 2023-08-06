const fs=require('fs')
const archivo='./db/archivo.json'

const guardarArchivo=(data)=>{
    fs.writeFileSync(archivo,data)

}

const leerArchivo=()=>{
    if(!fs.existsSync(archivo)) return
    const jsonLeido=fs.readFileSync(archivo,{encoding:'utf-8'})
    const info=JSON.parse(jsonLeido)
    return info
}

module.exports=
{
    guardarArchivo,
    leerArchivo
}
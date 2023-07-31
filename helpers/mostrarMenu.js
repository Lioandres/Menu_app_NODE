const { stdin, stdout } = require('process')

require ('colors')

const mostrarMenu=()=>{

    return new Promise((resolve) => {

        console.log('======================'.green)
        console.log('  Seleccione un numero'.green)
        console.log('======================\n'.green)
        console.log(`${'1.'.green}-Crear tarea `)
        console.log(`${'2.'.green}-Listar tarea `)
        console.log(`${'3.'.green}-Listar tareas  completas`)
        console.log(`${'4.'.green}-Listar tareas pendientes `)
        console.log(`${'4.'.green}-Eliminar tarea `)
        console.log(`${'5.'.green}-Borrar tarea `)
        console.log(`${'0.'.green}-Salir \n`)
    
     const readline=require('readline').createInterface(
        {
            input:process.stdin,
            output:process.stdout
        })
    
        readline.question('eliga una opcion\n',(opt)=>{
            //console.log(opt)
            readline.close()
            resolve(opt)
    
        })

        
    })


}

const pause=()=>{

    return new Promise((resolve) => {
        
        const readline= require('readline').createInterface(
           {
               input:process.stdin,
               output:process.stdout
           })
       
           readline.question(`Presione ${'ENTER'.green} para continuar \n`,(opt)=>{
               readline.close()
               resolve()
       
           })
       
    })
        

}



module.exports=
    {
    mostrarMenu,
    pause
}

require('colors')
const { guardarArchivo, leerArchivo } = require('./helpers/guardarArchivo')
const {inquirerMenu, pause, leerDesc,listaBorrar}=require('./helpers/inquirerHelp')
const Tareas = require('./helpers/models/tareas')


const {mostrarMenu}=require('./helpers/mostrarMenu')

console.clear()

const main= async () => {
    
    let opt=''
    const tareas=new Tareas()
    

    const info=leerArchivo()

    if(info){
        tareas.CargarTareas(info)
    }

    

    do {

        
          opt=await inquirerMenu()

        switch (opt) {
            case '1':
                const desc= await leerDesc('ingrese una descripcion')
                console.log(desc)
                tareas.crearTarea(desc);
                guardarArchivo(JSON.stringify(tareas.listatoArr))
                
                break;

            case '2':
               tareas.listarTareas()
              // console.log(tareas.listatoArr)
            

               break;
            
            case '3':
            tareas.listarCompletadasPendientes(true)
            break;

            case '4':
            tareas.listarCompletadasPendientes(null)           
            break;

            case '6':
            const id=listaBorrar(tareas.listatoArr)
            tareas.borrarTareas(id)           
            break;
            
        }
       
        
        await pause()

    } while (opt!=='0');
   

    
}

main()
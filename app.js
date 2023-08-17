require('colors')
const { guardarArchivo, leerArchivo } = require('./helpers/guardarArchivo')
const {inquirerMenu, pause, leerDesc,listaBorrar,confirmar,listaCheckbox}=require('./helpers/inquirerHelp')
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

            case '5':
               const ids=await listaCheckbox(tareas.listatoArr)
               tareas.toggleTareas(ids)
               console.log({ids})          
            break;

            case '6':
            const id= await listaBorrar(tareas.listatoArr)
            if(id==='0') break
            const ok=await confirmar(`esta seguro que desea borrar la tarea?`)
            if(ok){
            //console.log({id})
            tareas.borrarTareas(id)
            }           
            break;
            
        }
       
        
        await pause()

    } while (opt!=='0');
   

    
}

main()
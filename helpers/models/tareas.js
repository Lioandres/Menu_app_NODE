const Tarea = require("./tarea")
require('colors')

class Tareas{
    
    _listado={}

    get listatoArr(){
        const listado=[]
        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key]
            listado.push(tarea)
        })
        return listado
    }

    constructor(){
        this._listado={}
    }

    crearTarea(desc){
        const tarea=new Tarea(desc)
        this._listado[tarea.id]=tarea      
    }

    CargarTareas(tareasArray){

        tareasArray.forEach(tarea=>{

            this._listado[tarea.id]=tarea

        })
        
    }


    listarTareas(){
       
        let lista='Lista de Tareas\n'
        let status=''
        
        this.listatoArr.forEach((tarea,index)=>
        {
            
         tarea.completadoEn 
                    
                    ? status='completada'.green 
                    : status='pendiente'.red

         const i=`${index+1}`.green
         const desc=tarea.desc

         lista=`${lista}  ${i}-  ${desc}:: ${status} \n`
    })
    console.log()    
    console.log(lista)




}

    listarCompletadasPendientes(completada){
        let listaCompletada='Lista de Tareas Completadas\n'
        let listaPendiente='Lista de Tareas Pendientes\n'
        let status=''
        
        this.listatoArr.forEach((tarea,index)=>
        {
            
         tarea.completadoEn 
                    
                    ? status='completada'.green 
                    : status='pendiente'.red

         const i=`${index+1}`.green
         const desc=tarea.desc;

         
         (status==='completada'.green) 
                 ? listaCompletada=`${listaCompletada}  ${i}-  ${desc}:: ${status} \n`
                 : listaPendiente=`${listaPendiente}  ${i}-  ${desc}:: ${status} \n`

    })
    console.log();    
    (completada) 
            ? console.log(listaCompletada)
            : console.log(listaPendiente)




    }

   
    borrarTareas(id){
        if(this._listado[id]) {

         delete this._listado[id]
        }

    }


}

module.exports=Tareas
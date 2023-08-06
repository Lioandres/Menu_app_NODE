const Tarea = require("./tarea")

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
        let lista='Lista de Tareas'
        this.listatoArr.forEach((tarea,index)=>
        {lista=`${lista}\n
         ${index+1}_${tarea.desc} `})
        console.log(lista)
        
    }



}

module.exports=Tareas
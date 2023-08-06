const inquirer=require('inquirer')
require('colors')

const preguntas=[
    {
        type:'list',
        name:'parameter1',
        message:'elija una opcion',
        choices:[
            {
                value:'1',
                name:`${'1-'.green} Crear tarea `,   
            },
            {
                value:'2',
                name:`${'2-'.green}Listar tarea `,   
            },
            {
                value:'3',
                name:`${'3-'.green} Listar tarea completadas `,   
            },
            {
                value:'4',
                name:`${'4-'.green}Listar tareas pendientes `,   
            },
            {
                value:'5',
                name:`${'5-'.green}Completar tareas `,   
            },
            {
                value:'6',
                name:`${'6-'.green}Borrar tarea `,   
            },
            {
                value:'0',
                name:`${'0-'.green}Salir `,   
            },
        ],

    }
]

const inquirerMenu = async()=>{

    console.log('======================'.green)
    console.log('  Seleccione un numero'.white)
    console.log('======================\n'.green)

    const {parameter1}=await  inquirer.prompt(preguntas)

    return parameter1
}

const pause=async()=>{

     await inquirer.prompt([{type:'input',name:'pause',message:`presione ${'ENTER'.green} para continuar\n`}])

}

const leerDesc=async(message)=>{

    const nombreTarea=[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if (value.length===0)  return 'ingrese un valor' 
                return true
            }
        }

    ]

    const {desc}=await inquirer.prompt(nombreTarea)
    return desc
} 

module.exports={
    inquirerMenu,
    pause,
    leerDesc
}
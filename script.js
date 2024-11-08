const diasSemana = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
]

for (let index = 0; index < diasSemana.length; index++) {
    console.log(diasSemana[index])
    if (diasSemana[index] == "Sexta") {
        console.log ("Sextou")
    }
}

const usuario = {
    "id": 1,
    "nome": "Durvaldo",
    'senha': 'senha123'
}

console.log(usuario.senha)

const tipoDados = {
    "string": "alguma coisa",
    "int": 3,
    "boolean": false,
    "float": 4.5,
    "array": ['elemento', 'banana', 'fruta'],
    "json": {
        "id": 1,
        "nome": "Durvaldo",
        'senha':'senha123'
    }
}


const usuarios = [
    {
     "id" : 1,
        "nome": "Durvaldo",
        'senha':'senha123'  
    },
    {
       "id" : 2,
        "nome": "Durvaldo",
        'senha':'senha123'
    },
    {
    "id" : 3,
        "nome": "Pedro",
        'senha':'senha12345'
    }
]
console.log(usuarios[3])
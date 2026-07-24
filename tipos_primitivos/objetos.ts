let user: { name: string, age: number, AvatarUrl?: string} = {name: "Sara", age: 20}

user.name

// function singIn(email: string, password: string){

// }

function singIn({email, password}: {email: string, password: string}){
    //logica pra conectar email
    console.log("Usuario" + email + "conectado")
}

singIn({email: "sara@gmail.com", password: "sara123"})

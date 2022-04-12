function getAdmin (map){
    let admins = [];
    for([key, value] of map){
        if(value ==='Admin');
        admins.push(key);
    }
return admins;
}

const usuarios = new Map();

usuario.set('Luiz','Admin');
usuario.set('Pedro','Admin');
usuario.set('Lucas','User');
usuario.set('Edson','Admin');

console.log(getAdmin(usuarios));
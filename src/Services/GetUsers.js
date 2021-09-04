import { usersEndPoint } from "../Shared/endpoints";


export const getUsers = () => {
    return fetch(usersEndPoint)
    .then(res => res.json())    
    .then(users => {
        console.log(users)
        return users
    });
}


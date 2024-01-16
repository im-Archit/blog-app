import { myAxios } from "./helper";


export const signUp =(user)=>{

    return myAxios.post('/auth/register', user).then((response)=> response.json())


}

export const loginUser =(loginDetail) => {
    return myAxios.post('/auth/register', loginDetail).then((response)=> response.data)
}






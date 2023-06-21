import axios from 'axios';
import { toast } from 'react-hot-toast';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const deleteToken = () => {
    delete instance.defaults.headers.common['Authorization']
}

export const setNewUser = async newUser => {
    try {
        const {data} = await instance.post('/users/signup', newUser);
        console.log(data)
        toast.success(`Register ${newUser.name}`)
        return data;
    } catch (error) {
        throw toast.error('Please enter your name, email and password');
    }
};

export const loginUser = async user => {
    try {
        const {data} = await instance.post("/users/login", user);
        console.log(data)
        setToken(`Bearer ${data.token}`)
        toast.success(`Login ${data.user.name}`)
        return data;
    } catch (error) {
        console.error(error);
        throw toast.error('Please enter your email and password');
    }
}

export const getProfile = async () =>{
    const {data} = await instance.get('/users/current')
    return data
}

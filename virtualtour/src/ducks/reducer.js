const initialState ={
    id: '',
    fullname: '',
    username: '',
    email:'',
    phonenumber: '',
    url: ''
}

const UPDATE_USER = 'UPDATE_USER';

//action builder 
export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer (state = initialState, action) {
    const { type, payload } = action; 
    switch(type){
        case UPDATE_USER:
            const {id, fullname, username, } = payload;
            return {...state, id, fullname, username};
        default:
            return state;
    }
}
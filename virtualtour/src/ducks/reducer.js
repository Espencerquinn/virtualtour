const initialState ={
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email:'',
    phonenumber: '',
    password: '',
    isUploading: 'false',
    url: 'http://via.placeholder.com/450x450'
}

const CREATE_USER = 'CREATE_USER';

//action builder 
export function registerUser(userObj){
    return {
        type: CREATE_USER,
        payload: userObj
    }
}

export default function reducer (state = initialState, action) {
    const { type, payload } = action; 
    switch(type){
        case CREATE_USER:
            const {firstname, lastname, username, email, phonenumber} = payload;
            return {...state, firstname, lastname, username, email, phonenumber};
        default:
            return state;
    }
}
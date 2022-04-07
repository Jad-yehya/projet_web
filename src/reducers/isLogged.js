const isLogged = (state= false, action) => {
    console.log(action.type)
    switch(action.type){
        case 'Login':
            return true;
        case 'Logout':
            return false;
        default:
            return state;
    }
}

export default isLogged;
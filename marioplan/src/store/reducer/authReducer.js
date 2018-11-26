const initState={
    authError:null
}
const authReducer =(state=initState,action) =>{
    switch (action.type){
        case'LOGIN_ERROR': return{
            ...state,
            authError:'Login Failed'
        }
        case 'LOGIN_SUCESS':return{
            ...state,
            authError:null
        }
        case 'SIGNOUT_SUCESS':{
            console.log("signout sucessfully")
        }
        default :
        return state;
    }
}
export default authReducer;
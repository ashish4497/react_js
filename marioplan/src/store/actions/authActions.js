export const signIn = (credentIals) =>{
    return (dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentIals.email,
            credentIals.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCESS"})
        }).catch((err)=>{dispatch({type:'LOGIN_ERROR',err})})
    }
}

export const signOut =()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCESS"});
        })
    }
}
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
export const signUp=(newUser)=>{
    return(dispatch,getstate,{getFirebase,getFirestore})=>{
        const firebase = getFirebase;
        const firestore = getFirestore

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastname: newUser.lastname,
                initials:newUser.firstName[0]+newUser.lastname[0]
            })
        }).then(()=>{
            dispatch({type:SIGNUP_SUCESS})
        }).catch(err=>{
            dispacth({type:SIGNUP_ERROR,err})
        })
    }
}
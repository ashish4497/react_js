const initState ={
    projects:[
        {id:1, title:"add new content", content:"add new project"},
        {id:2, title:"add new content", content:"add new project"}
    ]
}

const projectReducer =(state=initState,action) =>{
    switch(action.type) {
        case 'CREATE_PROJECT':
        console.log('create project',action.project);
        return state;
        case 'CREATE_PROJECT_ERROR' :
        console.log('create project error',action.err);
        return state;
        default:
        return state;
    }
}

export default projectReducer;
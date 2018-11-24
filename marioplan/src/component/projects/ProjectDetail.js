import React from 'react'
import{connect} from 'react-redux';
import{firebasestoreConnect} from 'react-redux-firebase';
import{compose} from 'redux'
 const ProjectDetail = (props) => {
     const id =props.match.params.id;
  return (
    <div className="container section project-detail">
        <div className="card z-depth-0">
            <div className="card-content">
            <span className="card-title">Project Title-{id}</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the net Ninja</div>
            <div>22 september, 2am</div>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps =(state, ownProps)=>{
    console.log(state)
    const id =  ownProps.match.params.id;
    const projects =state.firestore.data.projects;
    const project = projects ? projects[id] :null
    return {
        project:projects
    }   
}


export default compose(
    connect(mapStateToProps),
    firebasestoreConnect({collection:"projects"})
) (ProjectDetail);
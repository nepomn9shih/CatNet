import React from "react";

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
    }

activateEditMode = () => {
    //  this.state.editMode = true
    this.setState({editMode: true})
}

disactivateEditMode = () => {
    this.setState({editMode: false})
}

    render () {
        return <div className="card m-2 p-2 text-center bg-light">
        {!this.state.editMode && 
        <div className="pb-2">
            <span onDoubleClick={this.activateEditMode}>"{this.props.status}"</span>
        </div>}
        {this.state.editMode &&
        <div>
            <input autoFocus={true} onBlur={this.disactivateEditMode} value={this.props.status} />
        </div>}
    </div>
    }
    
}

export default ProfileStatus
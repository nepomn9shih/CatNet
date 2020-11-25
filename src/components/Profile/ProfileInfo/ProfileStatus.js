import React from "react";

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

activateEditMode = () => {
    //  this.state.editMode = true
    this.setState({editMode: true})
}

disactivateEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
}

onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value})
}

componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
        this.setState({status: this.props.status})
    }  
}

    render () {
        return <div className="card m-2 p-2 text-center bg-light">
        {!this.state.editMode && 
        <div className="pb-2">
            <span onDoubleClick={this.activateEditMode}>"{this.props.status || "-----"}"</span>
        </div>}
        {this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disactivateEditMode} value={this.state.status} />
        </div>}
    </div>
    }
    
}

export default ProfileStatus
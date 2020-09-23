import React, {ChangeEvent} from "react";

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            ...this.state,
            status: e.currentTarget.value
        })

    }

  componentDidUpdate(prevProps: Readonly<StateType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
               ...this.state,
                status: this.props.status
            })
        }
  }

    render() {
        return (
            <div>
                {this.state.editMode ? <div>
                    <input autoFocus={true} onChange={this.onStatusChange} type="text" value={this.state.status} onBlur={this.deActivateMode.bind(this)}/>
                </div> : <div><span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span></div>
                }


            </div>
        )
    }
}

export default ProfileStatus
import React, { Component } from 'react';

class RowUser extends Component {
    checkPermission=()=>{
        if(this.props.data.permission===1){
            return "Admin"
        }
        else if(this.props.data.permission===2){
            return "Moderator"
        }
        else{
            return "Normal User"
        }
    }
    onEditUser=()=>{
        this.props.editUser();
        this.props.changeStatusEditForm();
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{this.checkPermission()}</td>
                <td>
                    <button className="btn btn-primary btn-xs" onClick={()=>this.onEditUser()}><span className="glyphicon glyphicon-pencil"></span></button>.
                    <button className="btn btn-danger btn-xs" onClick={()=>this.props.onDeleteUser()}><span className="glyphicon glyphicon-trash"></span></button>
                </td>
            </tr>
        );
    }
}

export default RowUser;
import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.editUserObj.id,
            txt_Name:this.props.editUserObj.name,
            txt_Phone:this.props.editUserObj.tel,
            txt_Role:this.props.editUserObj.permission
        }
    }
    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        })
    }
    onSaveDataEdit=(user)=>{
        this.props.changeStatusEditForm();
        var item={};
        item.id=this.state.id;
        item.name=this.state.txt_Name;
        item.tel=this.state.txt_Phone;
        item.permission=this.state.txt_Role;
        this.props.dataEditUser(item);
    }
    render() {
        console.log(this.state);
        return (
            <div className="col-sm-12" id="add-user">
                <form>
                <h4>Chỉnh sửa user</h4>
                <div className="form-group">
                    <input type="text" defaultValue={this.props.editUserObj.name} name="txt_Name" onChange={(e)=>this.onChange(e)} className="form-control my-input" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" defaultValue={this.props.editUserObj.tel} name="txt_Phone" onChange={(e)=>this.onChange(e)} className="form-control my-input" id="phone" placeholder="Phone"/>
                </div>
                <div className="form-group">   
                    <select defaultValue={this.props.editUserObj.permission} className="form-control" name="txt_Role" onChange={(e)=>this.onChange(e)}>
                        <option value="">Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                    </select>
                </div>
                <input type="reset" className="btn btn-primary" onClick={(item)=>this.onSaveDataEdit(this.state.user)} value="Sửa thông tin"/>
                </form>
            </div>   
        );
    }
}

export default EditUser;
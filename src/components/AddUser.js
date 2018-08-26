import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            txt_Name:"",
            txt_Phone:"",
            txt_Role:1
        }
    }
    
    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type==="checkbox"?target.checked:target.value;
        this.setState({
            [name]:value
        })
    }
    checkShowForm=()=>{
        if(this.props.showForm ===true){
            return(
            <div className="col-sm-4" id="add-user">
                <form>
                <h4>Thêm mới user vào hệ thống</h4>
                <div className="form-group">
                    <input type="text" name="txt_Name" onChange={(e)=>this.onChange(e)} className="form-control my-input" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" name="txt_Phone" onChange={(e)=>this.onChange(e)} className="form-control my-input" id="phone" placeholder="Phone"/>
                </div>
                <div className="form-group">   
                    <select className="form-control" name="txt_Role" onChange={(e)=>this.onChange(e)}>
                        <option value="">Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                    </select>
                </div>
                <input type="reset" className="btn btn-primary" onClick={(name,phone,role)=>this.props.addNewUser(this.state.txt_Name,this.state.txt_Phone,this.state.txt_Role)} value="Thêm mới"/>
                </form>
            </div>   
            )
        }
    }
    render() {
        return (
            <div>
                {this.checkShowForm()}
            </div> 
        );
    }
}

export default AddUser;
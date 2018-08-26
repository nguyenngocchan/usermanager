import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtSearch:""
        }
        
    }
    
    checkShowForm=()=>{
        if(this.props.showForm===false){
            return (
                <div className="btn btn-large btn-block btn-info" onClick={this.props.changeShowForm}>Thêm mới</div>
            )
        }
        else{
            return(
                <div className="btn btn-large btn-block btn-warning" onClick={this.props.changeShowForm}>Đóng lại</div>
            )
        }     
    }
    checkShowEditForm=()=>{
        if(this.props.statusEditForm===true){
            return <EditUser dataEditUser={(user)=>this.props.dataEditUser(user)} editUserObj={this.props.userEdit} changeStatusEditForm={()=>this.props.changeStatusEditForm()}></EditUser>
        }
    }
    changeValSearch=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type==="checkbox"?target.checked:target.value;
        this.setState({
            [name]:value
        })
        this.props.getTextSearch(this.state.txtSearch)
    }
    render() {
        return (
            <div id="search">
                <div className="row">
                    <div className="col-sm-6">
                        <div id="imaginary_container"> 
                            <div className="input-group stylish-input-group">
                                <input type="text" className="form-control" name='txtSearch' placeholder="Search" onChange={(e)=>this.changeValSearch(e)}/>
                                <span className="input-group-addon">
                                    <button type="submit" onClick={(txt)=>this.props.getTextSearch(this.state.txtSearch)}>
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>  
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.checkShowEditForm()}
                </div>
                <div className="row">
                    {this.checkShowForm()}
                </div>
            </div>
        );
    }
}

export default Search;
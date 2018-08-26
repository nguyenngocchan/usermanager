import React, { Component } from 'react';
import RowUser from './RowUser';
class ListUser extends Component {

    render() {
       var {data}=this.props;
       var element=data.map((val,key)=>{
           return <RowUser onDeleteUser={(id)=>this.props.onDeleteUser(val.id)}  changeStatusEditForm={()=>this.props.changeStatusEditForm()} editUser={(user)=>this.props.editUser(val)} data={val} key={key} stt={key}></RowUser>
       })
        return (
            <div className="col-sm-8" id="lisst-user">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Điện thoại</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                           {element}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUser;
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ListUser from './components/ListUser';
import AddUser from './components/AddUser';
import data from './components/data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            showForm:false,
            data:data,
            searchTxt:'',
            statusEditForm:false,
            userEdit:{}
        }
    }
    changShowForm=()=>{
        this.setState({
            showForm:!this.state.showForm
        })                  
    }
    changeStatusEditForm=()=>{
        this.setState({
            statusEditForm:!this.state.statusEditForm
        })
    }
    getTextSearch=(txt)=>{
        this.setState({
            searchTxt:txt
        })
    }
    addNewUser=(name,phone,role)=>{
        var item={};
        item.id=uuidv1();
        item.name=name;
        item.tel=phone;
        item.permission=role;
        var items=this.state.data;
        items.push(item);
        this.setState({
            data:items
        })
        console.log(this.state.data);
    }
    editUser=(user)=>{
        this.setState({
            userEdit:user
        })
    }
    dataEditUser=(user)=>{
        this.state.data.forEach((item,idx)=>{
            if(item.id===user.id){
                item.name=user.name;
                item.tel=user.tel;
                item.permission=user.permission;
            }
        })
        console.log(user);
    }
    findIdx=(arr,id)=>{
        var result=-1;
        if(arr.length>0){
            arr.forEach((item,idx)=>{
                if(item.id===id){
                    result=idx;
                }
            })
        }
        return result;
    }
    onDeleteUser=(id)=>{
        var arr=this.state.data;
        var idx=this.findIdx(arr,id)
        console.log(idx,arr);
        arr.splice(idx,1);
        console.log(idx,arr);
        this.setState({
            data:arr
        })
    }
    
  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
        if(item.name.indexOf(this.state.searchTxt)!==-1){
            ketqua.push(item);
        }
    })
    return (
        <div className="App">
            <div className="container">
                <Header></Header>
                <Search changeShowForm={()=>this.changShowForm()} showForm={this.state.showForm} getTextSearch={(txt)=>this.getTextSearch(txt)} statusEditForm={this.state.statusEditForm} changeStatusEditForm={()=>this.changeStatusEditForm()} userEdit={this.state.userEdit} dataEditUser={(user)=>this.dataEditUser(user)}></Search>
                <div className="row">
                    <ListUser data={ketqua} editUser={(user)=>this.editUser(user)} changeStatusEditForm={()=>this.changeStatusEditForm()} onDeleteUser={(id)=>this.onDeleteUser(id)}></ListUser>
                    <AddUser showForm={this.state.showForm} addNewUser={(name,phone,role)=>this.addNewUser(name,phone,role)}></AddUser>                 
                </div>
            </div>
        </div>
    );
  }
}

export default App;

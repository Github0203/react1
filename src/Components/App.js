import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';

const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm : false,
      // data : DataUser,
      data : [],
      searchText : '',
      editUserStatus : false,
      userEditObject : {}
    }
  }

  

  
  componentWillMount() {
    // kiem tra xem co localStorage chua
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data : temp
      });
    }
  }
  
  
  
  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    // console.log('da ket noi ok ok');
    // console.log(user);
    this.setState({
      userEditObject : user
    });
  }
  getTextSearch = (dl) =>{
    this.setState(
      {
        searchText : dl
      }
    );
        
  }
  doiTrangThai  = () => {
    this.setState(
      {
        hienthiForm : !this.state.hienthiForm
      }
    );
  }
  getNewUserDate = (name, tel, Permisson) => {
    var itemp = {};
    itemp.id = uuidv4();
    itemp.name = name;
    itemp.tel = tel;
    itemp.Permisson = Permisson;
    var itemps = this.state.data;
    itemps.push(itemp);
    this.setState({
      data : itemps     
    });
    localStorage.setItem('userData', JSON.stringify(itemps));
    // console.log(this.state.data);
  }

  getEditUserInfoApp = (info) => {
    // console.log('thong tin da sua xong ' + info.tel);
    this.state.data.forEach((value, key) => {
      //  console.log(value.permisson);
      if(value.id === info.id){ 
        value.name = info.name;
        value.tel = info.tel;
        value.permisson = info.permisson;
        key = {key};
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    }


    deleteUser = (idUser) => {
      // console.log(idUser);
      var tempData = this.state.data;
      tempData = tempData.filter(item => item.id !== idUser);
      // console.log(tempData);
      this.setState({
        data : tempData
      });
      // this.state.data.forEach((value, key) => {
      //   if(value.id === idUser){
      //     console.log(key);
      //   }
      // })

      localStorage.setItem('userData', JSON.stringify(tempData));
    }


  render()  
  {
    // localStorage.setItem('userData', JSON.stringify(DataUser));
    var ketqua = [];
  this.state.data.forEach((item) => {
    if(item.name.indexOf(this.state.searchText) !== -1){
      ketqua.push(item);
    }
  })
  // console.log(ketqua);
      // console.log(this.state.data)
  return (
    <div>
     <Header/>
     <div className="searchForm">
        <div className="container">
            <div className="row">
              <SearchForm 
              getEditUserInfoApp={(info) => this.getEditUserInfoApp(info)}
              userEditObject = {this.state.userEditObject}
              editUserStatus= {this.state.editUserStatus}
              changeEditUserStatus={() => this.changeEditUserStatus()}
              checkConnectProps={(dl) => this.getTextSearch(dl)}
              ketnoi={() => this.doiTrangThai()} hienthiForm={this.state.hienthiForm}/>              
              <hr/>
              <TableData
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              changeEditUserStatus={() => this.changeEditUserStatus()}
              editFun={(user) => this.editUser(user)} dataUserProps={ketqua}/>
              <AddUser add={(name, tel, Permisson) => this.getNewUserDate(name, tel, Permisson)} hienthiForm={this.state.hienthiForm}/>
            </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;

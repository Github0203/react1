import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tempValue : '',
       userObj : {}
    }
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj : info
    });
    this.props.getEditUserInfoApp(info);
  }
  
  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      tempValue : event.target.value
    });
    this.props.checkConnectProps(this.state.tempValue);
  }
  hienthiNut = () =>{
    if(this.props.hienthiForm === true){
      return (
        <div className="btn btn-block btn-outline-secondary mt-2" onClick={() => this.props.ketnoi() }>Đóng lại</div>
      )
    }
    else{
      return (
<div className="btn btn-block btn-outline-info mt-2" onClick={() => this.props.ketnoi() }>Thêm mới
    </div>  
      )
    }
  }
  isShowEditForm = () => {
    if(this.props.editUserStatus === true){
      return <EditUser
      getUserEditInfo = {(info) => this.getUserEditInfo(info)}
      userEditObject = {this.props.userEditObject}
      changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
    }
  }

    render() {
        return (
            <div className="col-12">
              <div className="row">
                        <div className="col">
                  {this.isShowEditForm()}  
                             
            </div>
              </div>
  <div className="form-group">
    <div className="btn-group">
      <input type="text" onChange={(event) => this.isChange(event)} className="form-control"
       placeholder="Nhập tên cần tìm"  />
      <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>    
    </div>
      {this.hienthiNut()}
  </div>
  <hr/>
</div>

        );
    }
}

export default SearchForm;
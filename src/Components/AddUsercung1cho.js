import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tranghthaiChinhsua : false
    }
  }
  thaydoiTrangThai = () =>{
    this.setState(
      {
        tranghthaiChinhsua : !this.state.tranghthaiChinhsua
      }
    );
  }
  hienthiNut = () => {
    if(this.state.tranghthaiChinhsua === true){
      return <div onClick={() => this.thaydoiTrangThai()} className="btn btn-block btn-outline-secondary">Đóng lại</div>
    }
    else{
      return <div onClick={() => this.thaydoiTrangThai()} className="btn btn-block btn-outline-info">Thêm mới</div>
    }
  }
  hienthiForm = () => {
    if(this.state.tranghthaiChinhsua === true){
      return (
        <div className="card border-primary mb-3 mt-2">
    <div className="card-header">Thêm mới User vào hệ thống</div>
    <div className="card-body text-primary">
      <div className="form-group">
        <input type="text" className="form-control"placeholder="Tên User" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Điện thoại" />
      </div>
      <div className="form-group">
        <select className="custom-select" aria-label="Default select example">
          <option selected>Phân quyền</option>
          <option value={1}>Admin</option>
          <option value={2}>Nhân viên</option>
          <option value={3}>Khách</option>
        </select>
      </div>
      <div className="form-group">
        <div className="btn btn-block btn-primary">
          Thêm mới
        </div>
      </div>
    </div>                              
  </div> 
      )
    }
  }
    render() {
        return (
            <div className="col-3">
            {this.hienthiNut()}
            {this.hienthiForm()}
              
  
</div>

        );
    }
}

export default AddUser;
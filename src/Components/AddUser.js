import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : "",
      name : "",
      tel : "",
      Permisson : ""
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    });
    // pakage to item
    // var item ={};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permisson = this.state.Permisson;
    // console.log(item);
    // console.log (name);
    // console.log (value);
  }
  kiemtraTrangThai = () => {
    if(this.props.hienthiForm === true){
      return(
        <div className="col-12">
        {/* {this.hienthiNut()} */}
       <form method="post">
        <div className="card text-white bg-warning border-primary mb-3 mt-2">
    <div className="card-header text-center">Edit Info</div>
    <div className="card-body text-primary">
      <div className="form-group">
        <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control"placeholder="Tên User" />
      </div>
      <div className="form-group">
        <input type="text"name="tel"  onChange={(event) => this.isChange(event)} className="form-control" placeholder="Điện thoại" />
      </div>
      <div className="form-group">
        <select className="custom-select"name="Permisson"  onChange={(event) => this.isChange(event)} >
          <option value>Phân quyền</option>
          <option value={1}>Admin</option>
          <option value={2}>Nhân viên</option>
          <option value={3}>Khách</option>
        </select>
      </div>
      <div className="form-group">
        <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, Permisson) => this.props.add(
          this.state.name, this.state.tel, this.state.Permisson 
        )} value= " Thêm mới" />
      </div>
    </div>                              
  </div> 
  </form>
  </div>
      )
    }
  }
    render() {
      // console.log(this.state);
      // console.log(this.props.hienthiForm);
        return (
        
         
  
<div>
{this.kiemtraTrangThai()}

</div>

        );
    }
}

export default AddUser;
import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick = (idUser) =>{
    // console.log(idUser)
    this.props.deleteUser(idUser)
  }
  mappingDataUser= () => 
    this.props.dataUserProps.map((value, key)=>
    (
      <TableDataRow
      deleteButtonClick = {
        (idUser) => this.deleteButtonClick(idUser)
      }
      changeEditUserStatus={() => this.props.changeEditUserStatus()}
      editFunClick ={(user) => this.props.editFun(value)}
       key={key}
        sTT={key}
        userName={value.name} 
        telP={value.tel} 
        perM={value.permisson}
        id = {value.id}
        />
    ))
  
    render() {
      // console.log(this.props.dataUserProps);?
        return (
            <div className="col">
  <table className="table table-striped table-inverse table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>TÊN</th>
        <th>ĐIỆN THOẠI</th>
        <th>QUYỀN</th>  
        <th>THAO TÁC</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;
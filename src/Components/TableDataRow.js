import React, { Component } from 'react';

class TableDataRow extends Component {
    permissonShow = () =>{
        if(this.props.perM ===1){
            return "Admin";
        }
        else{
            if(this.props.perM === 2){
                return "Moderato";
            }
            else{return "Nomal User"};
        }
    }

    editClick = () =>{
      this.props.editFunClick();
      this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser) => {
      // console.log('id cua thuoc tinh lat duoc la ' + idUser);
      this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
            <td>{this.props.sTT+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.telP}</td>
            <td>{this.permissonShow()}</td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua" onClick={() => this.editClick()}>
                  <i className="fa fa-edit">Sửa</i>
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-delete" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>Xóa</i>
                </div>
              </div>                                        
            </td>
          </tr>
        );
    }
}

export default TableDataRow;
import React from 'react'
import Table from 'react-bootstrap/Table';
export default function B10() {
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/01/1990</td>
          <td>nguyenvana@example.com</td>
          <td>Hà Nội</td>
          <td style={{display:'flex', gap:'10px'}}>
            <button style={{border:'none',backgroundColor:'orange',borderRadius:'5px'}}>Sửa</button>
            <button style={{border:'none',backgroundColor:'red',borderRadius:'5px'}}>Xóa</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Trần Thị B</td>
          <td>Nữ</td>
          <td>02/02/1995</td>
          <td>tranthib@example.com</td>
          <td>Hà Nội</td>
          <td style={{display:'flex', gap:'10px'}}>
            <button style={{border:'none',backgroundColor:'orange',borderRadius:'5px'}}>Sửa</button>
            <button style={{border:'none',backgroundColor:'red',borderRadius:'5px'}}>Xóa</button>
          </td>
          </tr>
        <tr>
          <td>3</td>
          <td>Phạm Văn C</td>
          <td>Nam</td>
          <td>03/03/1992</td>
          <td>phamvanc@example.com</td>
          <td>Hà Nội</td>
          <td style={{display:'flex', gap:'10px'}}>
            <button style={{border:'none',backgroundColor:'orange',borderRadius:'5px'}}>Sửa</button>
            <button style={{border:'none',backgroundColor:'red',borderRadius:'5px'}}>Xóa</button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lê Thị D</td>
          <td>Nữ</td>
          <td>04/04/1993</td>
          <td>lethid@example.com</td>
          <td>Hà Nội</td>
          <td style={{display:'flex', gap:'10px'}}>
            <button style={{border:'none',backgroundColor:'orange',borderRadius:'5px'}}>Sửa</button>
            <button style={{border:'none',backgroundColor:'red',borderRadius:'5px'}}>Xóa</button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Nguyễn Văn E</td>
          <td>Nam</td>
          <td>05/05/1991</td>
          <td>nguyenvane@example.com</td>
          <td>Hà Nội</td>
          <td style={{display:'flex', gap:'10px'}}>
            <button style={{border:'none',backgroundColor:'orange',borderRadius:'5px'}}>Sửa</button>
            <button style={{border:'none',backgroundColor:'red',borderRadius:'5px'}}>Xóa</button>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

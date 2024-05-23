import Alert from 'react-bootstrap/Alert';

export default function B5() {
  return (
    <div style={{width:'300px'}}>
        <Alert variant='success' dismissible> Thêm tài khoản thành công </Alert>
        <Alert variant='danger' dismissible> Thêm mới tài khoản thất bại </Alert>
        <Alert variant='warning' dismissible> Tên không được để trống </Alert>
    </div>
  )
}

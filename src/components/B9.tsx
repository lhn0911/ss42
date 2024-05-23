import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function B9() {
  return (
    <div style={{width:'400px'}}>
        <h1>Đăng kí tài khoản</h1>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridFullname">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control placeholder="Ví dụ: Nguyễn Văn A" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Thành phố</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Hà Nội</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Quận</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Thanh Xuân</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Mã bưu điện</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" style={{display:'flex',justifyContent:'center',width:'200px',marginLeft:'100px'}}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

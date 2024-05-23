import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function B3() {
  return (
    <div style={{display:'flex',gap:'10px'}}>
        <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://serviceapple.vn/upload/5.2018/MacBook%20Air%202018.jpg" />
      <Card.Body>
        <Card.Title>MacBook Air 2018</Card.Title>
        <Card.Text>
          The reason i am selling the machine is because it is to much power for what i need.
        </Card.Text>
        <Button variant="primary">Xem chi tiết</Button>
        <p style={{marginTop:'-30px',marginLeft:'120px'}}>30.000.000đ</p>
      </Card.Body>
    </Card>
    </div>
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.rtings.com/assets/products/0F3KAC3z/apple-macbook-pro-16-2019/design-medium.jpg?format=auto" style={{height:'190.93px'}}/>
      <Card.Body>
        <Card.Title>MacBook Pro 2019</Card.Title>
        <Card.Text>
          The reason i am selling the machine is because it is to much power for what i need.
        </Card.Text>
        <Button variant="primary">Xem chi tiết</Button>
        <p style={{marginTop:'-30px',marginLeft:'120px'}}>30.000.000đ</p>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

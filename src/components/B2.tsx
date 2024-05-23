import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
 
 export default function B2() {
   return (
     <div style={{width:"300px"}}>
        <InputGroup size="lg">
        
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Input cỡ lớn'
        />
      </InputGroup>
      <br /><br />
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Input cỡ trung bình'
        />
      </InputGroup>
      <br />

      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Input cỡ nhỏ'
        />
      </InputGroup>
      <br />
     </div>
   )
 }
 
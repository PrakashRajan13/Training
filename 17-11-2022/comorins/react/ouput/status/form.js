
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

export default function Status({getStatus,new_message}){
    
    return(<>
        <h1 className='text-center mt-5'>Status</h1>
        <InputGroup className="mt-5">
        <Form.Control
          placeholder="Status"
          onChange={e=>getStatus(e)}
          aria-describedby="basic-addon2"
        />
        <Button  variant="outline-primary" id="button-addon2" onClick={()=>new_message()}>
          Button
        </Button>
      </InputGroup>
    </>)
}

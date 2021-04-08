import React ,{useState} from 'react'
import {Modal,Button,Form,Col} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
const AddModal = ({show,handleClose,addMovie}) => 

{
    const [Newmovie,setNewMovie] = useState({
        title:"",
        main_img:"",
        genre:"",
         rate:1
    })
    const handleChange=(e)=>{ setNewMovie({...Newmovie, [e.target.name]:e.target.value})
}
    const onStarClick=(nextValue, prevValue, name)=> {  setNewMovie({...Newmovie, rate:nextValue}) 
  }
    return (
        <div>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
​
  <Form.Group controlId="formGridAddress1">
    <Form.Label>title</Form.Label>
    <Form.Control placeholder="title" name="title" onChange={handleChange}/>
  </Form.Group>
​
  <Form.Group controlId="formGridAddress2">
    <Form.Label>image url</Form.Label>
    <Form.Control placeholder="image url" name="main_img" onChange={handleChange}/>
  </Form.Group>
​
  <Form.Row>
  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={Newmovie.rate}
          onStarClick={onStarClick}
        />
​
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Control as="select" defaultValue="Genre" name="genre" onChange={handleChange}>
        <option>action</option>
        <option>drama</option>
      </Form.Control>
    </Form.Group>
​
  
  </Form.Row>
​
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addMovie(Newmovie) 
        handleClose()}}>
            add movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default AddModal;

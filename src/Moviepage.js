import "./Moviepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import { Button, Modal} from 'react-bootstrap';

function Moviepage({key,id,name, language,genres,officialSite,rating,image, summary}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const Basket = () => {
        
    }
    return (
        <div key={key} className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{name}</p>
                <p className="checkoutProduct__price">
                    <strong>{genres}</strong>
                    <strong>{language}</strong>
                </p>
                <p>
                    <a href={officialSite} />
                </p>
                <p>{summary}</p>
                <div className="checkoutProduct__rating">
                    {Array(Math.floor(rating))
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                
                <Button variant="primary" onClick={handleShow}>
                    Book your Movie
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Booking for Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Movie Name</label>
                            <input type="email" value={name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group mt-1">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group mt-1">
                            <label for="name1">Name of person</label>
                            <input type="name" class="form-control" id="name1" placeholder="text"/>
                        </div>
                        <div class="form-group mt-1">
                            <label for="name1">Which seat you want to book</label>
                            <input type="name" class="form-control" id="name1" placeholder="text"/>
                        </div>
                        
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
            
            <br/>
        </div> 
       
    )
}

export default Moviepage

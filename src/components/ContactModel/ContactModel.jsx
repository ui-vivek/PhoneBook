import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import './contactmodel.scss';

function ContactModel({
  activeContact,
  isEdit,
  show,
  onHide,
  title,
  addContact,
  editContact,
}) {
  const initialContact = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    Role: '',
    address: '',
  };
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    isEdit ? setContact(activeContact) : setContact(initialContact);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContact, isEdit]);

  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      isEdit ? editContact(contact) : addContact(contact);
      setContact(initialContact);
      onHide(false);
      setValidated(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustomFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                pattern='^\S[A-Za-z\s]{1,32}\S$'
                placeholder='Enter First Name'
                value={contact.fname}
                onChange={(e) =>
                  setContact({ ...contact, fname: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustomLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                pattern='^\S[A-Za-z\s]{1,32}\S$'
                placeholder='Enter last name'
                value={contact.lname}
                onChange={(e) =>
                  setContact({ ...contact, lname: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustomEmail'>
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  placeholder='Enter Email'
                  aria-describedby='inputGroupPrepend'
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationPhoneNumber'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Enter Phone Number'
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type='text'
                pattern='^\S[A-Za-z1-9\s.]{1,100}\S$'
                placeholder='Enter Company Name'
                value={contact.company}
                onChange={(e) =>
                  setContact({ ...contact, company: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid compane name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom05'>
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label='Default select example'
                value={contact.Role}
                onChange={(e) =>
                  setContact({ ...contact, Role: e.target.value })
                }
                required
              >
                <option disabled value=''>
                  Select Your Role...
                </option>
                <option value='Chief Executive Officer'>
                  Chief Executive Officer
                </option>
                <option value='Chief Operating Officer'>
                  Chief Operating Officer
                </option>
                <option value='Chief Financial Officer'>
                  Chief Financial Officer
                </option>
                <option value='Executive Assistant'>Executive Assistant</option>
                <option value='President'>President</option>
                <option value='Vice President'>Vice President</option>
                <option value='Product Manager'>Product Manager</option>
                <option value='Purchasing Manager'>Purchasing Manager</option>
                <option value='Project Manager'>Project Manager</option>
                <option value='Finance Manager'>Finance Manager</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                Please select a valid role.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='12' controlId='validationAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter address here'
                rows={5}
                value={contact.address}
                onChange={(e) =>
                  setContact({ ...contact, address: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Modal.Footer>
            <Button variant='secondary' onClick={onHide}>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModel;

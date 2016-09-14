import React, {Component} from 'react';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendFormData } from '../actions/index';


class ModalForm extends Component {
  constructor(props) {
    super(props);
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.saveAndCloseModal = this.saveAndCloseModal.bind(this);
    this.validateFormData = this.validateFormData.bind(this);

    this.state = { show: false,
                   firstName: '',
                   lastName: '',
                   dob: '',
                   phoneNumber: '',
                   email: '',
                   notes: ''
                 };
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  validateFormData(formData) {
    if(!formData.firstName || !formData.lastName || !formData.dob || !formData.phoneNumber || !formData.notes || !formData.email) {
      alert("Please fill in the empty form fields");
      return false;
    }
    else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(formData.email)){
        alert("Incorrect Email! Please fill in the email field correctly");
        return false;
      }
      else {
        return true;
      }
    }

  }

  saveAndCloseModal() {
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      notes: this.state.notes
    };
    if(this.validateFormData(formData)) {
      this.props.sendFormData(formData);

      this.setState({
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        notes: '',
        show: false
      });
    }
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" className="add-contact" onClick={this.showModal}><i className="fa fa-plus-circle btn-fa"></i>
          Add Contact
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton className="modal-header">
            <Modal.Title id="contained-modal-title-lg">Score Keeper</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="first-name">First Name</label>
                  <input onChange={event => this.setState({firstName: event.target.value})} type="text" className="form-control" value={this.state.firstName} />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input onChange={event => this.setState({lastName: event.target.value})} type="text" className="form-control" value={this.state.lastName} />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <input onChange={event => this.setState({dob: event.target.value})} type="text" className="form-control" value={this.state.dob} />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input onChange={event => this.setState({phoneNumber: event.target.value})} type="text" className="form-control" value={this.state.phoneNumber} />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                  <label htmlFor="email">Email</label>
                  <input onChange={event => this.setState({email: event.target.value})} type="text" className="form-control" value={this.state.email} />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xs-12 col-sm-12">
                  <label htmlFor="notes">Notes</label>
                  <textArea onChange={event => this.setState({notes: event.target.value})} type="text"  cols="40" rows="2" className="form-control" value={this.state.notes} />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" onClick={this.saveAndCloseModal}>Save</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ sendFormData }, dispatch);
 }

export default connect(null, mapDispatchToProps)(ModalForm);
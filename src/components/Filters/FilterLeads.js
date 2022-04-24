import React from "react";
import {Form,  FormGroup} from "react-bootstrap";

export const FilterLeads = () => {
  return (
    <div className="py-3">
        <Form.Group className="row">
          <div className="col-md-2">
            <Form.Label>Status</Form.Label>
            <Form.Select >
                <option>Select</option>
            </Form.Select>
          </div>
          <div className="col-md-2">
            <Form.Label>Dealership</Form.Label>
            <Form.Select >
                <option>Select</option>
            </Form.Select>
          </div>
          <div className="col-md-2">
            <Form.Label>Group</Form.Label>
            <Form.Select >
                <option>Select</option>
            </Form.Select>
          </div>
          <div className="col-md-2">
            <Form.Label>Owner</Form.Label>
            <Form.Select >
                <option>Select</option>
            </Form.Select>
          </div>
          <div className="col-md-2">
            <Form.Label>Status</Form.Label>
            <Form.Select >
                <option>Select</option>
            </Form.Select>
          </div>
          <div className="col-md-2 row align-items-center">
            <label>Date</label>
            <div className="date-items col-md-6">
              <input type="date" className="form-control form-control-color" id="dateInput1" />
            </div>
            <div className="date-items col-md-6">
              <input type="date" className="form-control form-control-color" id="dateInput2" />
            </div>
          </div>
        </Form.Group>
    </div>
  );
};

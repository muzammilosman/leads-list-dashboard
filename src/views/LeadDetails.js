import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export const LeadDetails = () => {
  return (
    <div className="lead-details">
      <div className="lead-details-header">
        <Card className="row mx-1">
          <Card.Header>
            <Card.Title>
              <h3>Status</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <p className="text-muted">Active</p>
          </Card.Body>
        </Card>
      </div>
      <div className="lead-details-body row">
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title as="h4">Notes</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <label>About Me</label>
                  <Form.Control
                    cols="80"
                    defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                    placeholder="Here can be your description"
                    rows="4"
                    as="textarea"
                  ></Form.Control>
                  <div className="my-2 row">
                    <div className="col-md-6">
                      <Button variant="primary" className="mx-2" type="submit">
                        Submit
                      </Button>
                    </div>
                    <div className="col-md-6">
                      <Button variant="primary" className="mx-2">
                        Submit & Send
                      </Button>
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title>RO</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a summary of RO</p>
            </Card.Body>
          </Card>
        </div>
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title>Car Fare</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a summary of Car Fare</p>
            </Card.Body>
          </Card>
        </div>
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title>Activity Log</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="activity-list">
                <h5>Created</h5>
                <p className="text-muted">22 Feb 2022</p>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title>Vehicle Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Summary of vehicle details</p>
            </Card.Body>
          </Card>
        </div>
        <div className="details-section col-md-4">
          <Card className="mx-1 card-sec">
            <Card.Header>
              <Card.Title>Sold vehicle details</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Summary of sold vehicle details</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="toggle-leads">
          <div className="d-flex justify-content-center">
              <div className="toggle-btn mx-1">
                  <Button>
                      Previous
                  </Button>
              </div>
              <div className="toggle-btn mx-1">
                  <Button>
                      Next
                  </Button>
              </div>
          </div>
      </div>
    </div>
  );
};

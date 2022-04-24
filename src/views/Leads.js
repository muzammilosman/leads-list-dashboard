import { FilterLeads } from "components/Filters/FilterLeads";
import React from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

const Leads = () => {
  return (
    <>
      <Container fluid>
        <FilterLeads></FilterLeads>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Leads</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Customer Name</th>
                      <th className="border-0">Dealership</th>
                      <th className="border-0">Mobile</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Hyundai</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Hyundai</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Tata Motors</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>TVS</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Toyota</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Volkswagen</td>
                      <td>+1 098909090</td>
                      <td>abc@example.com</td>
                      <td>active</td>
                      <td>abc@example.com</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Leads
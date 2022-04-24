import React from "react";
import { FilterLeads } from "components/Filters/FilterLeads";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


export const LeadList = () => {
  return (
    <Container fluid>
      <FilterLeads></FilterLeads>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Leads</Card.Title>
              <p className="card-category">Click on a lead to view the details</p>
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
                    <td>
                        <NavLink to={'/admin/leads/details'}>
                                Dakota Rice
                        </NavLink>
                    </td>
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
  );
};

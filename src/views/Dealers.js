import { SearchByText } from "components/Filters/SearchByText";
import React from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

const Dealers = () => {
  return (
    <>
      <Container fluid>
        <SearchByText></SearchByText>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Dealers</Card.Title>
                <p className="card-category">
                  This table displays the dealers against their group
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Dealership</th>
                      <th className="border-0">Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hyundai</td>
                      <td>Dakota Rice</td>
                    </tr>
                    <tr>
                      <td>Suzuki</td>
                      <td>Minerva Hooper</td>
                    </tr>
                    <tr>
                      <td>Toyota</td>
                      <td>Sage Rodriguez</td>
                    </tr>
                    <tr>
                      <td>Tata Motors</td>
                      <td>Philip Chaney</td>
                    </tr>
                    <tr>
                      <td>Royal Enfield</td>
                      <td>Doris Greene</td>
                    </tr>
                    <tr>
                      <td>Volkswagen</td>
                      <td>Mason Porter</td>
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

export default Dealers
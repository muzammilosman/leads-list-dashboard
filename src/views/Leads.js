import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import { LeadDetails } from "./LeadDetails";
import { LeadList } from "./LeadList";

const Leads = () => {
  return (
    <>
    <Container fluid>
        <Routes>
            <Route path="/" element={<LeadList />} />
            <Route path="/details/" element={<LeadDetails />} />
          </Routes>
    </Container>
    </>
  );
}

export default Leads
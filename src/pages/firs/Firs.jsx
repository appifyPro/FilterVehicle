import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import firData from "../../../src/FirsData.json";
import { Form, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

const Firs = () => {
  const [firs, setFirs] = useState(firData.firData);
  const [filters, setFilters] = useState({
    name: "",
    registrationNo: "",
    chassisNo: "",
    engineNo: "",
    incidentType: "",
    cnicNo: "",
    district: "",
    division: "",
    policeStation: "",
    FIRNo: "",
    linkStatus: "",
    vehicle: "",
    phone: "",
    dateTo: "",
    dateFrom: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(5);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);
  };
  const filterFirs = (fir) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      return String(fir[key])
        .toLowerCase()
        .includes(filters[key].toLowerCase());
    });
  };

  const filteredFirs = firs.filter(filterFirs);
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentFirs = filteredFirs.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredFirs.length / vehiclesPerPage);

  const handleFormReset = () => {
    setFilters({
      name: "",
      registrationNo: "",
      chassisNo: "",
      engineNo: "",
      incidentType: "",
      cnicNo: "",
      district: "",
      division: "",
      policeStation: "",
      FIRNo: "",
      linkStatus: "",
      vehicle: "",
      phone: "",
      dateTo: "",
      dateFrom: "",
    });
    setCurrentPage(1);
  };
  return (
    <div className="mt-4 container-fluid">
      <h1 className="mb-4">FIRs Records</h1>
      <div className="mb-2">
        <Row className="mb-4 ">
          <Col>
            <Form.Label>Applicant Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mr. XYZ"
              name="name"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Label>Registration No</Form.Label>
            <Form.Control
              type="text"
              placeholder="ABC-16A-1234"
              name="registrationNo"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Group controlId="incidentType">
              <Form.Label>Incident Type</Form.Label>
              <Form.Select
                name="incidentType"
                value={filters.incidentType}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="robbery">Robbery</option>
                <option value="accident">Accident</option>
                <option value="theft">Theft</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4 ">
          <Col>
            <Form.Label>Chassis No</Form.Label>
            <Form.Control
              type="text"
              placeholder="1HGCM82633J965874"
              name="chassisNo"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Label>Engine No</Form.Label>
            <Form.Control
              type="text"
              placeholder="PJ10879U108798P"
              name="engineNo"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Label>CNIC No</Form.Label>
            <Form.Control
              type="text"
              placeholder="3310045678901"
              name="cnicNo"
              onChange={handleFilterChange}
            />
          </Col>
        </Row>
        <Row className="mb-4 ">
          <Col>
            <Form.Group controlId="district">
              <Form.Label>District</Form.Label>
              <Form.Select
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="multan">Multan</option>
                <option value="lahore">Lahore</option>
                <option value="sahiwal">Sahiwal</option>
                <option value="gujrat">Gujrat</option>
                <option value="islamabad">Islamabad</option>
                <option value="karachi">Karachi</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="division">
              <Form.Label>Division</Form.Label>
              <Form.Select
                name="division"
                value={filters.division}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="multan">Multan</option>
                <option value="lahore">Lahore</option>
                <option value="sahiwal">Sahiwal</option>
                <option value="gujrat">Gujrat</option>
                <option value="islamabad">Islamabad</option>
                <option value="karachi">Karachi</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="policeStation">
              <Form.Label>Police Station</Form.Label>
              <Form.Select
                name="policeStation"
                value={filters.policeStation}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="f-10">F-10</option>
                <option value="Saddar">Saddar</option>
                <option value="model-Town">Model Town</option>
                <option value="cantt">Cantt</option>
                <option value="gulshan-e-Ravi">Gulshan-e-Ravi</option>
                <option value="garden">Garden</option>
                <option value="gulberg">Gulberg</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Form.Label>FIR No</Form.Label>
            <Form.Control
              type="text"
              placeholder="2468013"
              name="FIRNo"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Group controlId="linkStatus">
              <Form.Label>Link Status</Form.Label>
              <Form.Select
                name="linkStatus"
                value={filters.linkStatus}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="vehicle">
              <Form.Label>Vehicle</Form.Label>
              <Form.Select
                name="vehicle"
                value={filters.vehicle}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="trailer">Trailer</option>
                <option value="bus">Bus</option>
                <option value="van">Van</option>
                <option value="coaster">Coaster</option>
                <option value="tractor">Tractor</option>
                <option value="pickup">Pickup</option>
                <option value="truck">Truck</option>
                <option value="rickshaw">Rickshaw</option>
                <option value="carryDabba">Carry Dabba</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-center">
          <button
            onClick={handleFormReset}
            type="button"
            className=" btn btn-primary btn-lg btn-radius"
          >
            Reset
          </button>
        </div>
      </div>
      <Table responsive bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Registration # </th>
            <th>FIR #</th>
            <th>Chassis #</th>
            <th>Engine #</th>
            <th>Date</th>
            <th>Police Station</th>
            <th>District</th>
            <th>Name</th>
            <th>Cnic #</th>
            <th>Phone #</th>
            <th>Vehicle</th>
          </tr>
        </thead>
        <tbody>
          {currentFirs.map((vehicle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{vehicle.registrationNo}</td>
              <td>{vehicle.FIRNo}</td>
              <td>{vehicle.chassisNo}</td>
              <td>{vehicle.engineNo}</td>
              <td>{vehicle.dateTo}</td>
              <td>{vehicle.policeStation}</td>
              <td>{vehicle.district}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.cnicNo}</td>
              <td>{vehicle.phone}</td>
              <td>{vehicle.vehicle}</td>
            </tr>
          ))}
          {/* {filteredFirs.map((vehicle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{vehicle.registrationNo}</td>
              <td>{vehicle.FIRNo}</td>
              <td>{vehicle.chassisNo}</td>
              <td>{vehicle.engineNo}</td>
              <td>{vehicle.dateTo}</td>
              <td>{vehicle.policeStation}</td>
              <td>{vehicle.district}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.cnicNo}</td>
              <td>{vehicle.phone}</td>
              <td>{vehicle.vehicle}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
      <Pagination className="justify-content-end">
        <Pagination.Prev
          onClick={() =>
            setCurrentPage((prevPage) =>
              prevPage === 1 ? prevPage : prevPage - 1
            )
          }
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prevPage) =>
              prevPage === totalPages ? prevPage : prevPage + 1
            )
          }
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Firs;

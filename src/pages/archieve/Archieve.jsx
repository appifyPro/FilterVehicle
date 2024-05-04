import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import vehicleData from "../../../src/archieveData.json";
import { Form, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

const Archieve = () => {
  const [vehicles, setVehicles] = useState(vehicleData.vehicles);
  const [filters, setFilters] = useState({
    registrationNo: "",
    chassisNo: "",
    engineNo: "",
    status: "",
    vehicle: "",
    modal: "",
    color: "",
    company: "",
    year: "",
    registeredCitizen: "",
    FIRNo: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(5);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);
  };
  const filterVehicles = (vehicle) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      return String(vehicle[key])
        .toLowerCase()
        .includes(filters[key].toLowerCase());
    });
  };

  const filteredVehicles = vehicles.filter(filterVehicles);

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);

  const handleFormReset = () => {
    setFilters({
      registrationNo: "",
      chassisNo: "",
      engineNo: "",
      status: "",
      vehicle: "",
      modal: "",
      color: "",
      company: "",
      year: "",
      registeredCitizen: "",
      FIRNo: "",
    });
    setCurrentPage(1);
  };
  return (
    <div className="mt-4 container-fluid">
      <h1 className="mb-4">Archieve Records</h1>
      <div className="mb-2">
        <Row className="mb-4 ">
          <Col>
            <Form.Label>RegistrationNo</Form.Label>
            <Form.Control
              type="text"
              placeholder="ABC-16A-1234"
              name="registrationNo"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Group controlId="vehicleTypeSelect">
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
          <Col>
            <Form.Group controlId="vehicleTypeSelect">
              <Form.Label>Company</Form.Label>
              <Form.Select
                name="company"
                value={filters.company}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="volvo">Volvo</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="suzuki">Suzuki</option>
                <option value="nissan">Nissan</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
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
            <Form.Label>Modal</Form.Label>
            <Form.Control
              type="text"
              placeholder="2020"
              name="modal"
              onChange={handleFilterChange}
            />
          </Col>
          <Col>
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="2023"
              name="year"
              onChange={handleFilterChange}
            />
          </Col>
        </Row>
        <Row className="mb-4 ">
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
            <Form.Group controlId="vehicleTypeSelect">
              <Form.Label>Color</Form.Label>
              <Form.Select
                name="color"
                value={filters.color}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="silver">Silver</option>
                <option value="gray">Gray</option>
                <option value="brown">Brown</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>

                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>FIR No</Form.Label>
            <Form.Control
              type="text"
              placeholder="2468013"
              name="FIRNo"
              onChange={handleFilterChange}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="">Select</option>
                <option value="caseDischarged">Case Discharged</option>
                <option value="investigationOngoing">
                  Investigation Ongoing
                </option>
                <option value="vehicleRecovered">Vehicle Recovered</option>
                <option value="vehicleHandedOver">Vehicle Handed Over</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="registeredCitizen">
              <Form.Label>Registered Citizen</Form.Label>
              <Form.Select
                name="registeredCitizen"
                value={filters.registeredCitizen}
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
      <Table responsive bordered hover className="mt-5 ">
        <thead>
          <tr>
            <th>#</th>
            <th>FIR #</th>
            <th>Registration # </th>
            <th>Chassis #</th>
            <th>EngineNo #</th>
            <th>Vehicle</th>
            <th>Color</th>
            <th>Model</th>
            <th>Company</th>
            <th>Year</th>
            <th>Reg Citizen</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentVehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{vehicle.FIRNo}</td>
              <td>{vehicle.registrationNo}</td>
              <td>{vehicle.chassisNo}</td>
              <td>{vehicle.engineNo}</td>
              <td>{vehicle.vehicle}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.modal}</td>
              <td>{vehicle.company}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.registeredCitizen}</td>
              <td>{vehicle.status}</td>
            </tr>
          ))}
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

export default Archieve;

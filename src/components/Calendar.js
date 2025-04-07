// Calendar.js
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../services/api"; // Ensure this path is correct and the API is setup
import { Container, Row, Col } from "react-bootstrap";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("month");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/tasks");
        const formattedEvents = response.data.map((task) => ({
          title: task.title,
          start: new Date(task.due_date),
          end: new Date(task.due_date),
          task: task,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleEventClick = (event) => {
    // Navigate to task details view
    // You'll need to use history.push or equivalent here
  };

  return (
    <Container
      // fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100">
        <Col>
          <div style={{ height: "80vh" }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              view={view}
              onView={handleViewChange}
              onEventClick={handleEventClick}
              style={{ height: "100%" }} // Ensures full height within the parent div
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarView;

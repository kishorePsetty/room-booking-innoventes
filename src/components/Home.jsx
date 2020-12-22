import React, { useEffect, useState } from "react";

function Home(props) {
  const [roomsCount, setRoomsCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrensCount, setChildrensCount] = useState(0);
  const handleRoomsChange = (type) => {
    const valueToSet = type === "minus" ? roomsCount - 1 : roomsCount + 1;
    setRoomsCount(valueToSet);
  };

  const handleAdultsChange = (type) => {
    const valueToSet = type === "minus" ? adultsCount - 1 : adultsCount + 1;
    setAdultsCount(valueToSet);
  };

  const handleChildrensChange = (type) => {
    const valueToSet =
      type === "minus" ? childrensCount - 1 : childrensCount + 1;
    setChildrensCount(valueToSet);
  };

  useEffect(() => {
    
  }, [roomsCount]);

  useEffect(() => {
    switch (roomsCount) {
      case 1:
        if (adultsCount > 4) {
          setRoomsCount(roomsCount + 1);
        }
      case 2:
        if (adultsCount > 8) {
          setRoomsCount(roomsCount + 1);
        }
      case 3:
        if (adultsCount > 12) {
          setRoomsCount(roomsCount + 1);
        }
      case 4:
        if (adultsCount > 16) {
          setRoomsCount(roomsCount + 1);
        }
      case 5:
        if (adultsCount > 20) {
          setRoomsCount(roomsCount + 1);
        }
    }
  }, [adultsCount]);

  useEffect(() => {
    switch (roomsCount) {
      case 1:
        if (childrensCount > 3) {
          setRoomsCount(roomsCount + 1);
        }
      case 2:
        if (childrensCount > 6) {
          setRoomsCount(roomsCount + 1);
        }
      case 3:
        if (childrensCount > 9) {
          setRoomsCount(roomsCount + 1);
        }
      case 4:
        if (childrensCount > 12) {
          setRoomsCount(roomsCount + 1);
        }
      case 5:
        if (childrensCount > 15) {
          setRoomsCount(roomsCount + 1);
        }
    }
  }, [childrensCount]);

  return (
    <div className="container">
      <div className="booking-container">
        <div className="rooms-container">
          <div className="rooms-title">Rooms</div>
          <div className="rooms-actions">
            <button
              className="w3-button w3-circle w3-blue"
              onClick={() => handleRoomsChange("minus")}
              disabled={!roomsCount}
            >
              -
            </button>
            <div className="rooms-value">{roomsCount}</div>
            <button
              className="w3-button w3-circle w3-red"
              onClick={() => handleRoomsChange("plus")}
              disabled={roomsCount >= 5}
            >
              +
            </button>
          </div>
        </div>
        <div className="rooms-container">
          <div className="rooms-title">Adults</div>
          <div className="rooms-actions">
            <button
              className="w3-button w3-circle w3-blue"
              onClick={() => handleAdultsChange("minus")}
              disabled={!adultsCount || !roomsCount}
            >
              -
            </button>
            <div className="rooms-value">{adultsCount}</div>
            <button
              className="w3-button w3-circle w3-red"
              onClick={() => handleAdultsChange("plus")}
              disabled={!roomsCount || adultsCount >= 20}
            >
              +
            </button>
          </div>
        </div>
        <div className="rooms-container">
          <div className="rooms-title">Children</div>
          <div className="rooms-actions">
            <button
              className="w3-button w3-circle w3-blue"
              onClick={() => handleChildrensChange("minus")}
              disabled={!childrensCount || !roomsCount}
            >
              -
            </button>
            <div className="rooms-value">{childrensCount}</div>
            <button
              className="w3-button w3-circle w3-red"
              onClick={() => handleChildrensChange("plus")}
              disabled={!roomsCount}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

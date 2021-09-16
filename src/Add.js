import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const [eventName, cEventName] = useState(props.currentEvent?.eventName || "");
  const [location, cLocation] = useState(props.currentEvent?.location || "");
  const [description, cDescription] = useState(
    props.currentEvent?.description || ""
  );
  const [imageLink, cImageLink] = useState(props.currentEvent?.imagelink || "");
  const [date, cDate] = useState(
    props.currentEvent?.date || new Date().toISOString().slice(0, 10)
  );
  const [time, cTime] = useState(props.currentEvent?.time || "00:00");

  const onChange = (e, changer) => {
    e.preventDefault();
    changer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvent) {
      console.log(e.target);
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.eventName.value,
        e.target.location.value,
        e.target.description.value,
        e.target.imageLink.value,
        e.target.date.value,
        e.target.time.value
      );
    } else {
      result = props.client.addEvent(
        e.target.eventName.value,
        e.target.location.value,
        e.target.description.value,
        e.target.imageLink.value,
        e.target.date.value,
        e.target.time.value
      );
    }
    result
      .then(() => {
        cDisabled(false);
        console.log("something");
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };

  return (
    <>
      {props.currentEvent ? "Update" : "Add"}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Name: <br />
        <input
          onChange={(e) => onChange(e, cEventName)}
          type="text"
          defaultValue={props.currentEvent?.eventName}
          value={eventName}
          name="eventName"
          disabled={disabled}
        />
        <br />
        Location:
        <br />
        <input
          onChange={(e) => onChange(e, cLocation)}
          type="text"
          defaultValue={props.currentEvent?.location}
          value={location}
          name="location"
          disabled={disabled}
        />
        <br />
        Description:
        <br />
        <input
          onChange={(e) => onChange(e, cDescription)}
          type="text"
          defaultValue={props.currentEvent?.description}
          value={description}
          name="description"
          disabled={disabled}
        />
        <br />
        Image Link:
        <br />
        <input
          onChange={(e) => onChange(e, cImageLink)}
          type="text"
          defaultValue={props.currentEvent?.imageLink}
          value={imageLink}
          name="imageLink"
          disabled={disabled}
        />
        <br />
        Date:
        <br />
        <input
          onChange={(e) => onChange(e, cDate)}
          type="date"
          defaultValue={props.currentEvent?.date}
          value={date}
          name="date"
          disabled={disabled}
        />
        <br />
        Time:
        <br />
        <input
          onChange={(e) => onChange(e, cTime)}
          type="time"
          defaultValue={props.currentEvent?.time}
          value={time}
          name="time"
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;

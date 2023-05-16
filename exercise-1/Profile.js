export default function Profile(props) {
  const containerStyle = {
    border: "1px solid black",
    width: "600px",
    height: "200px",
    padding: "10px",
    borderRadius: "5px"
  };

  const imageContainerStyle = {
    display: "absolute",
    float: "left"
  };

  const imageStyle = {
    width: "150px",
    borderRadius: "50%",
    background: "#ccc"
  };

  const descriptionContainerStyle = {
    float: "left",
    width: "400px",
    fontFamily: "Arial, Helverica, sans-serif",
    padding: "20px 10px"
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={props.person.avatar} alt="avatar" />
      </div>

      <div style={descriptionContainerStyle}>
        <p>
          {props.person.first_name} {props.person.last_name}
        </p>
        <p>{props.person.email}</p>
        <p>{props.person.phone_number}</p>
        <p>{props.person.date_of_birth}</p>
        <p>
          {props.person.employment.title} - {props.person.employment.key_skill}
        </p>
      </div>
    </div>
  );
}

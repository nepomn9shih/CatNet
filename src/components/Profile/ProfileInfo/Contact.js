import "../../../App.css";

const Contact = ({ contactTitle, contactValue }) => {
    return (
      <p className="card-text overflowHack2">
        <b>{contactTitle}:</b>{" "}
        <a href={contactValue}>{contactValue || "пока нет"}</a>
      </p>
    );
  };

  export default Contact
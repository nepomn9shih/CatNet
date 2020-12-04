const Contact = ({ contactTitle, contactValue }) => {
    return (
      <p className="card-text">
        <b>{contactTitle}:</b>{" "}
        <a href={contactValue}>{contactValue || "пока нет"}</a>
      </p>
    );
  };

  export default Contact
import { Field, reduxForm } from "redux-form";
import Contact from "./Contact";
import { Textarea, Input, CheckBox } from "../../FormsControls/FormsControls";
import { requiredField } from "../../../utils/validators";

const ContactsEdit = ({
  profile,
  setEditModeOff,
  isOwner,
  toggleContacts,
  seeContacts,
}) => {

  const ContactEdit = ({name, validate, placeholder}) => {
    return (
      <div className="d-flex justify-content-between align-items-center mb-2">
        <b>{placeholder}: </b>
        <div className="ml-2 flex-grow-1">
          <Field
            name={name}
            component={Input}
            className="form-control"
            validate={validate}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  };

  return (
    <form>
      <div className="card bg-secondary m-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Обо мне:</h5>
          {isOwner && (
            <button className="btn btn-sm btn-warning" onClick={setEditModeOff}>
              <b>CANCEL</b>
            </button>
          )}
        </div>
        <div className="card-body">
          <Field
            name={"aboutMe"}
            component={Textarea}
            className="form-control"
            validate={[requiredField]}
            placeholder="About me"
          />
          <hr />
          <div className="card-text mb-2">
            <div className="d-flex align-items-center mb-2">
              <b>Ищу работу:</b>
              <Field
                name={"lookingForAJob"}
                component={CheckBox}
                className="ml-2"
              /> 
            </div>
          </div>
          <Field
            name={"lookingForAJobDescription"}
            component={Textarea}
            className="form-control"
            validate={[requiredField]}
            placeholder="Looking for a job description"
          />
        </div>
      </div>
      <div className="card bg-secondary m-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Контакты:</h5>
          <button className="btn btn-sm btn-warning" onClick={toggleContacts}>
            {seeContacts ? <b>&#9650;</b> : <b>&#9660;</b>}
          </button>
        </div>
        {seeContacts && (
          <div className="card-body">
          <ContactEdit name={"facebook"} validate={[requiredField]} placeholder={"Facebook"}/>
          <ContactEdit name={"website"} validate={[requiredField]} placeholder={"Website"}/>
          <ContactEdit name={"vk"} validate={[requiredField]} placeholder={"Вконтакте"}/>
          <ContactEdit name={"twitter"} validate={[requiredField]} placeholder={"Twitter"}/>
          <ContactEdit name={"instagram"} validate={[requiredField]} placeholder={"Instagram"}/>
          <ContactEdit name={"github"} validate={[requiredField]} placeholder={"GitHub"}/>
          <ContactEdit name={"youtube"} validate={[requiredField]} placeholder={"YouTube"}/>
          <ContactEdit name={"mainLink"} validate={[requiredField]} placeholder={"mainLink"}/>
          </div>
        )}
        {isOwner && (
          <button className="btn btn-sm btn-warning" onClick={() => {}}>
            <b>SAVE</b>
          </button>
        )}
      </div>
    </form>
  );
};

export default reduxForm({ form: "editContacts" })(ContactsEdit);

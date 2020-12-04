import { Field, reduxForm } from "redux-form";
import { Textarea, Input, CheckBox } from "../../FormsControls/FormsControls";
import { requiredField } from "../../../utils/validators";

const ContactsEdit = ({
  profile,
  setEditModeOff,
  isOwner,
  toggleContacts,
  seeContacts,
  handleSubmit
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
    
      <div className="card bg-secondary m-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Обо мне:</h5>
          {isOwner && (
            <button className="btn btn-sm btn-warning" onClick={setEditModeOff}>
              <b>CANCEL</b>
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit}>
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
            <div>
              <b>Полное имя: </b>
              <Field
            name={"fullName"}
            component={Input}
            className="form-control"
            validate={[requiredField]}
            placeholder="Full name"
          />
            </div>
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
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Контакты:</h5>
        </div>
          <div className="card-body">
          <ContactEdit name={"contacts.facebook"} validate={[]} placeholder={"Facebook"}/>
          <ContactEdit name={"contacts.website"} validate={[]} placeholder={"Website"}/>
          <ContactEdit name={"contacts.vk"} validate={[]} placeholder={"Вконтакте"}/>
          <ContactEdit name={"contacts.twitter"} validate={[]} placeholder={"Twitter"}/>
          <ContactEdit name={"contacts.instagram"} validate={[]} placeholder={"Instagram"}/>
          <ContactEdit name={"contacts.github"} validate={[]} placeholder={"GitHub"}/>
          <ContactEdit name={"contacts.youtube"} validate={[]} placeholder={"YouTube"}/>
          <ContactEdit name={"contacts.mainLink"} validate={[]} placeholder={"mainLink"}/>
          </div>
        {isOwner && (
          <button className="btn btn-sm btn-warning btn-block">
            <b>SAVE</b>
          </button>
        )}
        </form>
      </div>
  );
};

export default reduxForm({ form: "editContacts" })(ContactsEdit);

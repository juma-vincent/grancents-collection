import React from "react";
import "./formInput.scss";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./formInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        type="text"
        className="form-input"
        {...otherProps}
      />

      {label ? (
        <FormInputLabel
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;

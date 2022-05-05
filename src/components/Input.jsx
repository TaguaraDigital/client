import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { GroupInput, Icon, Input, Label, MsgInfo } from "../elements/Forms";

const ComponentInput = ({
  state,
  setState,
  type,
  label,
  placeholder,
  name,
  msgInfo,
  regExp,
  functionVal,
}) => {
  const validation = () => {
    let newState = { ...state, isValid: "" };
    if (regExp) {
      if (regExp.test(state.field)) {
        newState = { ...state, isValid: "true" };
      } else {
        if (state.field.length > 0) {
          newState = { ...state, isValid: "false" };
        }
      }
    }
    setState(newState);

    if (functionVal) {
      functionVal();
    }
  };

  const onChangeHandler = (e) => {
    const newState = { ...state, field: e.target.value };
    setState(newState);
  };

  return (
    <div>
      <Label htmlFor={name} isValid={state.isValid}>
        {label}
      </Label>
      <GroupInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.field}
          onChange={onChangeHandler}
          onKeyUp={validation}
          // onBlur={validation}
          isValid={state.isValid}
        />
        <Icon isValid={state.isValid}>
          {state.isValid === "true" ? <FaCheckCircle /> : <FaRegTimesCircle />}
        </Icon>
      </GroupInput>
      <MsgInfo isValid={state.isValid}>{msgInfo} </MsgInfo>
    </div>
  );
};

export default ComponentInput;

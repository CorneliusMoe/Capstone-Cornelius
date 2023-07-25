import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 20px;
  margin: 0;
`;

const StyledLegend = styled.legend`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #272727;
  margin-bottom: 10px;
  border-bottom: 3px solid #eee9da;
  border-radius: 10px;
`;

const StyledDescription = styled.p`
  color: #7d7d7d;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #272727;
  margin-bottom: 5px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="radio"] {
    margin-right: 5px;
  }
`;

const StyledRadioLabel = styled.span`
  font-size: 16px;
  text-align: center;
  color: #272727;
`;

const StyledTextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  :focus {
    border-color: #6096b4;
  }
`;

export default function GoalInput({
  title,
  description,
  label,
  name,
  value,
  onChange,
  timelyOption,
  setTimelyOption,
}) {
  function handleTimelyOptionChange(event) {
    const { value } = event.target;
    setTimelyOption(value);
  }
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <StyledFieldset>
      <StyledLegend>{title}</StyledLegend>
      <StyledDescription>{description}</StyledDescription>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {name === "timely" && (
        <StyledInputContainer>
          <input
            type="radio"
            name={`${name}-option`}
            value="text"
            checked={timelyOption === "text"}
            onChange={handleTimelyOptionChange}
          />
          <StyledRadioLabel>Text</StyledRadioLabel>
          <input
            type="radio"
            name={`${name}-option`}
            value="date"
            checked={timelyOption === "date"}
            onChange={handleTimelyOptionChange}
          />
          <StyledRadioLabel>Date</StyledRadioLabel>
        </StyledInputContainer>
      )}
      {name === "timely" && timelyOption === "text" && (
        <StyledTextInput
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}
      {name === "timely" && timelyOption === "date" && (
        <StyledTextInput
          type="date"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          min={currentDate}
        />
      )}
      {name !== "timely" && (
        <StyledTextInput
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </StyledFieldset>
  );
}

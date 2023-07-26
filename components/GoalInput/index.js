import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 20px;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const StyledLegend = styled.legend`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #272727;
  margin-bottom: 10px;
  border-bottom: 3px solid #eee9da;
`;

const StyledDescription = styled.p`
  color: #7d7d7d;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 15px;
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

const StyledCharacterCount = styled.div`
  font-size: 12px;
  text-align: right;
  color: #7d7d7d;
  margin-top: 5px;
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
  const characterLimits = {
    goalName: 50,
    specific: 100,
    measurable: 100,
    achievable: 100,
    relevant: 100,
    timely: 100,
  };

  const [characterCount, setCharacterCount] = useState(
    value ? value.length : 0
  );

  const [timelyCharacterCount, setTimelyCharacterCount] = useState(
    value && timelyOption === "text" ? value.length : 0
  );

  useEffect(() => {
    if (value) {
      setCharacterCount(value.length);
    }
  }, [value]);

  useEffect(() => {
    if (timelyOption === "text" && value) {
      setTimelyCharacterCount(value.length);
    }
  }, [timelyOption, value]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    const maxLength = characterLimits[name];
    const truncatedValue = value.slice(0, maxLength);
    onChange({ target: { name, value: truncatedValue } });
    if (name === "timely" && timelyOption === "text") {
      setTimelyCharacterCount(truncatedValue.length);
    }
  }

  function handleTimelyOptionChange(event) {
    const { value } = event.target;
    setTimelyOption(value);
    if (value === "text") {
      onChange({ target: { name: "timely", value: "" } });
      setTimelyCharacterCount(0);
    }
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
          onChange={handleInputChange}
          maxLength={characterLimits[name]}
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
          onChange={handleInputChange}
          maxLength={characterLimits[name]}
          required
        />
      )}
      {name === "timely" && timelyOption === "text" && (
        <StyledCharacterCount>
          Characters left: {characterLimits[name] - timelyCharacterCount}
        </StyledCharacterCount>
      )}
      {name !== "timely" && (
        <StyledCharacterCount>
          Characters left: {characterLimits[name] - characterCount}
        </StyledCharacterCount>
      )}
    </StyledFieldset>
  );
}

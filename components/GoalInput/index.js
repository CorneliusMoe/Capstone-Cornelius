export default function GoalInput({
  title,
  description,
  label,
  name,
  value,
  onChange,
  timelyOption,
  setTimelyOption,
  required,
}) {
  function handleTimelyOptionChange(event) {
    const { value } = event.target;
    setTimelyOption(value);
  }
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <p>{description}</p>
        <label>{label}</label>
        {name === "timely" && (
          <div>
            <input
              type="radio"
              name={`${name}-option`}
              value="text"
              checked={timelyOption === "text"}
              onChange={handleTimelyOptionChange}
            />
            <span>Text</span>
            <input
              type="radio"
              name={`${name}-option`}
              value="date"
              checked={timelyOption === "date"}
              onChange={handleTimelyOptionChange}
            />
            <span>Date</span>
          </div>
        )}
        {name === "timely" && timelyOption === "text" && (
          <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        )}
        {name === "timely" && timelyOption === "date" && (
          <input
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
          <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        )}
      </div>
    </fieldset>
  );
}

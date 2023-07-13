export default function GoalInput({
  title,
  description,
  label,
  name,
  value,
  onChange,
}) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <p>{description}</p>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
}

export default function GoalInput({ title, description, label }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <p>{description}</p>
        <label htmlFor={title.toLowerCase()}>{label}</label>
        <input type="text" id={title.toLowerCase()} />
      </div>
    </fieldset>
  );
}

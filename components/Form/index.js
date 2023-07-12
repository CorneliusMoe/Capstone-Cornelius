export default function Form() {
  return (
    <form>
      <h2>Be S.M.A.R.T.</h2>
      <div>
        <p>Choose a title for your goal.</p>
        <label htmlFor="smart">What am I trying to achieve?</label>
        <input type="text" id="smart" />
      </div>
      <div>
        <h3>Specific</h3>
        <p>
          Specific goals make it harder to get stuck and easier to get started.
          Review this section if you feel yourself getting off track. Be clear
          about what your goal is. You know what to do!
        </p>
        <label htmlFor="specific">What is my goal?</label>
        <input type="text" id="specific" />
      </div>
      <div>
        <h3>Measurable</h3>
        <p>
          Measurable goals show you where you&apos;re going and how to track
          your progress. Ask yourself what can improve your mental wellbeing and
          how much of that thing you need before your wellbeing improves.
        </p>
        <label htmlFor="measurable">How will I measure my progress?</label>
        <input type="text" id="measurable" />
      </div>
      <div>
        <h3>Relevant</h3>
        <p>
          Relevant goals are important both now and later. They allow you to
          succeed while staying true to your values and will help you meet more
          long-term goals.
        </p>
        <label htmlFor="relevant">Why is this goal important to me?</label>
        <input type="text" id="relevant" />
      </div>
      <div>
        <h3>Achievable</h3>
        <p>
          Achievable goals ensure that you don&apos;t push yourself too hard or
          try to achieve something out of your control. Break up your larger
          goals into smaller ones. Once you know you can do it you&apos;re
          halfway there.
        </p>
        <label htmlFor="achievable">Can I achieve my goal?</label>
        <input type="text" id="achievable" />
      </div>
      <div>
        <h3>Timely</h3>
        <p>
          Timely goals are well-structured with a beginning and end-date. Try
          not to be vague about the time in which you should achieve your goal.
          Be specific, this keeps you accountable and focused.
        </p>
        <label htmlFor="timely">When will I achieve my goal?</label>
        <input type="text" id="timely" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

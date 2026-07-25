function Experience({ experience, setExperience, isEditing, setIsEditing }) {
  function handleChange(e) {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>Experience</h2>

      {isEditing ? (
        <>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={experience.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
          />

          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
          />

          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{experience.company}</p>
<p>{experience.position}</p>
<p>{experience.responsibilities}</p>
<p>
  {experience.startDate} - {experience.endDate}
</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Experience;

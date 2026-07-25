function Education({
  education,
  setEducation,
  isEditing,
  setIsEditing,
}) {
  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  }


  
  return (
    <div>
      <h2>Education</h2>

      {isEditing ? (
        <>
          <input
            type="text"
            name="school"
            placeholder="School"
            value={education.school}
            onChange={handleChange}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleChange}
          />

          <input
            type="date"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
          />

          <input
            type="date"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
          />

          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{education.school}</p>
          <p>{education.degree}</p>
          <p>
            {education.startDate} - {education.endDate}
          </p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Education;

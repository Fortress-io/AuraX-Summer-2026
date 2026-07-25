function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>

      <section className="cv-section">
        <h3>Contact Information</h3>
        <h4>{generalInfo.name}</h4>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </section>

      <section className="cv-section">
        <h3>Education</h3>

        <p>{education.school}</p>
        <p>{education.degree}</p>
        <p>
          {education.startDate} - {education.endDate}
        </p>
      </section>

      <section className="cv-section">
        <h3>Experience</h3>

        <p>{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.responsibilities}</p>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
      </section>
    </div>
  );
}

export default CVPreview;

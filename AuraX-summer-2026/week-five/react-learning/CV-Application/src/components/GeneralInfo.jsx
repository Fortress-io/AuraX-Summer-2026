function GeneralInfo({ generalInfo, setGeneralInfo, isEditing, setIsEditing }) {
  function handleChange(e) {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>General Information</h2>

      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={generalInfo.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={generalInfo.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={generalInfo.phone}
            onChange={handleChange}
          />

          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{generalInfo.name}</p>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;

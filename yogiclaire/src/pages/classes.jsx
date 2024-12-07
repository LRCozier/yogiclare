import React from "react";

const Classes = () => {
  const classList = [
    { name: 'Beginner Yoga', description: 'Perfect for newcomers to start their yoga journey.', time: 'Monday & Wednesday: 9am - 10am' },
    { name: 'Advanced Yoga', description: 'For experienced practitioners looking to deepen their practice.', time: 'Tuesday & Thursday: 6pm - 7pm' },
    { name: 'Meditation', description: 'A peaceful session focused on mindfulness and relaxation.', time: 'Friday: 7pm - 8pm' },
  ];

  return (
    <section className="classes">
      <h2>Our Classes</h2>
      <div className="class-list">
        {classList.map((yogaClass, index) => (
          <div className="class-item" key={index}>
            <h3>{yogaClass.name}</h3>
            <p>{yogaClass.description}</p>
            <p><strong>{yogaClass.time}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
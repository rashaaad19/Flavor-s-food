import classes from "./FirstScreen.module.css";
import { useState } from "react";
const FirstScreen = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({});
  };
  return (
    <>
      <div className={classes.container}>
        <h1>Reservations</h1>
        <p>
          Reserve your table today and savor a delightful dining experience at
          our restaurant
        </p>
        <form
          className={classes.formContainer}
          id="bookingForm"
          onSubmit={handleSubmit}
        >
          <ul>
            <li className={classes.formItem}>
              <input
                placeholder="Your Name"
                type="text"
                id="name"
                name="userName"
                value={formData.Name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, Name: e.target.value })
                }
                required
              />
              <label htmlFor="name">*Your name</label>
            </li>
            <li className={classes.formItem}>
              <input
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="phone number"
                required
                pattern="^01[0-2,5]\d{8}$"
                value={formData.Phone || ""}
                onChange={(e) =>
                  setFormData({ ...formData, Phone: e.target.value })
                }
              />
              <label htmlFor="phone">*Your phone number</label>
            </li>

            <li className={classes.formItem}>
              <input
                type="time"
                id="time"
                name="time"
                min="09:00"
                max="23:00"
                step="900"
                placeholder="Time"
                value={formData.Time || ""}
                onChange={(e) =>
                  setFormData({ ...formData, Time: e.target.value })
                }
                required
              />
              <label htmlFor="time">*Reservation time</label>
            </li>
            <li className={classes.formItem}>
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                name="email"
                value={formData.Email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
                required
              />
              <label htmlFor="email">*Your Email</label>
            </li>
            <li className={classes.formItem}>
              <input
                placeholder="No. of People"
                type="number"
                id="number"
                name="number"
                value={formData.numberOfPeople || ""}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfPeople: e.target.value })
                }
                required
              />
              <label htmlFor="number">*Number of people</label>
            </li>
            <li className={classes.formItem}>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                value={formData.date || ""}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
              <label htmlFor="date">*Reservation Date</label>
            </li>
            <li className={classes.textContainer}>
              <textarea
                value={formData.additionalRequests || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalRequests: e.target.value,
                  })
                }
                className={classes.textArea}
                placeholder="Extra Information"
              />
            </li>
            <li className={classes.submitContainer}>
              <button type="submit" value="submit" form="bookingForm">
                Book Now
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default FirstScreen;

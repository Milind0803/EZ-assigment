import React, { useState } from "react";
import "../styles/Contact.css";
import mandala3 from "../assets/mandala 3.0 right corner.png";
import mandala4 from "../assets/mandala 4.0 left corner.png";
import vfilmsLogo from "../assets/vfilms-logo.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Name, Email, and Message are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log("API Response:", data);

      if (res.status === 200 || res.status === 201) {
        setSuccess("Form Submitted ✅");
        setForm({ name: "", email: "", phone: "", message: "" });

        // Optional: Clear success message after 5 seconds
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__left">
          <img className="contact__mandala3" src={mandala3} alt="Mandala 3" />
          <img className="contact__mandala4" src={mandala4} alt="Mandala 4" />
          <img className="contact__logo" src={vfilmsLogo} alt="V Films" />
          <h2 className="contact__heading">Join the Story</h2>
          <p className="contact__text">
            Ready to bring your vision to life? Let’s talk.
          </p>
          <p className="contact__text">
            Whether you have an idea, a question, or simply want to explore how
            V can work — we’re just a message away. Let’s catch up over coffee.
            Great stories begin with a good conversation.
          </p>
        </div>
        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={form.email}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="contact__input"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={form.message}
              onChange={handleChange}
              className="contact__textarea"
              required
            ></textarea>

            {error && (
              <p style={{ color: "#cf563e", fontSize: "14px" }}>{error}</p>
            )}
            {success && (
              <p style={{ color: "#18a058", fontSize: "14px" }}>{success}</p>
            )}

            <button type="submit" className="contact__btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

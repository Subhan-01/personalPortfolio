<<<<<<< HEAD
import { useState, useRef } from "react";

const SendIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.34 9.32L6.34 2.32a3.75 3.75 0 00-4.08 5.9L4.66 11.59c.054.13.082.27.082.41s-.028.28-.082.41L2.26 17.78a3.75 3.75 0 004.09 5.9l14-7a3.75 3.75 0 000-6.72v-.64zM19.45 12.89l-14 7a1.75 1.75 0 01-1.91-2.76l2.39-5.37c.031-.072.058-.145.08-.22H13.46a1 1 0 000-2H6.02a6.3 6.3 0 00-.08-.22L3.54 4.02a1.75 1.75 0 011.91-2.76l14 7a1.75 1.75 0 010 3.12z" fill="currentColor"/>
  </svg>
);

const FloatingField = ({ id, name, label, type = "text", value, onChange, required }) => (
  <div className="relative mb-7">
    <input
      type={type}
      id={id}
      name={name}
      placeholder=" "
      value={value}
      onChange={onChange}
      required={required}
      className="
        peer w-full bg-transparent border-0 border-b border-gray-200 dark:border-gray-700
        pt-5 pb-1 px-0 text-sm text-gray-900 dark:text-gray-100
        focus:outline-none focus:border-violet-500 dark:focus:border-violet-400
        transition-colors duration-200
      "
    />
    <label
      htmlFor={id}
      className="
        absolute left-0 top-4 text-sm text-gray-400 dark:text-gray-500
        pointer-events-none transition-all duration-200
        peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-violet-500 dark:peer-focus:text-violet-400
        peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[11px]
        peer-[&:not(:placeholder-shown)]:text-gray-400
      "
    >
      {label}{required && " *"}
    </label>
    <span className="
      absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 dark:bg-violet-400
      transition-all duration-300 peer-focus:w-full
    " />
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", location: "", budget: "", subject: "", message: "",
  });
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 300) return;
    if (name === "message") setCharCount(value.length);
    setFormData((prev) => ({ ...prev, [name]: value }));
=======
import { useState } from "react";

const telegramSVG = (
  <svg
    className="w-4 md:w-6 aspect-square"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34ZM19.45 12.8901L5.45 19.8901C5.26617 19.9784 5.05973 20.0084 4.85839 19.976C4.65705 19.9436 4.47041 19.8504 4.32352 19.709C4.17662 19.5675 4.07648 19.3845 4.03653 19.1846C3.99658 18.9846 4.01873 18.7772 4.1 18.5901L6.49 13.2201C6.52094 13.1484 6.54766 13.075 6.57 13.0001H13.46C13.7252 13.0001 13.9796 12.8948 14.1671 12.7072C14.3546 12.5197 14.46 12.2653 14.46 12.0001C14.46 11.7349 14.3546 11.4806 14.1671 11.293C13.9796 11.1055 13.7252 11.0001 13.46 11.0001H6.57C6.54766 10.9253 6.52094 10.8518 6.49 10.7801L4.1 5.41013C4.01873 5.22309 3.99658 5.01568 4.03653 4.8157C4.07648 4.61572 4.17662 4.43273 4.32352 4.29128C4.47041 4.14982 4.65705 4.05666 4.85839 4.02428C5.05973 3.9919 5.26617 4.02186 5.45 4.11013L19.45 11.1101C19.6138 11.194 19.7513 11.3215 19.8473 11.4786C19.9433 11.6356 19.994 11.8161 19.994 12.0001C19.994 12.1842 19.9433 12.3647 19.8473 12.5217C19.7513 12.6787 19.6138 12.8062 19.45 12.8901Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setStatus("loading");
=======
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
    try {
      const response = await fetch("https://formspree.io/f/xgvnbrpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
<<<<<<< HEAD
        setStatus("success");
        setFormData({ name: "", email: "", location: "", budget: "", subject: "", message: "" });
        setCharCount(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
=======
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          budget: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to submit form. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
    }
  };

  return (
<<<<<<< HEAD
    <div className="w-full">
      <p className="text-[15px] uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500 mb-1">
        Get in touch
      </p>
     

      {status === "success" ? (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L10.5 12.672l4.793-4.793a1 1 0 011.414 1.414z" fill="currentColor"/></svg>
          Message sent! I'll get back to you within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <FloatingField id="name" name="name" label="Name" value={formData.name} onChange={handleChange} required />
            <FloatingField id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
            <FloatingField id="location" name="location" label="Location" value={formData.location} onChange={handleChange} required />
            <FloatingField id="budget" name="budget" label="Budget" value={formData.budget} onChange={handleChange} required />
          </div>

          <FloatingField id="subject" name="subject" label="Subject" value={formData.subject} onChange={handleChange} required />

          {/* Message with character counter */}
          <div className="relative mb-7">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              maxLength={300}
              className="
                peer w-full bg-transparent border-0 border-b border-gray-200 dark:border-gray-700
                pt-5 pb-1 px-0 text-sm text-gray-900 dark:text-gray-100
                focus:outline-none focus:border-violet-500 dark:focus:border-violet-400
                resize-none transition-colors duration-200
              "
            />
            <label
              htmlFor="message"
              className="
                absolute left-0 top-4 text-sm text-gray-400 dark:text-gray-500
                pointer-events-none transition-all duration-200
                peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-violet-500 dark:peer-focus:text-violet-400
                peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[11px]
                peer-[&:not(:placeholder-shown)]:text-gray-400
              "
            >
              Message *
            </label>
            <span className="
              absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 dark:bg-violet-400
              transition-all duration-300 peer-focus:w-full
            " />
            <span className="absolute bottom-2 right-0 text-[11px] text-gray-400 dark:text-gray-600">
              {charCount}/300
            </span>
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500 mb-4">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="
              inline-flex items-center gap-2.5 px-6 py-3
              bg-violet-600 hover:bg-violet-700 active:scale-95
              text-white text-sm font-medium rounded-lg
              transition-all duration-150 disabled:opacity-60
            "
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round"/>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <SendIcon /> Send message
              </>
            )}
          </button>
        </form>
      )}
=======
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        I'm always open to discussing product design work or partnership opportunities.
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={commonClass}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className={commonClass}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location*"
            className={commonClass}
            value={formData.location}
            onChange={handleChange}
            required
          />

          <div className="flex max-xs:flex-col max-xs:gap-4">
            <input
              type="text"
              name="budget"
              placeholder="Budget*"
              className={`${commonClass} xs:w-[50%] me-5`}
              value={formData.budget}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className={commonClass}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="message"
            placeholder="Message*"
            className={commonClass}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Submit {telegramSVG}
          </button>
        </form>
      </div>
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
    </div>
  );
};

<<<<<<< HEAD
export default Form;
=======
export default Form;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814

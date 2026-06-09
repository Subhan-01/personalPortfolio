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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/xgvnbrpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", location: "", budget: "", subject: "", message: "" });
        setCharCount(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
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
    </div>
  );
};

export default Form;
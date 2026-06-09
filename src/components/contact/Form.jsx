import { useState } from "react";

const SendIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path
      d="M20.34 9.32L6.34 2.32a3.75 3.75 0 00-4.08 5.9L4.66 11.59c.054.13.082.27.082.41s-.028.28-.082.41L2.26 17.78a3.75 3.75 0 004.09 5.9l14-7a3.75 3.75 0 000-6.72v-.64z"
      fill="currentColor"
    />
  </svg>
);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({
          name: "",
          email: "",
          location: "",
          budget: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">

      <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
        Get in touch
      </p>

      {status === "success" ? (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm">
          Message sent successfully. I will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid sm:grid-cols-2 gap-5">

            <input
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3"
            />

            <input
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3"
            />

            <input
              name="location"
              placeholder="Location*"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3"
            />

            <input
              name="budget"
              placeholder="Budget*"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3"
            />

          </div>

          <input
            name="subject"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3"
          />

          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border-b border-gray-200 focus:border-violet-500 outline-none py-3 resize-none"
          />

          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : (
              <>
                <SendIcon /> Send Message
              </>
            )}
          </button>

        </form>
      )}
    </div>
  );
};

export default Form;
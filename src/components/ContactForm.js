import { useState, useRef, useEffect } from "react";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    if (status) setStatus(null);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!validateEmail(form.email)) next.email = "Please enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrors({});

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    try {
      // Submit directly to Formspree from the client (Formspree accepts browser requests)
      if (formId) {
        const res = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            _replyto: form.email.trim(),
            _subject: form.subject?.trim() || `Message from ${form.name.trim()}`,
            message: form.message.trim(),
          }),
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          setStatus("error");
          const msg = data.errors?.map((e) => e.message).join(", ") || data.message || "Failed to send. Please try again.";
          setErrors({ form: msg });
          return;
        }
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          setStatus("error");
          setErrors({
            form:
              data.message ||
              "Contact form is not configured. Please email frabanzoo@gmail.com directly.",
          });
          return;
        }
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrors({ form: "Failed to send. Please try again or email directly." });
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors duration-200";
  const labelClass = "block text-sm text-gray-400 mb-2";

  return (
    <form onSubmit={handleSubmit} className="max-w-[520px] mx-auto text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
            disabled={status === "sending"}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === "sending"}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project inquiry, collaboration..."
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or say hello..."
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          disabled={status === "sending"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      {errors.form && (
        <p className="mb-4 text-sm text-red-400 text-center">{errors.form}</p>
      )}

      {status === "success" && (
        <p
          ref={successRef}
          tabIndex={-1}
          className="mb-4 text-sm text-green-400 text-center outline-none"
        >
          Thanks! Your message has been sent. I&apos;ll get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto border rounded-full shadow__btn font-semibold uppercase tracking-widest border-gray-300 hover:border-white hover:text-white py-4 px-8 text-[13px] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

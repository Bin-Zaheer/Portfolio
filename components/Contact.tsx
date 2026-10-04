"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Something went wrong.",
        );
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-pad contact-section"
    >
      <div className="container">
        <div className="section-kicker">
          05 — Contact
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Have an idea?
              <br />
              <em>Let&apos;s build it.</em>
            </h2>
            <p>
              Tell us a little about your project
              and what you want to create.
              We&apos;ll get back to you with the
              next steps.
            </p>

            <div className="contact-links">
              <a href="mailto:binzaheer992@gmail.com">
                <Mail size={18} />{" "}
                binzaheer992@gmail.com
              </a>
              <a
                href="https://wa.me/923176871804"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} /> +92
                3176871804
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            encType="text/plain"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <div className="-mt-[2%]">
                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </label>
              </div>
            </div>

            <label>
              Service
              <select
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>WordPress Design</option>
                <option>Web Development</option>
                <option>Video Editing</option>
                <option>Multiple Services</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                required
              />
            </label>
            {success && (
              <div className="flex items-center gap-3 rounded-2xl border border-[#d8d3c8] bg-[#eeece6] p-4 text-sm text-[#403c36]">
                <CheckCircle2 size={19} />
                <span>
                  Thanks! Your message has been
                  sent successfully.
                </span>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="button button-primary form-submit"
            >
              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

'use client';

import type { FormEvent } from 'react';

export default function WhatsAppContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const contact = String(form.get('contact') ?? '').trim();
    const location = String(form.get('location') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();
    const enquiry = [
      'Hello Doors, I would like to discuss a hospitality design project.',
      `Name: ${name}`,
      `Email / phone: ${contact}`,
      `Project location: ${location}`,
      `Project details: ${message}`,
    ].join('\n');

    window.open(`https://wa.me/?text=${encodeURIComponent(enquiry)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="hub-contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>WhatsApp enquiry</span>
        <b aria-hidden="true">↗</b>
      </div>
      <label>
        Your name
        <input type="text" name="name" placeholder="Full name" autoComplete="name" required />
      </label>
      <label>
        Email or phone
        <input type="text" name="contact" placeholder="How can we reach you?" autoComplete="email" required />
      </label>
      <label>
        Project location
        <input type="text" name="location" placeholder="City / country" autoComplete="address-level2" />
      </label>
      <label>
        Tell us about the project
        <textarea name="message" rows={4} placeholder="Type of property, number of units, and target opening date..." required />
      </label>
      <button type="submit">Continue on WhatsApp <span>↗</span></button>
      <small>Your message opens in WhatsApp, ready for review before sending.</small>
    </form>
  );
}

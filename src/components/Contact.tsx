'use client';
import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const defaultFormState = {
  name: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  message: {
    value: '',
    error: '',
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/xyzpkdpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormData(defaultFormState);
        alert('Message sent successfully!');
      } else {
        const data = await res.json();
        alert('Failed to send message: ' + (data?.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className="pl-10 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-3 rounded-lg text-gray-700 w-full transition-all duration-200"
            value={formData.name.value}
            onChange={e => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: '',
                },
              });
            }}
            required
          />
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Your email address"
            className="pl-10 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-3 rounded-lg text-gray-700 w-full transition-all duration-200"
            value={formData.email.value}
            onChange={e => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: '',
                },
              });
            }}
            required
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-3 left-3">
          <MessageSquare className="h-4 w-4 text-gray-400" />
        </div>
        <textarea
          placeholder="Your Message"
          rows={6}
          className="pl-10 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 py-3 rounded-lg text-gray-700 w-full transition-all duration-200"
          value={formData.message.value}
          onChange={e => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: '',
              },
            });
          }}
          required
        />
      </div>

      <button
        className={`w-full px-6 py-3 mt-2 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
          isSubmitting ? 'opacity-100 cursor-wait' : ''
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

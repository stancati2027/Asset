import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our PDR services? We're here to help! Contact us using any of the methods below.
            </p>
          </div>

          <div className="space-y-4">
            <ContactItem
              icon={<MapPin className="h-5 w-5 text-blue-600" />}
              title="Address"
              content="124 Forest Rd, Miranda Sydney, NSW 2228"
            />
            
            <ContactItem
              icon={<Phone className="h-5 w-5 text-blue-600" />}
              title="Phone"
              content="(+61) 0422 098 553"
            />
            
            <ContactItem
              icon={<Mail className="h-5 w-5 text-blue-600" />}
              title="Email"
              content="info@godentgo.com.au"
            />
            
            <ContactItem
              icon={<Clock className="h-5 w-5 text-blue-600" />}
              title="Business Hours"
              content="Monday - Friday: 8:00 AM - 6:00 PM"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
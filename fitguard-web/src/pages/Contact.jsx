import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Header Section (Spans full width) */}
      <div className="md:col-span-12 mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Get in touch.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Whether you're an elite athlete, a sports medicine professional, or looking for enterprise solutions, our team is ready to assist with clinical precision.
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="md:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 relative overflow-hidden">
        {/* Subtle atmospheric gradient in background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 relative z-10">Send a Message</h2>
        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-on-surface" htmlFor="first-name">First Name</label>
              <input className="w-full bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="first-name" placeholder="Jane" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-on-surface" htmlFor="last-name">Last Name</label>
              <input className="w-full bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="last-name" placeholder="Doe" type="text"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface" htmlFor="email">Work Email</label>
            <input className="w-full bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="email" placeholder="jane@institute.org" type="email"/>
          </div>
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface" htmlFor="inquiry-type">Inquiry Type</label>
            <select className="w-full bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-colors" id="inquiry-type">
              <option>Clinical Support</option>
              <option>Enterprise Sales</option>
              <option>Partnerships</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface" htmlFor="message">Message</label>
            <textarea className="w-full bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="message" placeholder="How can we help optimize your performance?" rows="4"></textarea>
          </div>
          <button className="w-full bg-primary text-on-primary font-label-md text-label-md font-bold py-4 rounded hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center justify-center space-x-2" type="button">
            <span>Submit Inquiry</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>
      </div>

      {/* Sidebar Information */}
      <div className="md:col-span-5 space-y-8 flex flex-col">
        {/* Hero / Atmospheric Image Card */}
        <div className="h-64 rounded-xl overflow-hidden relative border border-outline-variant shadow-sm">
          <img 
            alt="Close up of athletic wearable technology." 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLjA50s549L4u9LOBz3XhHSxd_p1uI-B3XoBuf7_wyMlhXq12he2jMVkr9zDuEIleK9OxBGZG6lRU4rkEVZuyE1QjpPhHIDNqYE-8JIy-jJngZ4dwntZIN4G1hCcRRPLs1zobO6VIACLV4JpP6sCIJoAq26HAobJGGEi0h2bKWb7z4WzuPpvPNCOWx0z4xn01-rDdjmGDCEG0KzP1QagPnw5Ak3qZ6Sxq0kzyUonxVQEooYeNzb4v6SdwqTc1m5-bJODcRNpZRiFM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <span className="font-headline-sm text-headline-sm text-white">Precision in every metric.</span>
          </div>
        </div>

        {/* Contact Info Bento Block */}
        <div className="bg-surface-container border border-outline-variant rounded-xl p-8 flex-grow">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Direct Channels</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-surface p-2 rounded border border-outline-variant">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Support Email</p>
                <p className="font-body-md text-body-md text-on-surface font-medium">support@fitguard.ai</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-surface p-2 rounded border border-outline-variant">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Headquarters</p>
                <p className="font-body-md text-body-md text-on-surface font-medium">100 Innovation Way<br/>Performance District, CA 94016</p>
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant my-6"></div>

            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-3">Quick Resources</p>
              <ul className="space-y-2">
                <li><Link to="#" className="font-body-sm text-body-sm text-on-surface hover:text-primary flex items-center space-x-2"><span className="material-symbols-outlined text-[16px]">open_in_new</span> <span>API Documentation</span></Link></li>
                <li><Link to="#" className="font-body-sm text-body-sm text-on-surface hover:text-primary flex items-center space-x-2"><span className="material-symbols-outlined text-[16px]">open_in_new</span> <span>Hardware Calibration Guide</span></Link></li>
                <li><Link to="#" className="font-body-sm text-body-sm text-on-surface hover:text-primary flex items-center space-x-2"><span className="material-symbols-outlined text-[16px]">open_in_new</span> <span>HIPAA Compliance FAQ</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

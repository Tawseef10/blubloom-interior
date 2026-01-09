import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Full Home Renovation',
    budget: '₹40 Lakh - ₹80 Lakh',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your vision';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        projectType: 'Full Home Renovation', 
        budget: '₹40 Lakh - ₹80 Lakh',
        message: '' 
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-transparent border-b py-4 text-blubloom-dark text-lg focus:outline-none transition-all duration-300
    ${errors[fieldName as keyof FormErrors] ? 'border-red-400' : focusedField === fieldName ? 'border-blubloom-gold' : 'border-blubloom-dark/20'}
  `;

  const labelClasses = "block text-xs uppercase tracking-[0.2em] text-blubloom-dark/60 mb-2 font-medium";

  // Tooltip component for validation errors
  const ErrorTooltip = ({ message }: { message: string }) => (
    <div className="absolute bottom-full left-0 mb-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none z-20">
      <div className="bg-red-500 text-white text-xs font-medium px-3 py-2 rounded-sm shadow-lg relative whitespace-nowrap">
        {message}
        <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-red-500" />
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-24 md:py-32 bg-blubloom-linen relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blubloom-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blubloom-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6">
              Inquire
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-blubloom-dark leading-[1.1] mb-8">
              Begin Your <br/><span className="italic text-blubloom-gold">Legacy.</span>
            </h2>
            <p className="text-blubloom-text/70 text-lg font-light leading-relaxed max-w-md mb-12">
              We accept a limited number of commissions per year to ensure obsession-level attention to detail for every sanctuary we create.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <MapPin className="w-5 h-5 text-blubloom-dark" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-blubloom-dark mb-1">The Atelier</h4>
                  <p className="text-blubloom-text/60 font-light">DLF Tower B, Jasola District Centre<br/>Jasola Vihar, New Delhi 110025</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <Mail className="w-5 h-5 text-blubloom-dark" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-blubloom-dark mb-1">Email</h4>
                  <p className="text-blubloom-text/60 font-light">hello@blubloom.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <Phone className="w-5 h-5 text-blubloom-dark" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-blubloom-dark mb-1">Phone</h4>
                  <p className="text-blubloom-text/60 font-light">+91 11 4567 8900</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white p-8 md:p-12 shadow-2xl shadow-blubloom-dark/5 rounded-sm border border-blubloom-dark/5 relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center min-h-[400px] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blubloom-gold/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <h3 className="font-serif text-3xl text-blubloom-dark mb-4">Request Received</h3>
                  <p className="text-blubloom-text/70 mb-8 max-w-xs mx-auto">
                    Thank you, {formData.name}. We will review your vision and be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-xs uppercase tracking-widest text-blubloom-gold hover:text-blubloom-dark transition-colors border-b border-blubloom-gold pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative">
                      <label htmlFor="name" className={labelClasses}>Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('name')}
                        placeholder="Your Name"
                      />
                      {errors.name && <ErrorTooltip message={errors.name} />}
                    </div>

                    <div className="group relative">
                      <label htmlFor="email" className={labelClasses}>Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('email')}
                        placeholder="email@example.com"
                      />
                      {errors.email && <ErrorTooltip message={errors.email} />}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="group relative">
                      <label htmlFor="phone" className={labelClasses}>Phone (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('phone')}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="group relative">
                      <label htmlFor="budget" className={labelClasses}>Estimated Budget</label>
                      <div className="relative">
                        <select 
                          id="budget" 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          className={`${inputClasses('budget')} appearance-none cursor-pointer`}
                        >
                          <option>₹40 Lakh - ₹80 Lakh</option>
                          <option>₹80 Lakh - ₹1.5 Cr</option>
                          <option>₹1.5 Cr - ₹3 Cr</option>
                          <option>₹3 Cr+</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-blubloom-dark/40">
                          <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label htmlFor="projectType" className={labelClasses}>Project Type</label>
                    <div className="relative">
                      <select 
                        id="projectType" 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses('projectType')} appearance-none cursor-pointer`}
                      >
                        <option>Full Home Renovation</option>
                        <option>Kitchen & Living</option>
                        <option>New Construction</option>
                        <option>Commercial / Hospitality</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-blubloom-dark/40">
                         <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label htmlFor="message" className={labelClasses}>Vision</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      className={`${inputClasses('message')} resize-none`}
                      placeholder="Tell us about your space and requirements..."
                    ></textarea>
                     {errors.message && <ErrorTooltip message={errors.message} />}
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group w-full bg-blubloom-dark text-white py-5 px-8 flex justify-between items-center hover:bg-blubloom-gold transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="uppercase tracking-[0.2em] text-xs font-bold">
                        {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
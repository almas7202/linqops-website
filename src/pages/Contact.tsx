
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle, Mail, Phone, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (!formRef.current) return;
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phoneNumber,
        message: data.message
      };
      
      // Send email using EmailJS with public key authentication
      // Replace with your actual EmailJS public key, service ID and template ID
      await emailjs.send(
        'service_981i7ho', // Your service ID
        'template_f99grj2', // Your template ID
        templateParams,
        'jD7NqF4UmJ-SQef6R' // Your public key
      );
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />
      
      {/* Hero Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your delivery operations? Schedule a demo or send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-8 lg:p-12">
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900 font-semibold flex items-center">
                    <User className="h-4 w-4 mr-2 text-blue-600" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Enter your full name"
                    className={`h-12 border-2 ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-blue-500 rounded-xl`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-semibold flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email address"
                    className={`h-12 border-2 ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-blue-500 rounded-xl`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-900 font-semibold flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    {...register('phoneNumber')}
                    placeholder="Enter your phone number"
                    className={`h-12 border-2 ${errors.phoneNumber ? 'border-red-300' : 'border-gray-200'} focus:border-blue-500 rounded-xl`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900 font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell us about your delivery operations and how we can help..."
                    rows={5}
                    className={`border-2 ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:border-blue-500 rounded-xl resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Demo Duration</h3>
                  <p className="text-gray-600">30-45 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

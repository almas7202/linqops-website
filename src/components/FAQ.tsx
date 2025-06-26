import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "What is LinqOps and how does it work?",
      answer: "LinqOps is a next-generation delivery operations platform that uses AI to optimize your entire delivery workflow. It integrates with your existing systems to provide real-time tracking, route optimization, and predictive analytics to improve efficiency and reduce costs."
    },
    {
      question: "How quickly can I get started with LinqOps?",
      answer: "You can get started in minutes! Our platform offers quick setup with pre-built integrations for major e-commerce platforms and delivery services. Most businesses are up and running within 24 hours with full support from our onboarding team."
    },
    {
      question: "What types of businesses can use LinqOps?",
      answer: "LinqOps is designed for any business with delivery operations - from small e-commerce stores to large enterprise logistics companies. We serve food delivery, retail, healthcare, automotive parts, and many other industries."
    },
    {
      question: "How does the AI optimization work?",
      answer: "Our AI analyzes multiple factors including traffic patterns, weather conditions, driver availability, and historical delivery data to optimize routes in real-time. This results in faster deliveries, reduced fuel costs, and improved customer satisfaction."
    },
    {
      question: "Is my data secure with LinqOps?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored securely and never shared with third parties without your explicit consent."
    },
    {
      question: "Do you offer integrations with existing systems?",
      answer: "Yes! LinqOps integrates with over 100+ platforms including Shopify, WooCommerce, Salesforce, and major delivery services. We also provide REST APIs and webhooks for custom integrations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also provide comprehensive documentation and training resources."
    },
    {
      question: "Can I try LinqOps before committing to a plan?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo to see how LinqOps works with your specific use case."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about LinqOps and how it can transform your delivery operations.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <AccordionTrigger className="text-left py-6 text-lg font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Contact Support
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
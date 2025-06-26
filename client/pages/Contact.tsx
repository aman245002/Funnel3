import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Dumbbell,
  Car,
  Train,
  Bus,
  MessageSquare,
  Calendar,
  Users,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fitness Street, Bandra West, Mumbai, Maharashtra 400050",
      additional: "Ground Floor, Elite Tower",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7541801374",
      additional: "Customer Support: +91 87654 32109",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@fitzone.in",
      additional: "Support: support@fitzone.in",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "24/7 Access Available",
      additional: "Reception: 6:00 AM - 11:00 PM",
    },
  ];

  const operatingHours = [
    {
      day: "Monday - Friday",
      hours: "5:00 AM - 12:00 AM",
      reception: "6:00 AM - 11:00 PM",
    },
    {
      day: "Saturday",
      hours: "5:00 AM - 12:00 AM",
      reception: "6:00 AM - 11:00 PM",
    },
    {
      day: "Sunday",
      hours: "5:00 AM - 12:00 AM",
      reception: "8:00 AM - 10:00 PM",
    },
    {
      day: "Public Holidays",
      hours: "6:00 AM - 10:00 PM",
      reception: "8:00 AM - 8:00 PM",
    },
  ];

  const transportOptions = [
    {
      icon: Train,
      title: "Metro",
      description: "Bandra Station - 5 min walk",
      details: "Western Line & Harbor Line",
    },
    {
      icon: Bus,
      title: "Bus",
      description: "Multiple bus routes available",
      details: "Routes: 215, 304, 422, 506",
    },
    {
      icon: Car,
      title: "Parking",
      description: "Free parking for members",
      details: "200+ parking spaces",
    },
  ];

  const services = [
    "General Inquiry",
    "Membership Information",
    "Personal Training",
    "Corporate Wellness",
    "Group Classes",
    "Facility Tour",
    "Technical Support",
    "Feedback",
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      message:
        "FitZone has transformed my fitness journey. The staff is incredibly supportive!",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Business Owner",
      message: "Best gym in Mumbai! Modern equipment and excellent facilities.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "Marketing Manager",
      message:
        "The personal trainers here are amazing. Achieved my goals in just 3 months!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to start your fitness journey? We're here to help you every
              step of the way. Contact us today for more information.
            </p>
            <Badge className="bg-primary text-white text-lg px-6 py-2">
              Quick Response • Expert Guidance • Free Consultation
            </Badge>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full border border-primary/20"
        />
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-primary">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what's most convenient for you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-2">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-sm">{info.additional}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll be in touch soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interest
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your fitness goals, questions, or how we can help you..."
                          rows={5}
                          required
                          className="w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-80 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        FitZone Location
                      </h3>
                      <p className="text-gray-700">
                        123 Fitness Street, Bandra West
                        <br />
                        Mumbai, Maharashtra 400050
                      </p>
                      <Button className="mt-4 bg-primary hover:bg-primary/90">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Transportation Options */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    How to Reach Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transportOptions.map((transport, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="bg-primary/10 p-2 rounded-full">
                          <transport.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {transport.title}
                          </h4>
                          <p className="text-gray-700">
                            {transport.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            {transport.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Operating <span className="text-primary">Hours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here when you need us. Flexible hours to fit your schedule.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Clock className="h-8 w-8 text-primary" />
                      Gym Access Hours
                    </h3>
                    <div className="space-y-4">
                      {operatingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <div className="font-semibold text-gray-900">
                              {schedule.day}
                            </div>
                            <div className="text-sm text-gray-600">
                              Reception: {schedule.reception}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">
                              {schedule.hours}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <MessageSquare className="h-8 w-8 text-primary" />
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Emergency Contact
                        </h4>
                        <p className="text-gray-700">+91 98765 43210</p>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Membership Inquiries
                        </h4>
                        <p className="text-gray-700">info@fitzone.in</p>
                        <p className="text-sm text-gray-600">
                          Response within 2 hours
                        </p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          WhatsApp Support
                        </h4>
                        <p className="text-gray-700">+91 87654 32109</p>
                        <p className="text-sm text-gray-600">Quick responses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Members <span className="text-primary">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our community has to
              say.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.message}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600" />
        <div className="relative container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Follow Us on Social Media
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Stay connected for fitness tips, workout videos, and community
              updates.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: Instagram, label: "@fitzone_mumbai" },
                { icon: Facebook, label: "FitZone Mumbai" },
                { icon: Twitter, label: "@fitzonemumbai" },
                { icon: Youtube, label: "FitZone Fitness" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon className="h-8 w-8" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Book a Free Tour</h3>
                <p className="text-orange-100 mb-6">
                  Visit our facility and see what makes FitZone special.
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Schedule Tour
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-orange-100 mb-6">
                  Become part of the FitZone family and transform your life.
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Start Today
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Fit<span className="text-primary">Zone</span>
                </span>
              </div>
              <p className="text-gray-400">
                Transform your body and mind with our premium fitness facilities
                and expert guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <p>Home</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Contact</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Personal Training</p>
                <p>Group Classes</p>
                <p>Nutrition Counseling</p>
                <p>Corporate Wellness</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Fitness Street, Mumbai</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@fitzone.in</p>
                <p>🕒 24/7 Access Available</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

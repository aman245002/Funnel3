import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Dumbbell,
  Clock,
  Star,
  ArrowRight,
  Droplets,
  Shirt,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
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

  const features = [
    {
      icon: Dumbbell,
      title: "Latest Equipment",
      description: "State-of-the-art fitness equipment from leading brands",
    },
    {
      icon: Droplets,
      title: "Free Drinking Water",
      description: "Complimentary purified water to keep you hydrated",
    },
    {
      icon: Shirt,
      title: "Free Towels",
      description: "Clean, fresh towels provided for every workout session",
    },
    {
      icon: Lightbulb,
      title: "LED Lighting",
      description: "Energy-efficient LED lighting for optimal workout ambiance",
    },
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Expert Trainers" },
    { number: "24/7", label: "Access Available" },
    { number: "100+", label: "Equipment Pieces" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-dark via-fitness-gray to-fitness-dark opacity-95" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg')`,
          }}
        />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Transform Your
              <span className="block text-primary">Body & Mind</span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto"
            >
              Experience the ultimate fitness journey at FitZone.
              State-of-the-art equipment, expert trainers, and a community that
              motivates you to achieve your goals.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Watch Our Story
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating 3D Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-16 hidden lg:block"
        >
          <div className="w-16 h-16 bg-accent/20 rounded-full backdrop-blur-md border border-accent/30" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">FitZone</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need for a successful fitness journey,
              from cutting-edge equipment to personalized training programs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Equipment for
                <span className="block text-primary">Maximum Results</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our gym features the latest cardiovascular and strength training
                equipment from world-renowned brands, ensuring you have the best
                tools for your workout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/features">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Equipment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-gray-900"
                >
                  Book a Tour
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5327476/pexels-photo-5327476.jpeg"
                  alt="Modern gym equipment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg"
                  alt="Personal training session"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              </div>

              {/* Achievement badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Award className="h-8 w-8 text-primary" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Trainers
                <span className="block text-primary">
                  Personalized Guidance
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our certified personal trainers are here to help you achieve
                your fitness goals with customized workout plans and ongoing
                support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">1-on-1 Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">Progress Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">Nutrition Guidance</span>
                </div>
              </div>

              <Link to="/pricing">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white"
                >
                  View Training Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Join FitZone today and experience the difference our premium
            facilities, expert trainers, and supportive community can make in
            achieving your goals.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
        />
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
              <div className="space-y-2">
                <Link
                  to="/features"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Personal Training</p>
                <p>Group Classes</p>
                <p>Nutrition Counseling</p>
                <p>Equipment Training</p>
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

export default Index;

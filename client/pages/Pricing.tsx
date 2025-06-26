import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  Crown,
  Star,
  Dumbbell,
  Users,
  Clock,
  Trophy,
  Heart,
  ArrowRight,
  Zap,
  Target,
  Award,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Pricing = () => {
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

  const membershipPlans = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      popular: false,
      color: "gray",
      features: [
        "Gym access (6 AM - 10 PM)",
        "Basic equipment usage",
        "Locker facility",
        "Free towel service",
        "Free drinking water",
        "Basic fitness assessment",
        "Group classes (2 per week)",
        "Mobile app access",
      ],
      trainerOptions: {
        monthly: 8000,
        sessions: 8,
        sessionPrice: 1000,
      },
    },
    {
      name: "Premium",
      description: "Most popular choice",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      popular: true,
      color: "primary",
      features: [
        "24/7 gym access",
        "All equipment access",
        "Premium locker facility",
        "Free towel service",
        "Free drinking water",
        "Detailed fitness assessment",
        "Unlimited group classes",
        "Swimming pool access",
        "Mobile app access",
        "Guest passes (2 per month)",
        "Nutrition guidance",
        "Progress tracking",
      ],
      trainerOptions: {
        monthly: 12000,
        sessions: 12,
        sessionPrice: 1000,
      },
    },
    {
      name: "Elite",
      description: "Ultimate fitness experience",
      monthlyPrice: 7999,
      yearlyPrice: 79990,
      popular: false,
      color: "accent",
      features: [
        "24/7 gym access",
        "All equipment access",
        "VIP locker facility",
        "Premium towel service",
        "Free drinking water",
        "Comprehensive fitness assessment",
        "Unlimited group classes",
        "Swimming pool access",
        "Sauna & steam room",
        "Mobile app access",
        "Guest passes (4 per month)",
        "Personal nutrition plan",
        "Progress tracking",
        "Recovery zone access",
        "Priority booking",
        "Concierge service",
      ],
      trainerOptions: {
        monthly: 15000,
        sessions: 16,
        sessionPrice: 937.5,
      },
    },
  ];

  const personalTrainerPackages = [
    {
      name: "Starter",
      sessions: 4,
      duration: "1 Month",
      price: 4500,
      pricePerSession: 1125,
      features: [
        "1-on-1 personal training",
        "Customized workout plan",
        "Basic nutrition guidance",
        "Progress assessment",
        "Form correction",
      ],
    },
    {
      name: "Professional",
      sessions: 8,
      duration: "1 Month",
      price: 8000,
      pricePerSession: 1000,
      popular: true,
      features: [
        "1-on-1 personal training",
        "Customized workout plan",
        "Detailed nutrition plan",
        "Body composition analysis",
        "Progress tracking",
        "Form correction",
        "Goal-specific training",
        "Supplement guidance",
      ],
    },
    {
      name: "Champion",
      sessions: 12,
      duration: "1 Month",
      price: 11250,
      pricePerSession: 937.5,
      features: [
        "1-on-1 personal training",
        "Customized workout plan",
        "Comprehensive nutrition plan",
        "Body composition analysis",
        "Progress tracking",
        "Form correction",
        "Goal-specific training",
        "Supplement guidance",
        "Recovery planning",
        "Lifestyle coaching",
      ],
    },
  ];

  const corporatePackages = [
    {
      name: "Team Fitness",
      employees: "5-15",
      monthlyPrice: 12500,
      features: [
        "Group membership rates",
        "Flexible scheduling",
        "Team building activities",
        "Basic health assessments",
        "Monthly progress reports",
      ],
    },
    {
      name: "Corporate Wellness",
      employees: "16-50",
      monthlyPrice: 35000,
      features: [
        "Discounted membership rates",
        "On-site fitness sessions",
        "Wellness workshops",
        "Health screenings",
        "Quarterly fitness challenges",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise Health",
      employees: "50+",
      monthlyPrice: "Custom",
      features: [
        "Customized corporate rates",
        "On-site gym setup consulting",
        "Executive health programs",
        "Comprehensive wellness platform",
        "Annual health assessments",
        "24/7 support",
        "Custom reporting",
      ],
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
              Flexible
              <span className="block text-primary">Pricing Plans</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans
              include access to our premium facilities and expert support.
            </p>
            <Badge className="bg-primary text-white text-lg px-6 py-2">
              No Hidden Fees • Cancel Anytime • Money Back Guarantee
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

      {/* Membership Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Membership <span className="text-primary">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include access to our state-of-the-art equipment,
              premium amenities, and expert support. Personal training can be
              added to any plan.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-white px-6 py-2 text-sm font-semibold">
                      <Crown className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full border-2 ${
                    plan.popular
                      ? "border-primary shadow-2xl"
                      : "border-gray-200 shadow-lg"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">
                        ₹{plan.monthlyPrice.toLocaleString("en-IN")}
                        <span className="text-lg font-normal text-gray-600">
                          /month
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        or ₹{plan.yearlyPrice.toLocaleString("en-IN")}/year
                        <span className="text-accent font-semibold ml-1">
                          (Save ₹
                          {(
                            plan.monthlyPrice * 12 -
                            plan.yearlyPrice
                          ).toLocaleString("en-IN")}
                          )
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Add Personal Training:
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">
                            {plan.trainerOptions.sessions} sessions/month
                          </span>
                          <span className="font-semibold text-gray-900">
                            +₹
                            {plan.trainerOptions.monthly.toLocaleString(
                              "en-IN",
                            )}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          ₹{plan.trainerOptions.sessionPrice}/session
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-secondary hover:bg-secondary/90"
                      } text-white`}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Training Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Personal Training <span className="text-primary">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with certified personal trainers to achieve your goals faster
              with customized workout plans and expert guidance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {personalTrainerPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-accent text-white px-6 py-2 text-sm font-semibold">
                      <Star className="h-4 w-4 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full border-2 ${
                    pkg.popular
                      ? "border-accent shadow-2xl"
                      : "border-gray-200 shadow-lg"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-sm text-gray-600 mb-4">
                      {pkg.sessions} sessions • {pkg.duration}
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </div>
                      <div className="text-sm text-gray-500">
                        ₹{Math.round(pkg.pricePerSession)}/session
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-accent hover:bg-accent/90"
                          : "bg-secondary hover:bg-secondary/90"
                      } text-white`}
                      size="lg"
                    >
                      Book Now
                      <Target className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate <span className="text-primary">Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invest in your team's health and productivity with our corporate
              wellness programs designed for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-sm text-gray-600 mb-4">
                      {pkg.employees} employees
                    </div>
                    <div className="text-4xl font-bold text-gray-900">
                      {typeof pkg.monthlyPrice === "string" ? (
                        pkg.monthlyPrice
                      ) : (
                        <>
                          ₹{pkg.monthlyPrice.toLocaleString("en-IN")}
                          <span className="text-lg font-normal text-gray-600">
                            /month
                          </span>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      size="lg"
                    >
                      {typeof pkg.monthlyPrice === "string"
                        ? "Get Quote"
                        : "Get Started"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">FitZone</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our value proposition with other fitness centers in the
              area.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Dumbbell,
                title: "Premium Equipment",
                description: "Latest fitness technology worth ₹2 crores",
              },
              {
                icon: Users,
                title: "Expert Trainers",
                description:
                  "50+ certified professionals with 5+ years experience",
              },
              {
                icon: Clock,
                title: "24/7 Access",
                description:
                  "Round-the-clock availability for your convenience",
              },
              {
                icon: Heart,
                title: "Holistic Wellness",
                description: "Complete health and fitness ecosystem",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600" />
        <div className="relative container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Limited Time Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-3xl font-bold mb-4">
                  New Member Special
                </div>
                <div className="text-xl mb-4">
                  Get{" "}
                  <span className="text-orange-200 font-bold">
                    1 month FREE
                  </span>
                  <br />
                  on annual membership
                </div>
                <Badge className="bg-orange-500 text-white">
                  Save up to ₹7,999
                </Badge>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-3xl font-bold mb-4">Refer & Earn</div>
                <div className="text-xl mb-4">
                  Get{" "}
                  <span className="text-orange-200 font-bold">
                    ₹2,000 credit
                  </span>
                  <br />
                  for each successful referral
                </div>
                <Badge className="bg-orange-500 text-white">
                  Unlimited referrals
                </Badge>
              </div>
            </div>
            <div className="mt-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  Claim Your Offer
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons with appropriate documentation.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No hidden fees. All costs are transparent. The only additional cost would be personal training if you choose to add it.",
              },
              {
                question: "Can I cancel my membership anytime?",
                answer:
                  "Yes, you can cancel with 30 days notice. Annual memberships can be cancelled with a small processing fee after 6 months.",
              },
              {
                question: "Do you offer trial memberships?",
                answer:
                  "Yes, we offer a 3-day free trial for new members to experience our facilities before committing to a membership.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit/debit cards, UPI, bank transfers, and EMI options for annual memberships.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
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
              <h3 className="font-semibold mb-4">Membership Plans</h3>
              <div className="space-y-2 text-gray-400">
                <p>Basic - ₹2,999/month</p>
                <p>Premium - ₹4,999/month</p>
                <p>Elite - ₹7,999/month</p>
                <p>Corporate Packages</p>
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
              <h3 className="font-semibold mb-4">Contact</h3>
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

export default Pricing;

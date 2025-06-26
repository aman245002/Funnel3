import { motion } from "framer-motion";
import {
  Dumbbell,
  Heart,
  Droplets,
  Shirt,
  Lightbulb,
  Wifi,
  Car,
  Shield,
  Clock,
  Users,
  Camera,
  Wind,
  Zap,
  Music,
  TrendingUp,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Features = () => {
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

  const equipmentCategories = [
    {
      title: "Cardio Equipment",
      description: "Latest cardiovascular machines for optimal heart health",
      image:
        "https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg",
      items: [
        "Premium Treadmills with Touch Screens",
        "Elliptical Cross Trainers",
        "Stationary Bikes & Spin Bikes",
        "Rowing Machines",
        "Stair Climbers",
        "Arc Trainers",
      ],
    },
    {
      title: "Strength Training",
      description: "Professional grade equipment for building muscle and power",
      image:
        "https://images.pexels.com/photos/5327476/pexels-photo-5327476.jpeg",
      items: [
        "Olympic Weight Sets",
        "Power Racks & Squat Racks",
        "Cable Machines",
        "Smith Machines",
        "Adjustable Dumbbells (5-50kg)",
        "Plate-Loaded Machines",
      ],
    },
    {
      title: "Functional Training",
      description: "Versatile equipment for dynamic and functional movements",
      image:
        "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg",
      items: [
        "TRX Suspension Trainers",
        "Kettlebells & Medicine Balls",
        "Battle Ropes",
        "Resistance Bands",
        "Plyometric Boxes",
        "Agility Ladders",
      ],
    },
  ];

  const premiumAmenities = [
    {
      icon: Lightbulb,
      title: "LED Smart Lighting",
      description:
        "Energy-efficient LED lighting system with mood settings for optimal workout ambiance",
      features: [
        "Color temperature control",
        "Motion sensors",
        "Energy efficient",
        "Eye-friendly",
      ],
    },
    {
      icon: Droplets,
      title: "Premium Water System",
      description:
        "Complimentary purified water stations throughout the facility",
      features: [
        "RO purified water",
        "Hot & cold dispensers",
        "Unlimited access",
        "Eco-friendly bottles",
      ],
    },
    {
      icon: Shirt,
      title: "Fresh Towel Service",
      description:
        "Clean, premium-quality towels provided for every workout session",
      features: [
        "100% cotton towels",
        "Antimicrobial treated",
        "Multiple sizes",
        "Always fresh",
      ],
    },
    {
      icon: Wind,
      title: "Climate Control",
      description:
        "Advanced HVAC system maintaining perfect temperature and air quality",
      features: [
        "Central air conditioning",
        "Air purification",
        "Humidity control",
        "24/7 monitoring",
      ],
    },
    {
      icon: Camera,
      title: "Security & Monitoring",
      description:
        "Comprehensive security system with 24/7 surveillance for your safety",
      features: [
        "CCTV coverage",
        "Access control",
        "Emergency systems",
        "Trained security",
      ],
    },
    {
      icon: Music,
      title: "Audio System",
      description:
        "Premium sound system with motivational music and personal audio zones",
      features: [
        "Surround sound",
        "Multiple zones",
        "Playlist variety",
        "Noise control",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Round-the-clock access with secure keycard entry system",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Ample parking space available for all members",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the facility",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Emergency equipment and trained staff on-site",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Variety of fitness classes led by certified instructors",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Digital fitness tracking and progress monitoring",
    },
  ];

  const specialFeatures = [
    {
      title: "Swimming Pool",
      description:
        "Olympic-size swimming pool with lane markings and diving board",
      image:
        "https://images.pexels.com/photos/7061667/pexels-photo-7061667.jpeg",
      highlights: [
        "25m Olympic pool",
        "Heated water",
        "Lane markings",
        "Lifeguard on duty",
      ],
    },
    {
      title: "Recovery Zone",
      description: "Dedicated area for stretching, meditation, and recovery",
      image:
        "https://images.pexels.com/photos/5000221/pexels-photo-5000221.jpeg",
      highlights: [
        "Yoga mats provided",
        "Massage chairs",
        "Foam rollers",
        "Quiet environment",
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
              World-Class
              <span className="block text-primary">Fitness Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the ultimate in fitness technology and amenities. Every
              detail is designed to elevate your workout experience.
            </p>
            <Badge className="bg-primary text-white text-lg px-6 py-2">
              Premium Equipment • Modern Amenities • Expert Support
            </Badge>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full border border-primary/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full border border-accent/20"
        />
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Gym <span className="text-primary">Equipment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility features the most advanced fitness equipment from
              leading manufacturers, ensuring you have the best tools for your
              fitness journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <Dumbbell className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-gray-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium <span className="text-primary">Amenities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every amenity is carefully selected to enhance your comfort and
              workout experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {premiumAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <amenity.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {amenity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{amenity.description}</p>
                    <div className="space-y-2">
                      {amenity.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exclusive <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go beyond traditional workouts with our specialized facilities
              designed for complete wellness.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <div className="relative h-80">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-200 mb-4">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center gap-2"
                      >
                        <Heart className="h-4 w-4 text-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You <span className="text-primary">Need</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From basic necessities to luxury amenities, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600" />
        <div className="relative container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Fitness
                <span className="block">Technology</span>
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Experience the future of fitness with our integrated technology
                solutions designed to optimize your workout and track your
                progress.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-orange-200" />
                  <span className="font-medium">Progress Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-orange-200" />
                  <span className="font-medium">Smart Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-orange-200" />
                  <span className="font-medium">Health Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-orange-200" />
                  <span className="font-medium">Goal Setting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">
                  FitZone App Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-300 rounded-full" />
                    <span>Real-time workout tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-300 rounded-full" />
                    <span>Equipment availability checker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-300 rounded-full" />
                    <span>Personal trainer booking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-300 rounded-full" />
                    <span>Class schedule & registration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-300 rounded-full" />
                    <span>Nutrition & meal planning</span>
                  </div>
                </div>
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
              <h3 className="font-semibold mb-4">Equipment</h3>
              <div className="space-y-2 text-gray-400">
                <p>Cardio Machines</p>
                <p>Strength Training</p>
                <p>Functional Equipment</p>
                <p>Swimming Pool</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Amenities</h3>
              <div className="space-y-2 text-gray-400">
                <p>LED Lighting</p>
                <p>Free Towels</p>
                <p>Premium Water</p>
                <p>Climate Control</p>
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

export default Features;

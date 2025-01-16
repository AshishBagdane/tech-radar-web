import { motion } from "framer-motion";
import { Radar, Zap, Code, Building2 } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: Radar,
      title: "Interactive Radar",
      description:
        "Visualize your technology landscape with our dynamic radar interface",
    },
    {
      icon: Zap,
      title: "Smart Analytics",
      description:
        "Make data-driven decisions with advanced analytics and insights",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description:
        "Seamless integration with your existing development workflow",
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      description: "Secure, scalable, and built for organizational needs",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Radar
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Navigate Your Technology Landscape with Confidence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 rounded-lg text-white font-semibold text-lg
                         shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-cyan-400
                         transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-700 border border-gray-600 hover:border-cyan-500/50
                           transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Ready to Transform Your Tech Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations in making data-driven technology
              decisions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-500 rounded-lg text-white font-semibold text-lg
                         shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:bg-purple-400
                         transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

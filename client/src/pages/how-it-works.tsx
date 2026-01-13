import { ShaderAnimation } from "@/components/ui/shader-animation";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import { Home, FileText, CreditCard, Info, CheckCircle2, Zap, Bot, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "How It Works", url: "/how-it-works", icon: FileText },
  { name: "Pricing", url: "#", icon: CreditCard },
  { name: "About", url: "#", icon: Info },
];

const steps = [
  {
    day: "Days 1-2",
    title: "Connect & Configure",
    description: "We integrate your entire tech stack. No manual work required.",
    icon: Zap,
    color: "from-teal-500 to-emerald-500",
    items: ["CRM Integration", "Lead Source Sync", "Calendar Hookup", "AI Phone Setup"]
  },
  {
    day: "Days 2-3",
    title: "Train Your AI Agents",
    description: "Custom AI trained on your specific scripts, brand voice, and market.",
    icon: Bot,
    color: "from-blue-500 to-purple-500",
    items: ["Buyer Specialist", "Seller Agent", "FSBO Expert", "Expired Specialist"]
  },
  {
    day: "Days 3-7+",
    title: "Launch & Scale",
    description: "Go live. Appointments start flowing directly to your calendar.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    items: ["Pilot Launch", "Performance Audit", "Full Scale (1k+ calls/day)", "CRM Auto-Sync"]
  }
];

export default function HowItWorks() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <AnimeNavBar items={navItems} defaultActive="How It Works" />
      
      <div className="fixed inset-0 z-0 opacity-40">
        <ShaderAnimation />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            From Setup to Appointments <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              in 72 Hours
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            No tech headaches. No training required. We handle everything while you focus on closing.
          </motion.p>
        </div>

        <div className="grid gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors">
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-4">
                      {step.day}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-white/60 mb-6 text-lg">{step.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {step.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-teal-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
          <p className="text-white/60 mb-8">Join the pilot program and see appointments flow in by this time next week.</p>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Apply For Pilot
          </button>
        </motion.div>
      </div>
    </div>
  );
}

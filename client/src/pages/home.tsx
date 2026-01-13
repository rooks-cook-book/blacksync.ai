import { ShaderAnimation } from "@/components/ui/shader-animation";
import { RainbowButton } from "@/components/ui/rainbow-borders-button";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { Button } from "@/components/ui/button";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import PricingCardTwo from "@/components/ui/pricing-card-triple";
import { 
  Home as HomeIcon, FileText, CreditCard, Info, X, Check, 
  BarChart3 as BarChart, PhoneIncoming, Play, ExternalLink, 
  Pause, Send, LayoutDashboard, UserSquare2, Phone, 
  Users, Wallet, Megaphone, Link2, Brain, Zap, 
  FileSearch, Activity, Database, CalendarCheck, LogIn,
  MessageSquare, RefreshCcw, HardHat, ChevronDown, User,
  Users as UsersIcon, Briefcase, PhoneCall, Building2,
  Users2, Landmark
} from "lucide-react";
import { GlowEffect } from "@/components/ui/glow-effect";
import { TextMorph } from "@/components/ui/text-morph";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AIVoiceInput } from "@/components/ui/ai-voice-input";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Import the dashboard screenshot
import dashboardImg from "@assets/Screen_Shot_2026-01-12_at_3.38.57_AM_1768207149355.png";

const navItems = [
  { name: "Home", url: "#home", icon: HomeIcon },
  { name: "Comparison", url: "#comparison", icon: BarChart },
  { name: "Pricing", url: "#pricing", icon: CreditCard },
  { name: "Mission Control", url: "#platform", icon: LayoutDashboard },
  { name: "FAQ", url: "#faq", icon: Info },
  { name: "Login", url: "https://ai.blacksync.network/", icon: LogIn },
];

const partners = [
  { alt: "Keller Williams", text: "Keller Williams" },
  { alt: "Berkshire Hathaway", text: "Berkshire Hathaway" },
  { alt: "Compass", text: "Compass" },
  { alt: "eXp Realty", text: "eXp Realty" },
  { alt: "Berkshaw Realty", text: "Berkshaw Realty" },
  { alt: "City Edge", text: "City Edge" },
  { alt: "Arabian Estate", text: "Arabian Estate" },
];

const comparisonData = [
  { feature: "Direct Cost", human: "$4,000–$6,000/mo (Salary + Taxes)", ai: "A fraction of a salary (No payroll tax/overhead)" },
  { feature: "Operational ROI", human: "1x Work for 1x Pay", ai: "10x Work for 0.1x the Cost" },
  { feature: "Speed to Lead", human: "5–60 Minutes (Leads go cold)", ai: "< 6 Seconds (While the lead is on your site)" },
  { feature: "Lead Penetration", human: "2–3 follow-up attempts avg.", ai: "Infinite & Relentless (Until they opt-out or book)" },
  { feature: "Production Capacity", human: "30–50 calls/day (Max capacity)", ai: "5,000+ calls/day (Total market saturation)" },
  { feature: "Availability", human: "9–5 (Misses 60% of evening leads)", ai: "24/7/365 (Own the \"After-Hours\" market)" },
  { feature: "Reliability", human: "Quits, gets sick, needs \"motivation\"", ai: "Zero Turnover. Permanent digital asset." },
  { feature: "Emotional Intelligence", human: "Varies by mood and \"burnout\"", ai: "Perfect Tonality & empathy every single time." },
  { feature: "Data Integrity", human: "Manual, messy CRM notes", ai: "Instant Deep-Sync (Full transcripts & summaries)" },
  { feature: "Scalability", human: "2-month hiring & training lag", ai: "Instant. Deploy 100 agents in 60 seconds." },
];

const platformFeatures = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "Real-time visibility into mission-critical metrics and call volume analytics." },
  { icon: UserSquare2, title: "Agents", desc: "Build and train custom AI specialists for Sellers, FSBOs, and Expired listings." },
  { icon: Phone, title: "Phone Numbers", desc: "Provision AI-powered phone lines and configure smart routing." },
  { icon: Users, title: "Contacts", desc: "Centralized management for your lead lists and past client databases." },
  { icon: Wallet, title: "Credits", desc: "Transparent tracking of call usage and billing." },
  { icon: Megaphone, title: "Campaign", desc: "Deploy multi-touch sequences tailored to specific lead types." },
  { icon: Link2, title: "Integrations", desc: "Native sync with Command, Follow Up Boss, KvCore, and Sierra Interactive." },
];

const workflowSteps = [
  { icon: Zap, title: "Autonomous Engagement", desc: "AI agents use trained scripts to qualify leads in natural language." },
  { icon: FileSearch, title: "Neural Transcription", desc: "Every word is captured live for 100% transparency." },
  { icon: Brain, title: "Sentiment Intelligence", desc: "Our models score lead quality to identify high-motivation prospects." },
  { icon: Activity, title: "CRM Direct-Injection", desc: "Pushed instantly to your CRM with audio and transcript." },
  { icon: CalendarCheck, title: "Auto-Booking", desc: "Verified appointments synced directly to your calendar." },
];

const faqs = [
  { q: "Is this a 'white glove' service?", a: "Yes, absolutely. Our engineers handle everything from building your agents to training them on your specific scripts for FSBOs, Expireds, and Buyer ponds." },
  { q: "How many calls can the AI make?", a: "Volume is built to scale. Our AI can dial hundreds of leads simultaneously, achieving total market saturation in minutes." },
  { q: "What happens if a lead doesn't pick up?", a: "The AI automatically leaves a professional, personalized voicemail and adds the lead to a smart redial campaign for follow-up." },
  { q: "How does the CRM integration work?", a: "We offer native, deep-sync integrations with Command, Follow Up Boss, KvCore, and more. Successful calls are pushed back instantly with full transcripts and audio recordings." },
  { q: "Does it book appointments?", a: "Yes. Once a lead is qualified, the AI can check your availability and book them directly onto your calendar." },
];

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [pilotFormData, setPilotFormData] = useState({
    name: "",
    phone: "",
    email: "",
    crm: "",
    teamSize: "",
    leadVolume: ""
  });
  const [isPilotSubmitting, setIsPilotSubmitting] = useState(false);
  const [pilotStatus, setPilotStatus] = useState<"idle" | "triggering" | "success">("idle");
  const pilotFormRef = useRef<HTMLDivElement>(null);

  const scrollToPilot = () => {
    pilotFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePilotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPilotSubmitting(true);
    setPilotStatus("triggering");

    try {
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzNjA0MzQ1MjY0NTUzYzUxMzAi_pc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pilotFormData),
      });

      if (response.ok) {
        setPilotStatus("success");
        toast({
          title: "Application Received",
          description: "Check your phone. Our AI is calling you now.",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setPilotStatus("idle");
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPilotSubmitting(false);
    }
  };

  const openCal = () => {
    window.open('https://cal.com/hamza-basal-v1hqkl/15min', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzNjA0MzQ1MjZhNTUzMDUxMzQi_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your sample call request has been sent!",
        });
        setFormData({ name: "", email: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-black text-white scroll-smooth overflow-x-hidden">
      <AnimeNavBar items={navItems} />
      
      <div className="fixed inset-0 z-0 opacity-40">
        <ShaderAnimation />
      </div>
      
      {/* Hero Section */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4 pt-32">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 whitespace-pre-wrap leading-[0.9]">
          Speed Closes Deals,<br />Volume Dominates Markets
        </h1>
        
        <p className="text-lg md:text-2xl font-medium max-w-2xl text-white/80 mb-10">
          1,000 leads before lunch, 100 calls in minutes — not hours!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mb-20">
          <div className="flex flex-col items-center gap-2">
            <RainbowButton onClick={scrollToPilot}>
              Apply for our Pilot program
            </RainbowButton>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest animate-pulse">Its free.</span>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[180px] h-12 rounded-xl bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold backdrop-blur-sm transition-all"
            onClick={openCal}
          >
            Talk to an Expert
          </Button>
        </div>

        <div className="w-full max-w-5xl px-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
            Trusted By teams at
          </p>
          <LogoCloud logos={partners} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Get Sample Call Section */}
      <section className="relative z-10 py-20 px-6 border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-teal-400/10 text-teal-400 border-teal-400/20">Sample Call</Badge>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Get a Sample Call</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Enter your details below and we'll send a personalized sample AI call directly to your inbox.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <Input 
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-teal-400"
            />
            <Input 
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus-visible:ring-teal-400"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-400 hover:bg-teal-500 text-black font-bold h-12 px-8 rounded-xl flex items-center gap-2 transition-all w-full md:w-auto shrink-0"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  <Send className="w-4 h-4" />
                  Get Sample
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                Human ISA vs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                  BlackSync AI
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                Stop overpaying for human limitations. Own a permanent digital asset that never sleeps.
              </p>
            </div>
          }
        >
          <div className="w-full h-full overflow-auto bg-zinc-900 p-4 md:p-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-2 text-white/50 font-medium uppercase tracking-wider text-sm">Feature</th>
                  <th className="text-left py-4 px-2 text-red-400 font-bold uppercase tracking-wider text-sm">Human ISA ❌</th>
                  <th className="text-left py-4 px-2 text-teal-400 font-bold uppercase tracking-wider text-sm">BlackSync AI ✅</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-2 font-bold text-white text-sm md:text-base">{row.feature}</td>
                    <td className="py-4 px-2 text-white/60 text-xs md:text-sm">{row.human}</td>
                    <td className="py-4 px-2 text-white font-semibold text-xs md:text-sm bg-teal-400/5 group-hover:bg-teal-400/10 transition-colors">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContainerScroll>
      </section>

      {/* AI Mission Control Section */}
      <section id="platform" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-400/10 text-purple-400 border-purple-400/20 text-xs">Mission Control</Badge>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
              The BlackSync Platform: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Your AI Mission Control
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
              A complete **white-glove setup**. Our engineers build and train your agents for FSBO, Expireds, Listing, and Buyer ponds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
                  <HardHat className="text-purple-400" />
                  White-Glove Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {platformFeatures.map((f, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all group">
                      <f.icon className="w-5 h-5 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
                  <Zap className="text-teal-400" />
                  Smart Call Processing
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-400/5 to-transparent border-l-2 border-teal-400/30">
                    <div className="mt-1 p-2 rounded-lg bg-teal-400/10">
                      <PhoneIncoming className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Massive Dialing Scale</h4>
                      <p className="text-xs text-white/50">Dials hundreds of leads at a time. ACHIEVE total market saturation in minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-400/5 to-transparent border-l-2 border-teal-400/30">
                    <div className="mt-1 p-2 rounded-lg bg-teal-400/10">
                      <MessageSquare className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Smart Voicemail & Follow-up</h4>
                      <p className="text-xs text-white/50">Leaves personalized voicemails and automatically adds leads to redial campaigns.</p>
                    </div>
                  </div>
                  {workflowSteps.slice(2).map((s, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-400/5 to-transparent border-l-2 border-teal-400/30">
                      <div className="mt-1 p-2 rounded-lg bg-teal-400/10">
                        <s.icon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{s.title}</h4>
                        <p className="text-xs text-white/50">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky top-32">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                  <img 
                    src={dashboardImg} 
                    alt="BlackSync AI Dashboard" 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-widest uppercase">Live Intelligence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Feature id="how-it-works" />

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-teal-400/10 text-teal-400 border-teal-400/20 text-xs">Pricing Plans</Badge>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Scale</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Flexible tiers designed for solo agents to enterprise brokerages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCardTwo
              tone="zinc"
              icon={<User />}
              name="Startup"
              subtitle="Best For: Solo Agents"
              price="Apply"
              periodLabel="for Pilot"
              features={[
                { label: "2,500 Monthly Calls Included" },
                { label: "Pick 1 Specialized AI Agent" },
                { label: "Buyer, FSBO, or Expired Specialist" },
                { label: "Basic CRM Email Alerts" },
                { label: "Full Transcripts + Audio" },
                { label: "Standard Outreach Campaigns" },
              ]}
              cta={{ onClick: scrollToPilot, label: "Apply for Pilot" }}
            />

            <PricingCardTwo
              tone="blue"
              icon={<UsersIcon />}
              name="Agency"
              subtitle="Best For: High-Volume Growth Teams"
              price="Apply"
              periodLabel="for Pilot"
              features={[
                { label: "5,000 Monthly Calls Included" },
                { label: "Full Agent Arsenal Deployment" },
                { label: "Buyer, Seller, FSBO, Expired" },
                { label: "Full Bidirectional CRM Sync" },
                { label: "Auto-Booked to Agent Calendar" },
                { label: "Multi-Touch Redial Sequences" },
              ]}
              cta={{ onClick: scrollToPilot, label: "Apply for Pilot" }}
            />

            <PricingCardTwo
              tone="amber"
              icon={<Briefcase />}
              name="Enterprise"
              subtitle="Best For: Large Brokerages"
              price="Let's"
              periodLabel="Talk"
              features={[
                { label: "Scalable / Unlimited Calls" },
                { label: "Unlimited Custom Personas" },
                { label: "Custom API & White-Glove Support" },
                { label: "Advanced CRM Integrations" },
                { label: "A/B Script Testing & Geo-Farming" },
                { label: "Dedicated Account Management" },
              ]}
              cta={{ onClick: scrollToPilot, label: "Let's Talk" }}
            />
          </div>
        </div>
      </section>

      {/* Pilot Program Application Section */}
      <section id="apply-pilot" ref={pilotFormRef} className="relative z-10 py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-zinc-900/90 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">Pilot Access</Badge>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Apply for the BlackSync Pilot Program</h2>
                <p className="text-white/60">Our AI Onboarding Specialist will call you instantly to qualify your team.</p>
              </div>

              {pilotStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PhoneCall className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Check your phone!</h3>
                  <p className="text-white/60">Our AI is calling you now. Prepare for the future of lead conversion.</p>
                  <Button 
                    variant="ghost" 
                    className="mt-6 text-purple-400"
                    onClick={() => setPilotStatus("idle")}
                  >
                    Resubmit form
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handlePilotSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pilot-name">Full Name</Label>
                      <Input 
                        id="pilot-name"
                        required
                        value={pilotFormData.name}
                        onChange={(e) => setPilotFormData({...pilotFormData, name: e.target.value})}
                        className="bg-black/40 border-white/10 h-12"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pilot-phone">Phone Number</Label>
                      <Input 
                        id="pilot-phone"
                        type="tel"
                        required
                        value={pilotFormData.phone}
                        onChange={(e) => setPilotFormData({...pilotFormData, phone: e.target.value})}
                        className="bg-black/40 border-white/10 h-12"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pilot-email">Work Email</Label>
                      <Input 
                        id="pilot-email"
                        type="email"
                        required
                        value={pilotFormData.email}
                        onChange={(e) => setPilotFormData({...pilotFormData, email: e.target.value})}
                        className="bg-black/40 border-white/10 h-12"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pilot-crm">CRM Currently Used</Label>
                      <Input 
                        id="pilot-crm"
                        required
                        value={pilotFormData.crm}
                        onChange={(e) => setPilotFormData({...pilotFormData, crm: e.target.value})}
                        className="bg-black/40 border-white/10 h-12"
                        placeholder="Follow Up Boss, KvCore, etc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Team Size</Label>
                      <Select 
                        onValueChange={(v) => setPilotFormData({...pilotFormData, teamSize: v})}
                        required
                      >
                        <SelectTrigger className="bg-black/40 border-white/10 h-12">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 agents</SelectItem>
                          <SelectItem value="4-8">4-8 agents</SelectItem>
                          <SelectItem value="10+">10+ agents</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Lead Volume</Label>
                      <Select 
                        onValueChange={(v) => setPilotFormData({...pilotFormData, leadVolume: v})}
                        required
                      >
                        <SelectTrigger className="bg-black/40 border-white/10 h-12">
                          <SelectValue placeholder="Select lead volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-100">0-100 leads</SelectItem>
                          <SelectItem value="100-500">100-500 leads</SelectItem>
                          <SelectItem value="500+">500+ leads</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="relative mt-10">
                    <Button 
                      type="submit"
                      disabled={isPilotSubmitting}
                      className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-black text-lg rounded-xl relative overflow-hidden group/btn"
                    >
                      {pilotStatus === "triggering" && (
                        <GlowEffect
                          colors={['#A855F7', '#22D3EE', '#A855F7']}
                          mode='colorShift'
                          blur='soft'
                          duration={2}
                        />
                      )}
                      <TextMorph className="relative z-10">
                        {pilotStatus === "triggering" ? "Triggering AI Call..." : "Apply for Pilot Access"}
                      </TextMorph>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-zinc-400/10 text-zinc-400 border-zinc-400/20 text-xs">Knowledge Base</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/2 overflow-hidden no-default-hover-elevate">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-left font-bold text-lg">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to start?</h3>
          <p className="text-white/60 mb-8">Join the pilot program and see appointments flow in by this time next week.</p>
          <RainbowButton onClick={openCal}>
            Apply for our Pilot program
          </RainbowButton>
        </motion.div>
      </section>
    </div>
  );
}

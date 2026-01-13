import { User, Zap, Bot, Clock, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureProps {
  id?: string;
}

function Feature({ id }: FeatureProps) {
  const features = [
    {
      Icon: Zap,
      name: "Step 1: Connect & Configure",
      description: "We integrate your CRM (KW Command, FUB, KvCore), lead sources (PropStream, BatchLeads), and calendars in under 48 hours.",
      className: "lg:col-span-2",
    },
    {
      Icon: Bot,
      name: "Step 2: Train Your AI",
      description: "Custom AI agents trained on YOUR scripts and brand voice. From FSBO specialists to Expired Listing experts.",
      className: "",
    },
    {
      Icon: Clock,
      name: "Step 3: Pilot Launch",
      description: "Days 3-5: 50-100 test calls with real-time optimization. We validate performance before scaling.",
      className: "",
    },
    {
      Icon: Rocket,
      name: "Step 4: Scale to Dominance",
      description: "Day 6+: Ramp to 1,000+ calls daily. Instant CRM sync with transcripts and audio pushed to agents.",
      className: "lg:col-span-2",
    },
  ];

  return (
    <div id={id} className="w-full py-20 lg:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="outline" className="text-teal-400 border-teal-400/30 bg-teal-400/10">Process</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left text-white">
                From Setup to Appointments <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                  in 72 Hours
                </span>
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-white/60 text-left">
                No tech headaches. No training required. We handle everything while you focus on closing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={cn(
                  "bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex justify-between flex-col min-h-[300px] hover:border-white/20 transition-colors group",
                  feature.className
                )}
              >
                <feature.Icon className="w-10 h-10 text-teal-400 mb-8" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

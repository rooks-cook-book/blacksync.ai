import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  alt: string;
  text?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={64} reverse speed={40}>
        {logos.map((logo, idx) => (
          <div key={`${logo.alt}-${idx}`} className="flex items-center gap-2 px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logo.src ? (
              <img
                alt={logo.alt}
                className="h-6 md:h-8 object-contain dark:invert"
                src={logo.src}
              />
            ) : (
              <span className="text-xl md:text-2xl font-bold whitespace-nowrap text-white">
                {logo.text || logo.alt}
              </span>
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}

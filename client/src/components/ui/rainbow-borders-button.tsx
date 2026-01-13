import React from 'react';

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RainbowButton = ({ children, className, ...props }: RainbowButtonProps) => {
  return (
    <div className="relative group">
      <button 
        className="rainbow-border relative min-w-[200px] h-12 flex items-center justify-center gap-2.5 px-8 bg-black rounded-xl border-none text-white cursor-pointer font-bold transition-all duration-200"
        {...props}
      >
        {children}
      </button>
      
      <style>{`
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-radius: 12px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border::after {
          filter: blur(20px);
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .group:hover .rainbow-border::after {
          opacity: 0.8;
          filter: blur(30px);
        }
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};

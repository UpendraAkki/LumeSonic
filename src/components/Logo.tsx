import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-20 h-20 md:w-28 md:h-28',
    large: 'w-32 h-32 md:w-40 md:h-40'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#backgroundGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />
        
        {/* Inner Tech Pattern */}
        <g opacity="0.3">
          {/* Circuit-like lines */}
          <path
            d="M20 30 L35 30 L35 25 L50 25 L50 35 L65 35 L65 30 L80 30"
            stroke="#22c55e"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 70 L35 70 L35 75 L50 75 L50 65 L65 65 L65 70 L80 70"
            stroke="#22c55e"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M30 20 L30 35 L25 35 L25 50 L35 50 L35 65 L30 65 L30 80"
            stroke="#22c55e"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M70 20 L70 35 L75 35 L75 50 L65 50 L65 65 L70 65 L70 80"
            stroke="#22c55e"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
        
        {/* Central Letter U */}
        <g transform="translate(50, 50)">
          <path
            d="M-12 -15 L-12 5 Q-12 12 -5 12 L5 12 Q12 12 12 5 L12 -15"
            stroke="url(#letterGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner highlight */}
          <path
            d="M-8 -12 L-8 5 Q-8 8 -5 8 L5 8 Q8 8 8 5 L8 -12"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        
        {/* Decorative dots */}
        <circle cx="25" cy="25" r="2" fill="#22c55e" opacity="0.6"/>
        <circle cx="75" cy="25" r="2" fill="#22c55e" opacity="0.6"/>
        <circle cx="25" cy="75" r="2" fill="#22c55e" opacity="0.6"/>
        <circle cx="75" cy="75" r="2" fill="#22c55e" opacity="0.6"/>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="backgroundGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.8)" />
          </radialGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo; 
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#F7A600] text-white hover:bg-[#F7A600]/90",
    secondary: "bg-white text-[#F7A600] hover:bg-gray-100",
    outline: "border-2 border-[#F7A600] text-[#F7A600] hover:bg-[#F7A600] hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "w-[190px] h-[60px] text-lg"
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button; 
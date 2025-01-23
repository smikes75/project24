import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-white font-medium mb-4">{title}</h3>
      <div>
        {children}
      </div>
    </div>
  );
}
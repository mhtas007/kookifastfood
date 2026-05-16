import React from 'react';

export const FlagKurdistan = ({ className = "w-5 h-5 rounded-sm object-cover border border-black/10 shadow-sm" }: { className?: string }) => (
  <svg viewBox="0 0 600 400" className={className}>
    <rect width="600" height="400" fill="#fff"/>
    <rect width="600" height="133.3" fill="#eb2227"/>
    <rect width="600" height="133.3" y="266.7" fill="#279e46"/>
    <circle cx="300" cy="200" r="60" fill="#fdb813"/>
  </svg>
);

export const FlagUK = ({ className = "w-5 h-5 rounded-sm object-cover border border-black/10 shadow-sm overflow-hidden" }: { className?: string }) => (
  <svg viewBox="0 0 60 30" className={className}>
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

export const FlagIraq = ({ className = "w-5 h-5 rounded-sm object-cover border border-black/10 shadow-sm" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <rect width="60" height="40" fill="#fff"/>
    <rect width="60" height="13.33" fill="#ce1126"/>
    <rect width="60" height="13.33" y="26.66" fill="#000"/>
    <text x="30" y="24" fontSize="8" fontFamily="sans-serif" fill="#007a3d" textAnchor="middle" fontWeight="bold">الله أكبر</text>
  </svg>
);

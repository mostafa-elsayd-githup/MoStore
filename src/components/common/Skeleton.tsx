import React from 'react';

interface ProductSkeletonProps {
  count?: number; 
}

export const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count=6 }) => {
    
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-2 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border_card)',
          }}
          className="border rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-sm"
        >
          <div 
            style={{ backgroundColor: 'var(--bg-primary)' }}
            className="w-full h-48 rounded-lg animate-pulse"
          />
          <div 
            style={{ backgroundColor: 'var(--bg-primary)' }}
            className="w-4/5 h-5 rounded animate-pulse"
          />
          <div 
            style={{ backgroundColor: 'var(--bg-primary)' }}
            className="w-2/5 h-4 rounded animate-pulse"
          />

          <div 
            style={{ backgroundColor: 'var(--bg-primary)' }}
            className="w-full h-10 rounded-lg mt-2 animate-pulse"
          />
        </div>
      ))}
    </div>
  );
};
import { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const LoadingAnimation = ({ onComplete, duration = 2000 }: LoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 200);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo or company name */}
        <div className="text-4xl font-bold text-primary animate-pulse">
          MwanaWev
        </div>
        
        {/* Loading spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-primary/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading text */}
        <div className="text-sm text-muted-foreground animate-pulse">
          Loading Innovation...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;

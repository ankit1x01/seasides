'use client';

const SunsetHero = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
        
        .sunset-gradient {
          background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 20%, #F7931E 40%, #FFD23F 60%, #87CEEB 80%, #4682B4 100%);
        }
        
        .wave-gradient {
          background: linear-gradient(90deg, #87CEEB 0%, #4682B4 30%, #2E5CE6 60%, #1E3A8A 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: waveShimmer 3s ease-in-out infinite;
        }
        
        .curved-underline {
          position: relative;
        }
        
        .curved-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #87CEEB 0%, #4682B4 50%, #2E5CE6 100%);
          border-radius: 2px;
          animation: flowingWave 2s ease-in-out infinite;
        }
        
        .playfair-display {
          font-family: 'Playfair Display', serif;
        }
        
        .inter-font {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes waveShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes flowingWave {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scaleX(1.1);
            opacity: 0.8;
          }
        }
        
        .text-shadow {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .soft-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .fade-in-up-delayed {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
      `}</style>
      
      <section className="sunset-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Main content container */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Main headline */}
          <h1 className="playfair-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-shadow mb-6 fade-in-up leading-tight">
            The Future of{' '}
            <span className="wave-gradient font-bold">Seasides</span>
          </h1>
          
          {/* Subtitle with curved underline */}
          <div className="fade-in-up-delayed">
            <h2 className="inter-font text-2xl md:text-3xl lg:text-4xl font-medium text-orange-100 curved-underline soft-shadow mb-8">
              India&apos;s Most Loved Conference
            </h2>
          </div>
        </div>
        
        {/* Floating wave decorations */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg 
            className="w-full h-32 opacity-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,100 300,50 450,80 C600,110 750,60 900,80 C1050,100 1200,50 1200,80 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.3)"
              style={{ animation: 'flowingWave 4s ease-in-out infinite' }}
            />
          </svg>
        </div>
        
        {/* Additional wave layer */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg 
            className="w-full h-24 opacity-15" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,20 C200,80 400,20 600,50 C800,80 1000,30 1200,50 L1200,120 L0,120 Z" 
              fill="rgba(135,206,235,0.5)"
              style={{ animation: 'flowingWave 3s ease-in-out infinite reverse' }}
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SunsetHero;
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WaveAnimation() {
  const waveRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!waveRef.current || !pathRef.current) return;

    const wave = waveRef.current;
    const path = pathRef.current;
    
    interface Point {
      x: number;
      y: number;
    }
    
    const points: Point[] = [];
    const segments = 50;
    const height = 100;
    
    // Initialize points array with initial positions
    for (let i = 0; i <= segments; i++) {
      points.push({
        x: (i / segments) * 100,
        y: 50 + Math.sin((i / segments) * Math.PI * 2) * 10
      });
    }

    // Create the initial path
    let pathData = `M ${points[0].x},${points[0].y} `;
    for (let i = 1; i < points.length; i++) {
      pathData += `L ${points[i].x},${points[i].y} `;
    }
    path.setAttribute('d', pathData);

    // Animate on scroll
    gsap.to(points, {
      scrollTrigger: {
        trigger: wave,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          // Update points based on scroll progress
          points.forEach((point, i) => {
            const offset = (i / points.length) * Math.PI * 2;
            point.y = 50 + Math.sin(offset + self.progress * Math.PI * 4) * 10;
          });
          
          // Update path
          let newPath = `M ${points[0].x},${points[0].y} `;
          for (let i = 1; i < points.length; i++) {
            newPath += `L ${points[i].x},${points[i].y} `;
          }
          path.setAttribute('d', newPath);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-64 relative overflow-hidden">
      <svg 
        ref={waveRef} 
        className="w-full h-full"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path 
          ref={pathRef}
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          className="text-gray-200"
        />
      </svg>
    </div>
  );
}

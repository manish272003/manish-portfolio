"use client";
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './CardSection.module.css';
import './global.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const CardSection: React.FC = () => {
  // Since this component is imported dynamically with ssr: false,
  // window is guaranteed to be defined on initial render.
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      const totalScrollHeight = window.innerHeight * 1.5;
      
      const positionsX = isMobile ? [25, 75, 25, 75] : [14, 38, 62, 86];
      const positionsY = isMobile ? [28, 28, 72, 72] : [50, 50, 50, 50];
      const rotations = isMobile ? [-5, 5, -5, 5] : [-15, -7.5, 7.5, 15];

      // Use a single Timeline for perfect synchronization and no glitching!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${totalScrollHeight}`,
          pin: containerRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: true,
        }
      });

      cards.forEach((card, index) => {
        const frontEl = card.querySelector(`.${styles.flipCardFront}`) as HTMLElement;
        const backEl = card.querySelector(`.${styles.flipCardBack}`) as HTMLElement;

        // Force GSAP to use percentage translations and reset pixel translations
        // autoAlpha: 1 ensures the card only becomes visible once GSAP is fully ready, preventing FOUC!
        gsap.set(card, { autoAlpha: 1, xPercent: -50, yPercent: -50, x: 0, y: 0 });

        // Initialize back element rotation
        gsap.set(backEl, { rotationY: 180 });

        // Phase 1: Fan out (0 to 40% of scroll)
        tl.to(card, {
          left: `${positionsX[index]}%`,
          ...(isMobile && { top: `${positionsY[index]}%` }),
          rotation: `${rotations[index]}`,
          ease: 'power1.inOut',
          duration: 0.4,
        }, 0);

        // Phase 2: Flip and un-fan
        const staggerOffset = index * 0.02;
        const startOffset = 0.3 + staggerOffset; 
        const duration = 0.4; // 0.7 - 0.3 = 0.4

        // Un-fan the card back to straight
        tl.to(card, {
          rotation: 0,
          ease: 'power1.inOut',
          duration: duration,
        }, startOffset);

        // Flip front side
        tl.to(frontEl, {
          rotationY: -180,
          ease: 'power1.inOut',
          duration: duration,
        }, startOffset);

        // Flip back side into view
        tl.to(backEl, {
          rotationY: 0,
          ease: 'power1.inOut',
          duration: duration,
        }, startOffset);
      });
    });

    // Refresh ScrollTrigger after a slight delay to ensure any dynamic Next.js chunks 
    // above this component have finished rendering, preventing incorrect trigger offsets.
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <div ref={triggerRef} style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <section ref={containerRef} className={styles.cards} style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {[1, 2, 3, 4].map((id, index) => (
          <div
            key={id}
            className={styles.card}
            id={`card-${id}`}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: isMobile ? '160px' : '300px',
              height: isMobile ? '240px' : '450px',
              opacity: 0, // Start fully hidden to prevent Flash of Unstyled Content (FOUC)
              visibility: 'hidden',
              willChange: 'transform' // Optimize GSAP animation
            }}
          >
            <div className={styles.cardWrapper} style={{ position: 'absolute', width: '100%', height: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className={styles.flipCardInner} style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
                {/* Front Side */}
                <div className={styles.flipCardFront} style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '0.8em', overflow: 'hidden' }}>
                  <Image
                    src={`/images/img10.jpg`}
                    alt="Card Front"
                    width={500}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Back Side */}
                <div className={styles.flipCardBack} style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '0.8em', overflow: 'hidden', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', transform: 'rotateY(180deg)' }}>
                  <Image
                    src={
                      id === 1 ? '/images/Problem Discovery.png' :
                      id === 2 ? '/images/Product Strategy.png' :
                      id === 3 ? '/images/Rapid Prototyping (0→1).png' :
                      '/images/User Experience Thinking.png'
                    }
                    alt="Skill details"
                    width={500}
                    height={700}
                    style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: '0.8em' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSection;
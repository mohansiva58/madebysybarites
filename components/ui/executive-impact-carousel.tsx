"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface ServiceItem {
    name: string;
    image: string;
    modelImg: string;
}

interface ServicesCarouselProps {
    services: ServiceItem[];
}

const styles = `
  .services-carousel {
    background-color: #f6f7fb;
    color: #1f1f1f;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    padding-top: 5rem;
  }
  
  .dark .services-carousel {
    background-color: #0a0a0a;
    color: #f4f1ea;
  }

  .col-scroll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .col-scroll {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 1rem;
      gap: 5vh;
      align-items: center;
    }
  }

  .col-scroll__box {
    display: flex;
    flex-direction: column;
    padding: 10vh 0 15vh;
  }

  .col-scroll__box--odd {
    flex-direction: column-reverse;
    height: 100vh;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd {
      flex-direction: column;
      height: auto;
      padding: 0;
    }
    .col-scroll__box {
      width: 100%;
      align-items: center;
      padding: 2rem 0;
    }
  }

  .col-scroll__list {
    display: flex;
    flex-direction: column;
    will-change: transform;
    gap: 10vh;
  }

  .col-scroll__box--odd .col-scroll__list {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd .col-scroll__list {
      flex-direction: column;
    }
    .col-scroll__list {
      gap: 5vh;
    }
  }

  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 26vw;
    max-width: 400px;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 768px) {
    .service-card {
      width: 90vw;
      max-width: 100%;
      margin: 0 0 5vh 0;
    }
    .service-card:last-child {
      margin-bottom: 0;
    }
  }

  .col-scroll__img-wrapper {
    position: relative;
    aspect-ratio: 0.85;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    background: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dark .col-scroll__img-wrapper {
    border-color: rgba(255, 255, 255, 0.1);
    background: #171717;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.03);
  }

  .col-scroll__img-wrapper img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-fit: contain;
    transition: opacity 0.5s ease-in-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0.75rem;
  }

  .product-img {
    z-index: 1;
    opacity: 1;
    padding: 2rem;
  }

  .model-img {
    z-index: 2;
    opacity: 0;
    object-fit: cover !important;
  }

  .service-card:hover .product-img,
  .service-card:active .product-img {
    opacity: 0;
    transform: scale(0.95);
  }

  .service-card:hover .model-img,
  .service-card:active .model-img {
    opacity: 1;
    transform: scale(1.05);
  }

  .service-card__info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
    padding: 2rem 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
    box-sizing: border-box;
    transition: opacity 0.4s ease, transform 0.4s ease;
    opacity: 0;
    transform: translateY(10px);
  }
  
  .service-card:hover .service-card__info,
  .service-card:active .service-card__info {
    opacity: 1;
    transform: translateY(0);
  }

  .service-card__title-static {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111;
    margin-top: 1.5rem;
    transition: opacity 0.3s ease;
  }
  
  .service-card:hover .service-card__title-static {
    opacity: 0;
  }

  .service-card__title {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.3;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .service-card__btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 4;
    opacity: 0;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    color: #1f1f1f;
    transform: scale(0.8) translate(10px, -10px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  }

  .service-card:hover .service-card__btn,
  .service-card:active .service-card__btn {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  }

  .service-card__btn:hover {
    background: #111;
    color: #fff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .service-card__title {
      font-size: 1.25rem;
    }
  }
`;

export function ExecutiveImpactCarousel({ services }: ServicesCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Split into 3 columns dynamically based on max number of items
    const colSize = Math.ceil(services.length / 3);
    const col1 = services.slice(0, colSize);
    const col2 = services.slice(colSize, colSize * 2);
    const col3 = services.slice(colSize * 2, services.length);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        // Only apply scroll animation on desktop
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const ctx = gsap.context(() => {
                const reverseTrigger = gsap.utils.toArray<HTMLElement>(".col-scroll__box--odd .col-scroll__list");

                reverseTrigger.forEach((element) => {
                    const elementHeight = element.offsetHeight;
                    const viewportHeight = window.innerHeight;
                    const extraSpace = viewportHeight * 0.2;
                    const scrollDistance = elementHeight + viewportHeight + extraSpace;

                    gsap.to(element, {
                        yPercent: 100,
                        scrollTrigger: {
                            trigger: element,
                            start: 0,
                            end: \`+=\${scrollDistance}\`,
              scrub: true,
              pin: true,
            }
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [services]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="services-carousel">
        <div ref={containerRef} className="col-scroll">
          {/* Column 1 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {col1.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>

          {/* Column 2 (Even - normal scroll) */}
          <div className="col-scroll__box">
            <div className="col-scroll__list">
              {col2.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>

          {/* Column 3 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {col3.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <figure className="service-card group">
      <div className="col-scroll__img-wrapper">
        {/* Real life stock image on hover */}
        <img className="model-img" src={service.modelImg} alt={\`Real life representation of \${service.name}\`} />
        
        {/* Icon / graphic image standard state */}
        <img className="product-img" src={service.image} alt={service.name} />
        
        <div className="service-card__info">
          <h3 className="service-card__title">{service.name}</h3>
        </div>

        <button className="service-card__btn">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <h3 className="service-card__title-static">{service.name}</h3>
    </figure>
  );
}

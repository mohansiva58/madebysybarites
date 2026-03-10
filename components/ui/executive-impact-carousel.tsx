"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface Product {
    id: string;
    title: string;
    price: string;
    oldPrice?: string;
    prodImg: string;
    modelImg: string;
}

const styles = `
  .products-carousel {
    background-color: transparent;
    color: #111;
    font-family: inherit;
    margin: 0;
    overflow-x: hidden;
  }

  .col-scroll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    min-height: 100vh;
    width: 90vw;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0;
  }

  @media (max-width: 768px) {
    .col-scroll {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
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
    gap: 10vw;
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

  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 20vw;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 768px) {
    .product-card {
      width: 90vw;
      margin: 0 0 10vh 0;
    }
    .product-card:last-child {
      margin-bottom: 0;
    }
  }

  .col-scroll__img-wrapper {
    position: relative;
    aspect-ratio: 0.8;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #171717;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col-scroll__img-wrapper img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }

  .product-img {
    z-index: 1;
    opacity: 1;
  }

  .model-img {
    z-index: 2;
    opacity: 0;
  }

  .product-card:hover .product-img,
  .product-card:active .product-img {
    opacity: 0;
  }

  .product-card:hover .model-img,
  .product-card:active .model-img {
    opacity: 1;
  }

  .product-card__info {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
    padding: 0 1.5rem;
    box-sizing: border-box;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .product-card:hover .product-card__info,
  .product-card:active .product-card__info {
    opacity: 0;
    transform: translateY(10px);
  }

  .product-card__title {
    margin: 0 0 0.5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.3;
    color: #f4f1ea;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .product-card__price-wrapper {
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: #f4f1ea;
  }

  .product-card__price--old {
    text-decoration: line-through;
    opacity: 0.5;
    margin-right: 0.5rem;
  }

  .product-card__btn {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    z-index: 4;
    opacity: 0;
    background: rgba(23, 23, 23, 0.95);
    border: 1px solid #f4f1ea;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    white-space: nowrap;
    color: #f4f1ea;
  }

  .product-card:hover .product-card__btn,
  .product-card:active .product-card__btn {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .product-card__btn:hover {
    background: #f4f1ea;
    color: #1f1f1f;
  }

  @media (max-width: 768px) {
    .product-card__title {
      font-size: 1.1rem;
    }
    .product-card__price-wrapper {
      font-size: 1rem;
    }
    .product-card__btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.7rem;
    }
  }
`;

export function ExecutiveImpactCarousel({ products }: { products: Product[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const colSize = Math.ceil(products.length / 3);
    const col1 = products.slice(0, colSize);
    const col2 = products.slice(colSize, colSize * 2);
    const col3 = products.slice(colSize * 2, products.length);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

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
                        yPercent: 50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                });
            }, containerRef);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, [products]);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <main className="products-carousel">
                <div ref={containerRef} className="col-scroll">
                    <div className="col-scroll__box col-scroll__box--odd">
                        <div className="col-scroll__list">
                            {col1.map((prod) => (
                                <ProductCard key={prod.id} product={prod} />
                            ))}
                        </div>
                    </div>

                    <div className="col-scroll__box">
                        <div className="col-scroll__list">
                            {col2.map((prod) => (
                                <ProductCard key={prod.id} product={prod} />
                            ))}
                        </div>
                    </div>

                    <div className="col-scroll__box col-scroll__box--odd">
                        <div className="col-scroll__list">
                            {col3.map((prod) => (
                                <ProductCard key={prod.id} product={prod} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <figure className="product-card">
            <div className="col-scroll__img-wrapper">
                <img className="product-img" src={product.prodImg} alt={product.title} />
                {/* On hover show the model vector graphic */}
                <img className="model-img" src={product.modelImg} style={{ objectFit: "contain", padding: "1rem" }} alt={"Model " + product.title} />

                <div className="product-card__info">
                    <h3 className="product-card__title">{product.title}</h3>
                    <div className="product-card__price-wrapper">
                        {product.oldPrice && (
                            <span className="product-card__price--old">{product.oldPrice}</span>
                        )}
                        <span className="product-card__price">{product.price}</span>
                    </div>
                </div>

                <button className="product-card__btn">Explore +</button>
            </div>
        </figure>
    );
}

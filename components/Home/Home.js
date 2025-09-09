"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import PricingData from "../../data/pricing.json";

import SplitImg from "../../public/images/split/split-2.png";
import SplitLogo from "../../public/images/split/split-2-logo.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
import bgShapeThree from "../../public/images/bg/bg-shape-two.png";

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import BrandTwo from "../Brands/Brand-Two";
import CtaTwo from "../CallToActions/Cta-Two";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one !text-[64px] !leading-none">
                  Transforme vídeos longos em
                  <br />{" "}
                  <span className="header-caption">
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper !w-[510px] !text-[64px]">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient !normal-case tracking-[-0.08em] pr-[0.08em]"
                              : "is-hidden theme-gradient !normal-case tracking-[-0.08em] pr-[0.08em]"
                          }
                        >
                          dezenas de cortes
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient !normal-case tracking-[-0.03em] pr-[0.03em]"
                              : "is-hidden theme-gradient !normal-case tracking-[-0.03em] pr-[0.03em]"
                          }
                        >
                          presença digital
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient !normal-case tracking-[0.03em]"
                              : "is-hidden theme-gradient !normal-case tracking-[0.03em]"
                          }
                        >
                          conteúdo viral
                        </b>
                        <b
                          className={
                            visibleIndex === 3
                              ? "is-visible theme-gradient !normal-case tracking-[0.02em]"
                              : "is-hidden theme-gradient !normal-case tracking-[0.02em]"
                          }
                        >
                          + engajamento
                        </b>
                      </span>
                    </span>
                  </span>{" "}
                  em minutos
                </h1>
                <p className="description !text-[20px] opacity-80">
                  A ViroClip entende seu conteúdo, gera cortes prontos para viralizar e os publica em todas as suas redes sociais com poucos cliques.
                </p>
                
                <div className="flex items-center space-x-4 w-full max-w-[680px]">
                  <div className="flex-grow bg-[#2D313E] rounded-full p-2 flex items-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mx-3 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <input type="text" placeholder="Cole um link aqui" className="w-full !pl-0 !rounded-none bg-transparent text-gray-700 placeholder-gray-500 text-base !border-none focus:ring-0 outline-none" />
                    <button className="btn-default flex-none !rounded-full">
                      Obter cortes grátis
                    </button>
                  </div>
                  <span className="text-gray-300 text-[14px]">ou</span>
                  <button className="rainbow-gradient-btn without-shape-circle flex-none">
                    <span>Carregar arquivo</span>
                  </button>
                </div>
                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-xl-9 justify-content-center">
              <div className="slider-frame !bg-cover before:!bg-cover">
                <video className="w-full" src="/hero-banner-video.webm" autoPlay muted loop />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  A ferramenta que acelera o crescimento de milhares de criadores
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    RAINBOW UNLOCKS THE POTENTIAL ai
                  </span>
                </h4>
                <h2 className="title mb--0">
                  Generative AI made for <br /> creators.
                </h2>
              </div>
            </div>
          </div>
          <TabStyleOne />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting individuals</span>
                </h4>
                <h2 className="title mb--60">
                  Chat Smarter, Not <br /> Harder with
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>

      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Sua Própria Máquina de Conteúdo</span>
                </h4>
                <h2 className="title mb--20">
                  Um vídeo rende um mês inteiro de clipes virais
                </h2>
                <Link
                  className="btn-default btn-large"
                  href="/contact"
                >
                  Teste Grátis Agora{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={SplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo !p-[27px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="211.78 429.99 186.88 163.12">
                      <defs>
                        <linearGradient id="linear_gradient_n4jt3" x1="0%" x2="100%" y1="0%" y2="100%">
                          <stop offset="0%" stop-color="#8c65f6" />
                          <stop offset="100%" stop-color="#c28ffe" />
                        </linearGradient>
                      </defs>
                      <g fill="url(#linear_gradient_n4jt3)">
                        <path
                          d="M381.811 429.991c1.974 1.572 6.094 34.733 6.382 39.528-3.88-2.092-8.527-5.477-12.242-8.028a172.963 172.963 0 0 1-30.449 42.021c-25.467 25.877-65.632 49.503-102.248 49.55-36.387.047-40.612-24.248-15.852-47.228 5.148-4.527 9.666-7.232 15.61-10.531-73.322 67.414 67.636 61.891 117.63-41.559-3.857-1.696-10.438-3.796-14.586-5.266 8.998-5.632 26.007-14.034 35.755-18.487Z"
                        />
                        <path
                          d="M373.703 481.748c6.789 2.641 17.059 9.481 20.969 15.989a27.651 27.651 0 0 1 3.08 21.329c-2.16 7.93-6.579 12.446-13.478 16.525-30.087 17.788-60.458 35.113-90.662 52.696-15.28 8.895-30.942 5.6-39.288-10.787-2.382-6.727-2.175-9.106-2.343-16.487 5.294-.662 9.72-1.203 14.965-2.322-.14 11.13-.918 16.815 11.068 20.065.424-.092.846-.193 1.267-.3 4.702-1.227 17.011-8.756 21.928-11.577l35.498-20.545 26.84-15.689c8.086-4.743 23.787-10.841 19.947-22.633-2.142-6.577-12.46-11.041-18.308-14.265 3.232-4.253 5.575-7.515 8.517-11.999Z"
                        />
                        <path
                          d="M274.129 431.074c13.13-1.492 24.703 7.24 35.724 13.505a2590.69 2590.69 0 0 1 35.429 20.31c-2.729 4.035-5.066 7.849-7.942 11.894a2147.122 2147.122 0 0 1-35.087-19.809c-6.448-3.67-14.698-8.88-21.608-11.286-3.29-1.146-6.638.411-9.465 2.097-1.515 1.605-3.653 4.26-3.902 6.478-.842 7.51-.479 16.21-.489 23.83-.062 16.356-.032 32.711.088 49.067-4.743 1.526-9.971 2.856-14.803 4.183l.037-50.709c.002-20.773-4.134-43.676 22.018-49.56Z"
                        />
                        <path
                          d="M294.967 483.429c6.082-.108 19.299 8.635 25.24 12.028a348.754 348.754 0 0 1-12.991 10.595 206.505 206.505 0 0 1-15.813 10.111c.158-9.017-.641-18.702.155-27.634.239-2.686 1.355-3.605 3.409-5.1Z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>

      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--40">
                  Pricing plans for everyone
                </h2>
              </div>

              <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div>

      <div className="aiwave-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <ServiceTwo />
          </div>
        </div>
      </div>

      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting individuals</span>
                </h4>
                <h2 className="title mb--60">The opinions of the community</h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <div className="rating">
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </a>
                </div>
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <BrandTwo />
          <div className="bg-shape-left">
            <Image
              src={bgShapeThree}
              width={688}
              height={1055}
              alt="Bg shape"
            />
          </div>
        </div>
      </div>

      <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <CtaTwo />
        </div>
      </div>
    </>
  );
};

export default Home;

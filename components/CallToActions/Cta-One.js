"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import TeamImg from "../../public/images/cta-img/team-01.png";
import ShapeImg from "../../public/images/cta-img/bg-shape-01.png";

const CtaOne = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row row--0 align-items-center content-wrapper">
        <div className="col-lg-8">
          <div className="inner">
            <div className="content text-left">
              <h4
                className="title sal-animate"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                Sua rotina, transformada. Seu conteúdo, multiplicado
              </h4>
              <p
                className="sal-animate"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                Milhares de criadores já economizam horas de trabalho e alcançam mais pessoas. Chegou a sua vez de criar mais, com menos esforço.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-content">
            <div
              className="call-to-btn text-start text-lg-end sal-animate"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              <div className="team-image">
                <Image
                  src={TeamImg}
                  width={149}
                  height={49}
                  alt="Group Image"
                />
              </div>
              <Link className="btn-default" href="/signup">
                Multiplicar meu Conteúdo
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-shape">
          <Image src={ShapeImg} width={353} height={203} alt="BG Shape" />
        </div>
      </div>
    </>
  );
};

export default CtaOne;

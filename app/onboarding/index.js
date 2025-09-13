'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../context/firebase";

import Logo from "../../components/Header/Logo";
import { onboardingQuestions } from "./questions";

const OnboardingPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const questionStartTime = useRef(Date.now());

  useEffect(() => {
    questionStartTime.current = Date.now();
  }, [currentStep]);

  const questions = onboardingQuestions.map(q => ({
    ...q,
    options: [
      ...q.options.filter(opt => opt.value !== "other").sort(() => Math.random() - 0.5),
      ...q.options.filter(opt => opt.value === "other")
    ]
  }));
  const currentQuestion = questions[currentStep];

  const saveAnswerToFirestore = async (questionId, value, timeSpent, optionIndex) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push("/signin");
      return;
    }

    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        [`survey.${questionId}`]: value,
        [`surveyTimeSpent.${questionId}`]: timeSpent,
        [`surveyOptionIndex.${questionId}`]: optionIndex
      });
    } catch (error) {
      console.error("Erro ao salvar resposta:", error);
    }
  };

  const handleOptionSelect = async (value, optionIndex) => {
    const timeSpent = Date.now() - questionStartTime.current;
    
    await saveAnswerToFirestore(currentQuestion.id, value, timeSpent, optionIndex);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/waitlist");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <main className="page-wrapper">
        <div className="signup-area">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-12 bg-color-blackest left-wrapper">
                <div className="sign-up-box !p-[30px]">
                  <div className="signup-box-top">
                    <Link href="/">
                      <Logo className="text-[#eee]" height={50} />
                    </Link>
                  </div>
                  <div className="signup-box-bottom">
                    <div className="signup-box-content">
                      <div className="section-title">
                        <h4 className="title mb-2">
                          Vamos calibrar a IA para você
                        </h4>
                        <p className="description">
                          {currentQuestion.question}
                        </p>
                      </div>

                      <div className="progress-bar mb-4">
                        <div 
                          className="progress-fill" 
                          style={{
                            width: `${((currentStep + 1) / questions.length) * 100}%`,
                            height: '4px',
                            backgroundColor: 'var(--color-primary)',
                            borderRadius: '2px',
                            transition: 'width 0.3s ease'
                          }}
                        />
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            position: 'relative',
                            top: '-4px'
                          }}
                        />
                      </div>

                      <div className="contact-details-box !p-0 !min-h-[390px]">
                        <div className="profile-details-tab">
                          <div className="advance-tab-button">
                            <ul className="nav nav-tabs tab-button-style-2 justify-center !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-2 !auto-rows-fr">
                              {
                                questions[currentStep].options.map((option, index) => {
                                  return (
                                    <li key={option.value} role="presentation">
                                      <a
                                        href="#"
                                        className={`tab-button !flex !flex-col !h-full items-center !p-[16px] hover:!bg-[var(--color-lessdark)]`}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleOptionSelect(option.value, index);
                                        }}
                                      >
                                        <span className="!text-[24px]">{option.icon}</span>
                                        <span className="title">{option.label}</span>
                                      </a>
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between items-center mt-4 gap-[12px]">
                        <button
                          className="btn-default btn-border"
                          onClick={handlePrev}
                          disabled={currentStep === 0}
                          style={{
                            opacity: currentStep === 0 ? 0.5 : 1,
                            cursor: currentStep === 0 ? "not-allowed" : "pointer"
                          }}
                        >
                          Anterior
                        </button>
                        <span className="text-white/70 flex-none">
                          {currentStep + 1} de {questions.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OnboardingPage;

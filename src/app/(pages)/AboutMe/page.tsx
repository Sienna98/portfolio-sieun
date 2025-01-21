"use client";

import { commonMotion, staggerMotion } from "@/motions/common-motions";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <article className="lg:p-8 min-w-[375px] w-full lg:h-full flex justify-center items-center">
      <motion.div
        className="bg-white w-full md:w-[768px] flex flex-col justify-center items-center px-7 py-10 mb-[100px] md:mb-[40px] md:px-10 md:py-10 lg:shadow-lg gap-8 text-center"
        variants={staggerMotion}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerMotion}>
          <img
            src="/images/sieun-profile.jpg"
            alt="profile"
            width="200"
            height="200"
          />
        </motion.div>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          안녕하세요. 프론트엔드 개발자 이시은입니다. <br />
          2021년 웹 디자인과 웹 퍼블리싱 분야에서 경력을 시작하여, 현재는
          프론트엔드 개발자로서의 전문성을 확장하고 있습니다.
          <br />
          디자인과 퍼블리싱 경험을 통해 UI/UX 설계와 DOM 구조에 대한 깊은 이해를
          갖추고 있으며, <br />
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              시맨틱한 코드 작성과 사용자 경험
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          의 최적화를 최우선으로 생각합니다.
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          현재 저는 퍼플아이오에 소속되어, 모회사인 코오롱인더스트리가 운영하는
          패션 쇼핑몰 “KOLON MALL”의 개발을 전담하고 있습니다. 퍼블리싱 경력을
          기반으로{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              다양한 인터랙션 요소 구현과 UI/UX 개선 작업
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 수행해왔으며,
          <br />
          회원가입, 멤버십, 마이페이지, 주문/배송 조회 등{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              복잡한 비즈니스 로직 구현
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          에도 폭넓은 경험을 보유하고 있습니다.
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          기획자, 디자이너, 프론트엔드 및 백엔드 개발자와의 긴밀한 협업을 통해
          <br />
          서비스 품질 향상과 사용자 중심의 경험 제공에 기여하고 있습니다. <br />
          단순히 주어진 업무를 처리하는 데 그치지 않고, 비즈니스 임팩트를
          창출하는 능동적인 접근을 지향하며, <br />
          서비스 개선과 성과 극대화에 중점을 두고 업무를 수행하고 있습니다.
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          저는 회사를 단순히 일하는 공간이 아니라, 팀원들과 함께 성장하고 발전할
          수 있는 곳으로 생각합니다. <br />
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              원활한 소통과 협업
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 중요한 가치로 여기며, 밝고 긍정적인 에너지로 팀 분위기를 이끌어가기
          위해 노력하고 있습니다. <br />
          또한 예의바른 태도와 긍정적인 자세를 바탕으로{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              효과적인 의사소통
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 실현하는 것이 제 가장 큰 강점이라고 자부합니다.
        </motion.p>
        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          앞으로는{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              사용자 경험과 개발 효율성
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 동시에 만족시키는 프론트엔드 개발자로 성장하고자 합니다.
          <br />
          더욱 견고한 코드 작성 능력과 최신 기술에 대한 탐구를 통해 프로젝트의
          완성도를 높이고, 사용자의 요구를 깊이 이해하며 이를 구현해내는
          전문성과 창의성을 갖춘 개발자가 되고 싶습니다. 또한, 지금까지 저의
          멘토가 되어 주었던 수많은 시니어 개발자들처럼, 기술적 성과뿐만 아니라
          팀원들과 함께 성장하며 긍정적인 영향을 미칠 수 있는{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              리더십 있는 개발자
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          로 나아가는 것을 목표로 하고 있습니다.
        </motion.p>
      </motion.div>
    </article>
  );
};

export default AboutMePage;

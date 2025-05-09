"use client";

import { commonMotion, staggerMotion } from "@/motions/common-motions";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <article className="lg:p-8 min-w-[375px] w-full lg:h-full flex justify-center items-center">
      <motion.div
        className="bg-white w-full md:w-[768px] flex flex-col justify-center items-center px-7 py-10 mb-[100px] md:mb-[0px] md:px-10 md:py-10 lg:shadow-lg gap-8 text-center"
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
          2021년 웹 디자인/퍼블리싱으로 커리어를 시작해 2년의 경험을 쌓은 후,
          프론트엔드 개발로 전향해 2년간
          <br /> 최신 프론트엔드 기술 스택
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              (React, TypeScript, Next.js 14)
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 적극적으로 활용하며 <br />
          UI/UX 설계와 인터랙션 구현에 대한 전문성을 체계적으로 확장해왔습니다.
          <br />
          뿐만 아니라, 퍼블리싱 경험을 바탕으로 시맨틱 코딩과 DOM 구조에 대한
          깊은 이해를 쌓았으며, <br />
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">접근성과 SEO</span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          를 고려한 구조적인 마크업에 강점을 갖추었습니다.
          <br />
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          현재 퍼플아이오에서 근무하며, 모회사 코오롱인더스트리에서 운영하는{" "}
          <br />
          ‘KOLON MALL’의 개발을 전담하고 있습니다. 이커머스 분야에서 대규모
          프로젝트를 성공적으로 이끌며, <br />
          Framer-motion과 Swiper 커스텀을 활용한{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              UI/UX 및 인터랙션 개발 능력
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 인정받았습니다.
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          특히,{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              CSR, SSR, RSC 적용
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 통해 리뉴얼 전 대비{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              페이지 로딩 속도를 20% 개선
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          하고, 기존 HBS(Java) 기반 시스템을 <br />{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              React + TypeScript
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          로 마이그레이션하여{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              유지보수 시간을 50% 단축하며 개발 생산성을 향상
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          시켰습니다.
          <br />
          아울러, 프론트엔드 품질 관리와{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              테스트 코드 작성
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          을 통해 안정적인 서비스 운영에 기여하고 있으며, <br />
          모노레포 환경에서의 효율적인 프로젝트 관리 및 유지보수 경험을 바탕으로
          <br />
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">GitHub과 Figma</span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>
          를 활용한 체계적인 워크플로우를 구축하여 팀 협업을 강화하고 있습니다.
        </motion.p>

        <motion.p
          variants={commonMotion}
          className="whitespace-pre-wrap break-keep text-sm leading-6"
        >
          저는 단순한 업무 수행을 넘어, 문서화와 협업을 중시하여 <br />
          유지보수성과 확장성을 고려한 개발 문화를 주도하고 있으며, <br />
          기획자, 디자이너, 백엔드 개발자와의 긴밀한{" "}
          <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
            <span className="z-10 relative font-semibold">
              협업을 통해 비즈니스 임팩트를 창출하는
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[10px] bg-[#baffda] w-full`}
            />
          </span>{" "}
          <br /> 능동적인 문제 해결가로 성장하고 있습니다. 앞으로도 최신 기술
          트렌드를 적극적으로 탐구하여 <br /> 더욱 견고하고 효율적인 코드를
          작성함과 동시에, <br />
          사용자 경험과 개발 효율성을 모두 만족시키는 프론트엔드 개발자가
          되겠습니다.
        </motion.p>
      </motion.div>
    </article>
  );
};

export default AboutMePage;

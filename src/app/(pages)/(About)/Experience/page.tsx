const ExperienceList = [
  {
    title: "[BX 프로젝트(코오롱몰 전체 리뉴얼)]",
    date: "2024.01 - 2024.09",
    contents: [
      "Next.js 14 App Router 방식을 활용한 신규 프로젝트로 코오롱몰의 전체 디자인과 개발을 혁신적으로 리뉴얼.",
      "CSR, SSR, RSC의 장단점을 분석해 상황별 최적의 렌더링 방식을 적용, 효율적이고 유연한 아키텍처 구현.",
      "로그인, 아이디 찾기, 비밀번호 변경, 회원가입 등 사용자 인증 관련 프론트엔드 로직을 체계적 으로 설계 및 구현.",
      "배송 조회 팝업을 웹, 모바일 웹, 앱을 포함한 다양한 브라우저 환경에서 동일한 UI와 기능을 제공할 수 있도록 크로스 브라우징 최적화.",
      "대량의 데이터를 효율적으로 처리하고 사용자 친화적으로 제공하기 위해 이용약관 및 개인정 보 처리방침 페이지를 설계 및 개발.",
      "무한 스크롤 기능을 포함한 래플 진행 현황 페이지를 구현, 데이터 로드 및 탭 전환 등 다양한 기능을 고려한 작업 진행.",
    ],
    skills: [
      "React",
      "TypeScript",
      " Next.js App Router",
      "Panda Css",
      "react-hook-form",
      "react-query",
      "story-book",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <article className="p-7 h-[100vh] min-w-[375px] block md:flex md:p-10 gap-10 ">
      <div className="w-full md:w-1/5 min-w-[150px] flex flex-col gap-1">
        <div className="font-semibold text-xl">퍼플아이오</div>
        <div className="text-[#969696] text-md">2023.02 - 현재 재직중</div>
        <div className="text-sm">프로젝트 개발팀/프론트개발</div>
      </div>
      {ExperienceList.map((experience, idx) => (
        <div
          className="w-full mt-7 md:w-4/5 md:mt-0 flex flex-col gap-2"
          key={idx}
        >
          <h3 className="font-semibold text-xl">{experience.title}</h3>
          <span className="text-[#969696] text-md">{experience.date}</span>
          <div className="mt-2">
            <ul className="flex flex-col gap-3 pl-3">
              {experience.contents?.map((content, idx) => (
                <li
                  className="before:content-['&#45;'] before:pr-1.5"
                  key={idx}
                >
                  {content}
                </li>
              ))}
            </ul>
            <ul className="pl-3 mt-5 flex flex-wrap gap-2">
              {experience.skills?.map((skill, idx) => (
                <li
                  className="inline-block bg-[#58CE8F] text-white rounded-md px-2 py-1 text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ExperiencePage;

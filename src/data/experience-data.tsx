/* eslint-disable react/jsx-key */
export const ExperienceList = [
  {
    title: "퍼플아이오",
    date: "2023.02 - 현재 재직중",
    team: "프로젝트 개발팀/프론트개발",
    contents: [
      {
        title: "BX 프로젝트(코오롱몰 전체 리뉴얼)",
        date: "2024.01 - 2024.09",
        list: [
          {
            contents: [
              "Next.js 14 App Router 방식을 활용한 신규 프로젝트로 코오롱몰의 전체 디자인과 개발을 혁신적으로 리뉴얼.",
              "CSR, SSR, RSC의 장단점을 분석해 상황별 최적의 렌더링 방식을 적용, 효율적이고 유연한 아키텍처 구현.",
              "로그인, 아이디 찾기, 비밀번호 변경, 회원가입 등 사용자 인증 관련 프론트엔드 로직을 체계적 으로 설계 및 구현.",
              "배송 조회 팝업을 웹, 모바일 웹, 앱을 포함한 다양한 브라우저 환경에서 동일한 UI와 기능을 제공할 수 있도록 크로스 브라우징 최적화.",
              "무한 스크롤 기능을 포함한 래플 진행 현황 페이지를 구현, 데이터 로드 및 탭 전환 등 다양한 기능을 고려한 작업 진행.",
              "유틸 함수에 대한 유닛 테스트 코드 추가 및 비회원 상품 구매 플로우에 대한 E2E 테스트 코드 작성 작업 진행",
            ],
          },
          {
            subTitle: "이슈 해결하기",
            contents: [
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;방대한 양의 개인정보 처리방침 :&nbsp;
                  </span>
                  개인정보 처리방침 약관 내용이 전부 하드코딩으로 된 파일이다
                  보니 개정된 날짜마다 파일 경로를 모두 생성해야하는 이슈가
                  있었음. <br /> 또 한번에 조회할 수 있는 약관은 선택한 날짜에
                  해당하는 약관 하나의 내용인데 그와 상관없이 많은 양의 텍스트를
                  한번에 로드하는 것이 효과적이지 못하다고 판단함.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;선택된 날짜에 해당되는 디렉토리 내부에 컴포넌트가 화면에
                  노출될 수 있도록 Dynamic Routes를 활용하여 파일 경로를 지정함.
                  <br />
                  또한 Dynamic Import로 필요한 시점에 약관 파일을 불러올 수
                  있도록하고, 로딩시간동안 화면에 보여줄 UI도 추가로 작업함.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;useContext와 Provider :&nbsp;
                  </span>
                  공통 배너 컴포넌트에 CMS에서 내려주는 투명 헤더 값을 기반으로
                  화면에 노출되는 헤더 스타일이 달라지도록 수정이 필요했음.
                  <br /> 이를 위해 useContext로 전달받는 panel 값을 사용해 헤더
                  스타일을 변경하도록 구현함. 이 방식은 메인 페이지에서는
                  정상적으로 작동했지만, 서브 페이지에서는 context 에러가
                  발생함.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;확인해보니 메인 페이지 layout은 해당 context의
                  provider로 감싸져 있지만 서브페이지는 감싸져 있지 않았고,
                  <br /> 이로 인해 서브 페이지 내부에서 내려주는 panel값이 없어
                  context 에러가 발생했음. <br />
                  메인페이지와 서브페이지에서 공통으로 활용할 수 있는 provider를
                  추가하여 context 에러를 해결함.
                </span>
                &nbsp;&nbsp;
                <a
                  href="https://velog.io/@tldms0827/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EB%B0%9C%EA%B2%AC%ED%95%9C-useContext-%EA%B8%B0%EC%8A%B9%EC%A0%84%EA%B2%B0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#969696] border-b border-gray-600"
                >
                  이슈 해결 블로그 글 바로가기 (링크)
                </a>
              </div>,
            ],
          },
        ],
        images: [
          {
            src: "/images/kolonmall.png",
            alt: "코오롱몰",
            width: 700,
            height: 350,
          },
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js App Router",
          "Panda Css",
          "react-hook-form",
          "react-query",
          "vitest",
          "playwright",
          "story-book",
        ],
      },
      {
        title: "코오롱몰 마이페이지 이관 작업",
        date: "2023.11 - 2023.12",
        list: [
          {
            contents: [
              "기존 HBS(Handlebars)/Java 기반으로 작성된 로직을 React와 TypeScript를 활용해 현대적인 구조로 전환, 유지보수성과 확장성을 대폭 향상.",
              "마이페이지 내에서 배송지 목록의 수정, 추가, 삭제를 처리할 수 있는 팝업 컴포넌트 개발 및 주문 이후 배송 전 배송지 변경 기능 구현.",
              "다양한 페이지에서 공통으로 활용되는 영역을 효율적으로 관리하기 위해 Zustand를 활용한 상태 관리 로직 개발.",
            ],
          },
          {
            subTitle: "이슈 해결하기",
            contents: [
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;대용량 동영상 파일 업로드 :&nbsp;
                  </span>
                  현업에게 전달받은 동영상 파일이 용량이 매우 커 업로드 시간 및
                  서버 비용에 대한 문제가 발생함. <br />
                  용량을 줄여서 전달할 수 있는지 문의 하였으나, 고화질 동영상을
                  사용해야 하는 상황이라 해결이 어려웠음.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;동영상 파일을 서버에 업로드하는 대신, 유투브 채널에
                  업로드하여 iframe으로 불러오는 방식으로 변경하는 것이 어떤지
                  제안함. <br />
                  기존에 구현 해두었던 동영상 컴포넌트를, 유투브 영상을 팝업으로
                  띄울 수 있도록 수정하여 작업함. 이를 통해 고화질의 영상을
                  사용하며 서버 비용을 절감할 수 있었음.
                </span>
              </div>,
            ],
          },
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Styled-Components",
          "zustand",
        ],
      },
      {
        title: "버티컬 사이트(이커머스) 운영/구축 작업",
        date: "2023.07 - 2023.10",
        list: [
          {
            subTitle: "[24/7 series 신규 컴포넌트 개발]",
            contents: [
              "Swiper를 커스텀하여 복잡한 설계의 동영상 자동 재생 숏폼 컴포넌트 개발.",
              "상품 목록 페이지에서 필터링, 정렬, 페이지네이션 기능을 구현하고, 상품 상세 페이지에서 상품 정보 및 리뷰를 동적으로 표현.",
            ],
          },
          {
            subTitle: "[바이시리즈 3.0버전 리뉴얼 작업]",
            contents: [
              "디자인 리뉴얼에 따라 툴바 추가, 사이드바 메뉴 개선, 메인 테마 컬러 변경 등 다양한 신규 컴포넌트 개발로 인터페이스 개선.",
              "리뷰 영역의 Crema 라이브러리를 완전히 제거하고 자체 개발한 PIMS 리뷰 시스템을 적용, 서비스 품질 및 일관성 향상.",
            ],
          },
          {
            subTitle: "[더카트골프 사이트 3.0버전 리뉴얼 작업]",
            contents: [
              "더카트골프의 상품 목록 컴포넌트, 사이드바, GNB 등 주요 인터페이스를 리뉴얼하며 사용자 중심의 경험 제공.",
              "CMS에 사용자 친화적인 기능을 추가하여 신규 컴포넌트의 추가, 수정, 삭제를 손쉽게 관리할 수 있도록 개발.",
              "리뉴얼 버전에 따른 화면 설계서와 CMS 사용자 매뉴얼을 작성하여 체계적이고 명확한 가이드 제공.",
            ],
          },
          {
            subTitle: "[코오롱 스포츠 온라인 수선센터]",
            contents: [
              "온라인 수선센터의 온보딩 페이지 및 메인 페이지 개발.",
              "로고 인트로 모션, 숏폼 형태의 컴포넌트, 리뷰 슬라이드 등 시각적으로 돋보이는 UI를 구현하여 브랜드 아이덴티티 강화.",
              <a
                href="https://www.kolonsport.com/Rebirth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#969696] border-b border-gray-600"
              >
                코오롱스포츠 온라인 수선센터 메인 바로가기 (링크)
              </a>,
              <a
                href="https://www.kolonsport.com/Repair/Intro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#969696] border-b border-gray-600"
              >
                코오롱스포츠 온라인 수선센터 인트로 메인 바로가기 (링크)
              </a>,
            ],
          },
          {
            subTitle: "이슈 해결하기",
            contents: [
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;대용량 동영상 파일 업로드 :&nbsp;
                  </span>
                  현업에게 전달받은 동영상 파일이 용량이 매우 커 업로드 시간 및
                  서버 비용에 대한 문제가 발생함. <br />
                  용량을 줄여서 전달할 수 있는지 문의 하였으나, 고화질 동영상을
                  사용해야 하는 상황이라 해결이 어려웠음.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;동영상 파일을 서버에 업로드하는 대신, 유투브 채널에
                  업로드하여 iframe으로 불러오는 방식으로 변경하는 것이 어떤지
                  제안함. <br />
                  기존에 구현 해두었던 동영상 컴포넌트를, 유투브 영상을 팝업으로
                  띄울 수 있도록 수정하여 작업함. 이를 통해 고화질의 영상을
                  사용하며 서버 비용을 절감할 수 있었음.
                </span>
              </div>,
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;숏폼 컴포넌트 슬라이드 이슈 :&nbsp;
                  </span>
                  Swiper를 커스텀하여 만든 숏폼 컴포넌트에서 슬라이드가 loop로
                  설정되어 있을 때, 다음 슬라이드가 화면에 제대로 노출되지 않는
                  이슈가 발생함.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;loopedSlides 옵션을 활용하여 loop로 설정된 슬라이드 중
                  몇개를 미리 복제하여 무한 루프가 부드럽게 작동할 수 있도록
                  수정함.
                </span>
              </div>,
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [장애] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;엣지 케이스 테스트 :&nbsp;
                  </span>
                  한페이지에 아이템이 4개가 노출되는 슬라이드 컴포넌트 작업 후
                  개발자 테스트를 진행할 때, 상품을 5개 이상으로만 계속 추가하여
                  테스트를 진행함. <br />
                  이로 인해 페이지가 1개가 노출되는 화면의 테스트를 진행하지
                  못함. 배포 후 페이지가 1개일 때 null 처리 해둔 로직에서 에러가
                  발생함.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;에러가 발생한 시간과 그때 추가된 컴포넌트들을 대조하여
                  에러의 원인인 컴포넌트를 파악함. 이후 해당 컴포넌트를 에러가
                  발생한 같은 환경으로 셋팅하여 디버깅 후 페이지가 1개 노출될 때
                  에러가 발생함을 확인함. 이를 통해 테스트를 여러번 진행하는
                  것보다 정확한 엣지케이스를 파악하여 진행하는 것이 더
                  중요하다는 것을 깨달음. 같은 실수를 반복하지 않기 위해 개발자
                  테스트 진행시 명확한 엣지케이스를 먼저 파악하고 리스트업하여
                  테스트 진행중.
                </span>
              </div>,
            ],
          },
        ],
        images: [
          {
            src: "/images/vertical.png",
            alt: "버티컬 사이트",
            width: 670,
            height: 350,
          },
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Styled-Components",
          "story-book",
          "Framer-motion",
        ],
      },
      {
        title: "PIMS 리뷰 프로젝트 개발",
        date: "2023.05 - 2023.06",
        list: [
          {
            contents: [
              "코오롱몰을 포함한 버티컬 전체 사이트에서 리뷰 영역에 사용되던 Crema 라이브러리를 대체하기 위한 전용 리뷰 시스템 개발.",
              "다수의 사이트에서 공통으로 활용될 수 있도록 유연성과 확장성을 고려한 분기 처리 로직 설계 및 구현.",
            ],
          },
        ],
        skills: ["React", "TypeScript", "Next.js", "scss"],
      },
      {
        title: "사내 자리예약 시스템 개발 해커톤",
        date: "2023.05",
        list: [
          {
            contents: [
              "자율좌석제로 운영되는 회사 시스템에서 직원 증가로 인한 불편함을 해소하기 위해 좌석 예약 시스템 개발 해커톤에 참여.",
              "게더타운을 컨셉으로 회사 도면을 시각화하여 직관적인 자리 예약, 회의실 예약, 안마의자 예약, 게시판 기능 등을 구현.",
              "전체 7개 팀 중 2위를 기록하며 인기상 1위를 수상, 창의성과 실용성을 동시에 인정받음.",
            ],
          },
        ],
        images: [
          {
            src: "/images/purple-place-1.png",
            alt: "purple place",
            width: 620,
            height: 350,
          },
        ],
        skills: ["React", "TypeScript", "Next.js", "Styled-Components"],
      },
      {
        title:
          "스웨덴 전기바이크 브랜드 Cake, 국내 첫 도입을 위한 웹사이트 구축",
        date: "2023.02 - 2023.04",
        list: [
          {
            contents: [
              "메인 페이지의 패럴렉스 모션, 바이크 슬라이드 모션 등 화려한 인터렉션 작업 진행.",
              "전기바이크 시승 예약 시스템 개발, 직관적이고 편리한 예약 기능을 제공하여 사용자 만족도를 높임.",
            ],
          },
          {
            subTitle: "이슈 해결하기",
            contents: [
              <div className="leading-6">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [문제] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  <span className="font-semibold pl-1">
                    &nbsp;Swiper 커스텀 컴포넌트 :&nbsp;
                  </span>
                  요청받은 슬라이드 컴포넌트 디자인에 2가지의 페이지네이션이
                  필요했음. 페이지네이션을 커스텀하여 화면에 노출시키고 나니,
                  <br />
                  loop 옵션이 적용되었을 때 activeIndex 값을 정확하게 인지하지
                  못하는 이슈가 발생.
                </span>
              </div>,
              <div className="leading-6 mt-1.5">
                <span className="relative inline flex-shrink-0 flex-grow-0 basis-auto w-auto">
                  <span className="z-10 relative font-semibold"> [해결] </span>
                  <span
                    className={`absolute bottom-0 left-0 h-full bg-[#baffda] w-full`}
                  />
                </span>
                <span>
                  &nbsp;Swiper 공식 문서를 확인하니 loop일때 사용가능한
                  realIndex 옵션을 확인함. activeIndex를 realIndex로 변경하여
                  해결함.
                </span>
              </div>,
            ],
          },
        ],
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Styled-Components",
          "Framer-motion",
        ],
      },
    ],
  },
  {
    title: "애비로드커뮤니케이션즈",
    date: "2021.09 - 2023.02",
    team: "개발팀/웹 퍼블리셔",
    contents: [
      {
        title: "현대카드 웹/모바일웹/앱 운영",
        date: "2022.01 - 2023.01",
        list: [
          {
            contents: [
              "현대카드 메인 컴포넌트 유지/보수 작업 진행(메인 배너, gnb, 카드목록, 사이드바 등)",
              "CMS를 활용하여 신규/종료 이벤트의 추가/수정/삭제 작업 진행",
              "앱 퍼블리싱 담당으로 디바이스별 크로스브라우징 작업 진행",
            ],
          },
        ],
        skills: ["HTML", "SCSS", "jQuery"],
      },
      {
        title: "비씨카드 ARS 모바일웹 구축",
        date: "2021.09 - 2021.12",
        list: [
          {
            contents: [
              "고객센터 연결 시 접속가능한 '보이는 ARS' 모바일웹 구축 작업",
              "모바일 뷰포트 사이즈에 맞춘 반응형 설계 및 개발",
              "웹 접근성을 고려한 시맨틱 마크업으로 사용자 친화적인 페이지 구현.",
            ],
          },
        ],
        skills: ["HTML", "CSS", "jQuery"],
      },
    ],
  },
  {
    title: "앤스시스템",
    date: "2021.02 - 2021.08",
    team: "개발팀/웹 퍼블리셔",
    contents: [
      {
        title: "자사 웹/모바일 퍼블리싱",
        date: "2021.02 - 2021.08",
        list: [
          {
            contents: [
              "자사 프로젝트 소개 사이트 퍼블리싱 작업 진행, 사용자가 직관적으로 정보를 확인할 수 있도록 디자인 및 레이아웃 구현.",
              "자사 신규 앱 디자인/퍼블리싱 작업 진행, 사용자 중심의 인터페이스와 기능 구현.",
            ],
          },
        ],
        images: [
          {
            src: "/images/ns-system.png",
            alt: "앤스시스템",
            width: 850,
            height: 250,
          },
        ],
        skills: ["HTML", "CSS", "jQuery"],
      },
      {
        title: "쇼핑몰 웹사이트 운영",
        date: "2021.02 - 2021.08",
        list: [
          {
            contents: ["쇼핑몰 웹사이트 운영을 위한 다양한 퍼블리싱 작업 진행"],
          },
        ],
        skills: ["HTML", "CSS", "jQuery", "카페24", "Bootstrap"],
      },
      {
        title: "웹디자인 작업",
        date: "2021.02 - 2021.08",
        list: [
          {
            contents: [
              "자사 웹사이트 및 모바일 디자인, 로고 디자인, 배너 디자인 등 브랜드 비주얼을 강화하기 위한 다양한 디자인 작업 진행.",
            ],
          },
        ],
        skills: ["PhotoShop", "Illustrator", "Adobe XD"],
      },
    ],
  },
];

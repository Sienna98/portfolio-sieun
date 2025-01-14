"use client";

import { purplePlaceData } from "@/data/sideProjectData";
import Image from "next/image";

const PurplePlacePage = () => {
  return (
    <article className="lg:px-8 lg:py-14 min-w-[375px] w-full flex justify-center items-center">
      <div className="bg-white w-full pt-10 pb-[100px] md:pb-[80px] md:w-[768px] flex flex-col justify-center items-start lg:shadow-lg  px-5 lg:px-10 gap-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-4xl font-semibold w-full">Purple Place</h3>
            <div className="text-[#969696] mt-1">좌석 예약 시스템</div>
          </div>
          <button
            className="flex flex-col items-center gap-2 hover:opacity-60 transition"
            onClick={() =>
              window.open("https://purple-place.vercel.app", "_blank")
            }
          >
            <img
              src="/icons/external-link.svg"
              alt="바로가기"
              width="20"
              height="20"
            />
            <span className="text-sm text-[#969696]">바로가기</span>
          </button>
        </div>
        <div>
          <div className="font-medium">
            Design / Front-end
            <span className="text-[#969696] ml-1.5">
              - 팀(프론트 - 3명, 백엔드 - 3명)
            </span>
          </div>
          <div className="mt-1 text-sm">2023.05</div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 text-center">
          <Image
            src="/images/purple-place-1.png"
            alt="purple place"
            width="700"
            height="390"
            placeholder="blur"
            blurDataURL="/images/purple-place-1.base64"
          />
          <p className="text-sm whitespace-pre-wrap break-keep">
            {`회사의 자율좌석제 운영 시스템에서 직원 증가로 인한 불편함을 해소하기 위해
사내 해커톤에 참여하였습니다.
팀원들과의 회의를 통해 시스템의 전체적인 컨셉을 '게더타운'으로 정하고,
회사의 도면을 시각화하여 직관적인 UI를 구현하는 아이디어를 제시했습니다.
이를 바탕으로 자리 예약, 회의실 예약, 안마의자 예약, 게시판 기능 등을 개발하였습니다.`}
          </p>
          <Image
            src="/images/purple-place-2.png"
            alt="purple place"
            width="700"
            height="390"
            placeholder="blur"
            blurDataURL="/images/purple-place-2.base64"
          />
          <p className="text-sm whitespace-pre-wrap break-keep">
            {`한 달 간 퇴근 후와 주말을 포함해 늦은 시간까지 프로젝트에 집중하여,
최종적으로 7개 팀 중 2위를 기록하며 인기상 1위를 수상하는 성과를 거두었습니다.
이 과정에서 창의성과 실용성을 동시에 인정받을 수 있었습니다.
촉박한 시간 안에서도 팀원들과 협력하며 서로 돕고 도우며 성장할 수 있었던 값진 경험이었습니다.
이번 프로젝트를 통해 팀워크와 협업의 중요성을 다시 한번 깨달았으며,
향후 프로젝트에도 큰 도움이 될 것이라고 생각합니다.`}
          </p>
        </div>

        {purplePlaceData.map((data, idx) => (
          <div
            className={`w-full ${
              idx !== purplePlaceData.length - 1 ? "border-b pb-8" : ""
            }`}
            key={idx}
          >
            <h4 className="text-2xl font-semibold w-full">{data.title}</h4>
            <ul className="pl-3 flex flex-col gap-2 mt-4">
              {data.list.map((list, idx) => (
                <li
                  key={idx}
                  className="before:content-['-'] before:pr-1.5 text-sm"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <a
          href="https://yozm.wishket.com/magazine/detail/2490/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#969696]"
        >
          - 관련 뉴스 레터 : https://yozm.wishket.com/magazine/detail/2490/
        </a>
      </div>
    </article>
  );
};

export default PurplePlacePage;

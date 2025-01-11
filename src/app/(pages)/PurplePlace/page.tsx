"use client";

import { PurplePlaceData } from "@/data/purplePlaceData";
import Image from "next/image";

const PurplePlacePage = () => {
  return (
    <article className="lg:p-8 min-w-[375px] w-full flex justify-center items-center">
      <div className="bg-white w-[768px] flex flex-col justify-center items-start shadow-lg py-10 px-5 lg:px-10 gap-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-4xl font-semibold w-full">Purple Place</h3>
            <div className="text-[#969696] mt-1">좌석 예약 시스템</div>
          </div>
          <button
            className="flex flex-col items-center gap-2"
            onClick={() =>
              window.open("https://purple-place.vercel.app", "_blank")
            }
          >
            <Image
              src="/icons/external-link.svg"
              alt="바로가기"
              width="20"
              height="20"
            />
            <span className="text-sm text-[#969696]">바로가기</span>
          </button>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="font-medium ">Design / Front-end</div>
            <span className="text-[#969696]">
              - 팀(프론트 - 3명, 백엔드 - 3명)
            </span>
          </div>
          <div className="mt-1">2023.05</div>
        </div>
        {PurplePlaceData.map((data, idx) => (
          <div
            className={`w-full ${
              idx !== PurplePlaceData.length - 1 ? "border-b pb-8" : ""
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
        <div className="w-full flex flex-col justify-center items-center gap-5 text-center">
          <Image
            src="/images/purple-place-1.png"
            alt="purple place"
            width="700"
            height="390"
          />
          <p className="text-sm text-wrap">
            2023년 5월, 사내 해커톤 &apos;퍼플톤&apos;이 진행되었습니다. <br />
            전체적인 컨셉을 게더타운으로 지정하고 사용자가 직접 원하는 좌석을
            선택하여 예약하는 방식의 UI로 작업을 진행하였습니다.
          </p>
          <Image
            src="/images/purple-place-4.png"
            alt="purple place"
            width="700"
            height="390"
          />
          <p className="text-sm text-wrap">
            회사에서 요구한 몇가지 주요 기능들과 <br />
            평소 있으면 좋겠다고 생각한 몇가지 기능까지 추가하여 완성하였습니다.
          </p>
        </div>
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

"use client";

import { jamongdaData } from "@/data/sideProjectData";
import Image from "next/image";

const JamongdaPage = () => {
  return (
    <article className="lg:p-8 min-w-[375px] w-full flex justify-center items-center">
      <div className="bg-white w-[768px] flex flex-col justify-center items-start shadow-lg py-10 px-5 pb-16 lg:px-10 gap-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-4xl font-semibold w-full">Jamongda</h3>
            <div className="text-[#969696] mt-1">
              단어 암기 시스템 (모바일 전용)
            </div>
          </div>
          <button
            className="flex flex-col items-center gap-2 hover:opacity-60 transition"
            onClick={() =>
              window.open("https://jamongda.netlify.app", "_blank")
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
          <div className="font-medium">
            Design / Front-end
            <span className="text-[#969696] ml-1.5">- 팀 (프론트 - 2명)</span>
          </div>
          <div className="mt-1 text-sm">
            2024.10 - 2024.12 (디벨롭 작업 진행중)
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 text-center">
          <Image
            src="/images/jamongda-1.png"
            alt="jamongda"
            width="740"
            height="398"
          />
          <p className="text-sm whitespace-pre-wrap break-keep">
            {`평소 영어 단어를 암기할 때 단어장을 만들어 외우는 방식을 선호했습니다.
하지만 시험지를 직접 손으로 제작하면 한 번만 사용할 수 있다는 비효율성이 늘 아쉬웠습니다.
이를 개선하기 위해 단어장 앱을 활용해보자는 생각으로 여러 앱을 찾아봤으나,
대부분 기존에 제공된 단어를 사용하는 방식이라 직접 단어를 입력하고 관리할 수 있는 앱을 개발하기로 결심했습니다.

'자몽다'라는 이름은 팀원과 함께 이름을 고민하던 중,
자몽이 그려진 책을 보고 영감을 얻어 결정하게 되었고, 디자인 역시 자몽을 테마로 삼아 자몽색을 기반으로 제작했습니다.
특히, 디자인 측면에서는 단순하고 직관적인 UI를 구현하여 사용자 경험을 최대한 향상시키는 데 중점을 두었습니다.

이번 프로젝트를 통해 실무에서는 경험하지 못했던 초기 프로젝트 환경 설정,
API 제작 및 연동 등을 직접 진행하면서 많은 것을 배울 수 있었습니다.
또한, React 19에서 새로 추가된 use()를 활용하며 여러 시행착오를 겪었고, 더 나은 구현 방법을 고민 중입니다.

현재도 추가 개발 진행 중이며, 완성도 높은 서비스를 제공하기 위해 지속적으로 개선해 나가겠습니다.
`}
          </p>
        </div>
        {jamongdaData.map((data, idx) => (
          <div
            className={`w-full ${
              idx !== jamongdaData.length - 1 ? "border-b pb-8" : ""
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
      </div>
    </article>
  );
};

export default JamongdaPage;

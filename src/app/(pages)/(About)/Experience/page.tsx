import { ExperienceList } from "./data/experienceData";

const ExperiencePage = () => {
  return (
    <article className="p-7 min-w-[375px] block md:flex md:p-10 gap-10">
      <div className="w-full md:w-1/5 min-w-[150px] flex flex-col gap-1">
        <div className="font-semibold text-xl">퍼플아이오</div>
        <div className="text-[#969696] text-md">2023.02 - 현재 재직중</div>
        <div className="text-sm">프로젝트 개발팀/프론트개발</div>
      </div>
      <div className="w-full flex flex-col gap-12 md:w-4/5">
        {ExperienceList.map((experience, idx) => (
          <div className="mt-7 md:mt-0 flex flex-col gap-2" key={idx}>
            <h3 className="font-semibold text-lg">{experience.title}</h3>
            <span className="text-[#969696] text-md">{experience.date}</span>
            <div className="mt-2">
              <ul className="flex flex-col gap-3 pl-3">
                {experience.list.map((contents, idx) => (
                  <li key={idx} className="flex flex-col gap-2">
                    {"subTitle" in contents && (
                      <h4 className="font-medium text-sm">
                        {contents.subTitle}
                      </h4>
                    )}
                    {contents.contents.map((content, idx) => (
                      <p
                        className="before:content-['-'] before:pr-1.5 text-sm"
                        key={idx}
                      >
                        {content}
                      </p>
                    ))}
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
      </div>
    </article>
  );
};

export default ExperiencePage;

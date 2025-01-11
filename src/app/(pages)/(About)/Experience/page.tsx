import { ExperienceList } from "@/data/experienceData";

const ExperiencePage = () => {
  return (
    <article className="p-7 min-w-[375px] gap-10">
      {ExperienceList.map((experience, idx) => (
        <div className="block md:flex md:p-10 gap-3" key={idx}>
          <div className="mb-10 w-full md:mb-0 md:w-1/5 min-w-[150px] flex flex-col gap-1">
            <div className="font-semibold text-xl">{experience.title}</div>
            <div className="text-[#969696] text-md">{experience.date}</div>
            <div className="text-sm">{experience.team}</div>
          </div>
          <div className="w-full flex flex-col gap-12 md:w-4/5">
            {experience.contents.map((experience, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <h3 className="font-semibold text-lg">{experience.title}</h3>
                <span className="text-[#969696] text-md">
                  {experience.date}
                </span>
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
        </div>
      ))}
    </article>
  );
};

export default ExperiencePage;

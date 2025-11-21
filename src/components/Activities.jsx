import Image from "next/image";
import React from "react";

export default function Activities() {
  const activitiesData = [
    {
      id: 1,
      title: "SPORTS ACTIVITIES",
      description:
        "We focus on physical health and keep running various sports activities.",
      image: "/77th-District-Athletics-Meet.png",
      icon: "/soccer.svg",
    },
    {
      id: 2,
      title: "EXTRA-CURRICULAR",
      description:
        "We take care of making our student experience beyond the study like music, sports, art & craft etc.",
      image: "/Childrens-Day.jpg",
      icon: "Drawing.svg",
    },
    {
      id: 3,
      title: "CULTURAL ACTIVITIES",
      description:
        "Our students value cultural values with respect which is required for society.",
      image: "/ecole-globale-art-culture-3.jpg",
      icon: "Music.svg",
    },
    {
      id: 4,
      title: "SOCIAL ACTIVITIES",
      description: "Our Students know how the society matters for them.",
      image: "/UWS-Youth-Literature-Festival-150x150.jpg",
      icon: "Politician.svg",
    },
  ];
  return (
    <>
      <section className="text-center md:py-10 pt-6 md:px-36 px-8">
        <h3 className="text-gray-400 uppercase text-sm">ACTIVITIES</h3>
        <h2 className="text-[#EC3237] font-bold text-[18px] md:text-3xl">
          ACTIVITIES AT ECOLE GLOBALE
        </h2>

        <div className="md:flex flex-wrap hidden justify-between gap-6 mt-10">
          {activitiesData.map((activity, index) => (
            <div
              key={activity.id}
              className={`relative flex w-[470px] h-[220px] items-center`}
            >
              <Image
                src={activity.image}
                alt={activity.title}
                height={1000}
                width={1000}
                className="w-[250px] h-[220px] object-cover"
              />

              <div
                className={`bg-white w-[264px] text-left h-[174px] shadow-lg absolute right-0 rounded-lg p-4 flex flex-col justify-between `}
              >
                <div className="flex  justify-between">
                  <h3 className=" font-bold text-[16px] text-[#EC3237]">
                    {activity.title}
                  </h3>
                  <div className="text-xl text-[#EC3237]">
                    <Image
                      src={activity.icon}
                      alt={activity.icon}
                      height={1000}
                      width={1000}
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="md:hidden bg-white rounded-3xl shadow-lg overflow-x-scroll flex space-x-4 p-4">
        {activitiesData.map((activity) => (
          <div
            key={activity.id}
            className="flex-shrink-0 w-[300px] h-[390px] relative"
          >
            <Image
              src={activity.image}
              alt={activity.title}
              height={1000}
              width={1000}
              className="w-[300px] h-[300px] object-contain rounded-t-lg"
            />
            <div className="p-4 h-[125px] shadow-lg bg-white absolute bottom-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#EC3237] md:text-xl font-bold">
                  {activity.title}
                </h3>
                <div>
                  <Image
                    src={activity.icon}
                    alt={activity.title}
                    height={1000}
                    width={1000}
                      className="w-6 h-6"
                  />
                </div>
              </div>
              <p className="text-[#848484] md:text-lg text-[14px] ">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

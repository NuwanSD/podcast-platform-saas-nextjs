import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  imgUrl,
  description,
}: {
  podcastId: number;
  title: string;
  imgUrl: string;
  description: string;
}) => {
  return (
    <div className=" cursor-pointer">
      <figure className="flex flex-col gap-2" key={podcastId}>
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className=" aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-2">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;

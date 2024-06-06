import React from "react";

export const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;
  return (
    <main className="flex justify-center bg-bgDark2 relative pt-2">
      <div className="px-4">
        <article className=" p-8 text-center rounded-3xl max-w-[70vw] my-24">
          <header className="mb-12">
            <div className="text-sm text-customGrayText my-4">{date}</div>
            <h1 className="text-[3.5rem] font-bold text-white mb-4">{title}</h1>
            <p className="text-lg text-customGrayText mb-4">{subtitle}</p>
          </header>
          <img
            src={image}
            alt={title}
            className="rounded-3xl mb-8 w-3/4 mx-auto mt-8"
          />
          <section
            className="text-customGrayText leading-loose text-xl text-justify mx-auto w-2/3 mt-16"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="w-2/3 text-right mx-auto mt-8 text-white text-xl">{footer}</div>
        </article>
      </div>
    </main>
  );
};

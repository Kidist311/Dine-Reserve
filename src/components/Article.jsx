import React from "react";
import featuredArticle from "../data/articles";
import { articles } from "../data/articles";

export default function Article() {
  return (
    <div className="w-full max-w-[1300px] bg-orange-50 py-10 mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-3 px-10 md:flex-row md:justify-between md:items-center mb-14">
        <h1 className="font-bold text-3xl">Our articles</h1>
        <button className="h-14 px-9 py-5 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
          Browse our article
        </button>
      </div>

      {/* Articles layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 items-stretch">
        {/* Featured article (LEFT) */}
        <article className="bg-white border border-gray-300 rounded-2xl flex flex-col h-full">
          <div className="h-[300px] md:h-[520px] overflow-hidden rounded-t-2xl">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <p>{featuredArticle.date}</p>
            <h2 className="font-bold text-4xl mt-2 mb-2">
              {featuredArticle.title}
            </h2>
            <p className="text-gray-700">{featuredArticle.description}</p>
          </div>
        </article>

        {/* Right grid (RIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white border border-gray-300 rounded-2xl flex flex-col h-full"
            >
              <div className="h-[200px] overflow-hidden rounded-t-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p>{article.date}</p>
                <h3 className="font-bold text-xl mt-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-700">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

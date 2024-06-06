import { motion } from "framer-motion";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const blogData = [
  {
    title: "AI and Machine Learning",
    subtitle:
      "Discover insights and trends in the world of data analytics. Delve into how AI and machine learning are revolutionizing industries",
    image: blog1.src,
  },
  {
    title: "Data-Driven Analytics",
    subtitle: "Explore the impact of AI and ML on data analytics.",
    image: blog2.src,
  },
  {
    title: "Real-Time Data Processing",
    subtitle: "Learn about the importance of processing real-time.",
    image: blog3.src,
  },
];

export const Blog = () => (
  <section className="w-screen flex justify-center bg-bgDark2 relative ">
    <div className="absolute -top-16" id="blog" />
    <div className="pb-0 pt-4 bg-bgDark2 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]  ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mb-20">
          <div className="max-w-2xl text-center lg:text-left mb-16 mx-auto lg:ml-0 lg:mr-0">
            <span className="block-subtitle">Our Blog</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Latest Insights
            </h2>
            <p className="mb-6 text-secondaryText">
              Stay updated with the latest trends and insights in our industry.
            </p>
          </div>
          <div className="flex 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px] flex-wrap -mx-4 items-start h-auto sm:h-[30rem] lg:h-[31rem]  xl:h-[35rem]">
            <div className="flex sm:hidden lg:flex w-11/12 mx-auto sm:ml-0 sm:mr-0 lg:w-1/2 xl:w-3/5 px-4 mb-8 lg:mb-0  h-full">
              <a href="/blog/article">
                <div className="p-6 sm:p-10 bg-bgDark3 rounded-3xl h-full hover:bg-bgDark3Hover transition cursor-pointer">
                  <img
                    src={blogData[0].image}
                    alt={blogData[0].title}
                    className="rounded-3xl mb-6  w-full"
                    aria-label={blogData[0].title}
                  />
                  <h3 className="mb-4 text-2xl font-bold font-heading text-primaryText">
                    {blogData[0].title}
                  </h3>
                  <p className="text-secondaryText leading-loose">
                    {blogData[0].subtitle}
                  </p>
                </div>
              </a>
            </div>
            <div className="hidden sm:flex mx-auto lg:ml-0 lg:mr-0 w-11/12 sm:w-4/5 lg:w-1/2 xl:w-2/5 px-4  flex-col justify-between h-full">
              {blogData.slice(1).map((post, index) => (
                <a
                  href="/blog/article"
                  key={`${post.title}-${index}`}
                  className=" flex  gap-4 p-10 bg-bgDark3 rounded-3xl  min-h-1/2 h-1/2 max-h-[47%]
                  hover:bg-bgDark3Hover transition cursor-pointer"
                >
                  <div className="pt-2">
                    <h3 className="mb-4 text-xl font-bold font-heading text-primaryText">
                      {post.title}
                    </h3>
                    <p className="text-secondaryText leading-loose">
                      {post.subtitle}
                    </p>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-3xl mb-6 w-[9rem] h-[9rem] lg:w-auto lg:h-auto xl:w-full"
                    aria-label={post.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

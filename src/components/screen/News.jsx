import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_NEWS_SAGA } from "../../Redux/constants/NewsConstant";

function News() {
  const dispatch = useDispatch();
  const { listNews } = useSelector((state) => state.NewsReducer);
  useEffect(() => {
    dispatch({
      type: GET_ALL_NEWS_SAGA,
    });
  }, []);
  return (
    <div className="pt-[5rem] mb-[3rem]">
      <div className=" flex flex-wrap justify-center">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Hastag
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Hastag
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 px-4 py-1 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          #
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Hastag
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Hastag
        </button>
      </div>
      <div className="grid grid-cols-12 sm:px-[12%] px-[5%]">
        <div className="lg:col-span-8 px-2 col-span-full">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {listNews.feedbackObject?.records?.map((post, idx) => (
              <div
                key={idx}
                className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg object-cover h-[300px] w-full"
                    src={
                      post?.coverImage.length >= 1
                        ? post.coverImage[0]?.url
                        : "https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    }
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 line-clamp-2 sm:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
                      {post.heading}
                    </h5>
                  </a>
                  <p className="mb-3 sm:text-lg text-base line-clamp-3 font-normal text-gray-700 ">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                    <div className="flex  items-center justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                        />
                      </svg>
                      <p className="text-xl font-bold ml-2">{post.like}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4   col-span-full lg:block ml-5">
          <div className="m-auto lg:mt-0 mt-[2rem] w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                LASTES POST
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {listNews.feedbackObject?.records?.map((post, idx) => (
                  <li key={idx} className="py-3 sm:py-4 cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={
                            post?.coverImage.length >= 1
                              ? post.coverImage[0]?.url
                              : "https://images.unsplash.com/photo-1682686581312-506a8b53190e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          }
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white group-hover:text-red-500 transition">
                          {post.heading}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {post.caption}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

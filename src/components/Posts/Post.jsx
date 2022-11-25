import React from "react";
import { HandThumbUpIcon, EyeIcon } from "@heroicons/react/24/outline";

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

const Post = () => {
  return (
    <div className="mx-auto px-4 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:max-w-[90%] lg:grid-cols-3 xl:max-w-[75%] xl:grid-cols-4">
      {arr.map((post) => (
        <div className=" mb-8 overflow-hidden rounded-md bg-gray-100">
          <div className="h-48 w-full">
            <img
              src="./images/posts/post1.jpg"
              alt="post"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className="divide-y">
            <div className="space-y-1 p-2">
              <h3 className="font-medium">Aerial Footage</h3>
              <p className="text-xs text-gray-500">Equipment: Mavic 3</p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <div className="inline-flex">
                  <EyeIcon className="h-4 w-4" />
                  <span>359</span>
                </div>
                <div className="inline-flex">
                  <HandThumbUpIcon className="h-4 w-4" />
                  <span>132</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-2 text-xs text-gray-500">
              <h4>Created by Kevin</h4>
              <p>Nov 22, 2022</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;

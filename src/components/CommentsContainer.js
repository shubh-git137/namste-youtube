import React from "react";

const commentData = [
  {
    name: "Akshay Saini",
    text: "Hello Akshay",
    replies: [],
  },
  {
    name: "Shubham Tiwari",
    text: "Hello Shubham",
    replies: [
      {
        name: "Nikhil Tiwari",
        text: "Hello Nikhil",
        replies: [
          {
            name: "Akash Tiwari",
            text: "Hello Akash",
            replies: [
              {
                name: "Adarsh",
                text: "Radhe Radhe",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bittu",
    text: "Hello Bittu",
    replies: [],
  },
  {
    name: "Neha",
    text: "Hello Neha",
    replies: [],
  },
];

const CommentsLists = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsLists comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 my-2 rounded-sm">
      <img
        className="w-12 h-12"
        alt="User"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <div className="font-bold">{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsLists comments={commentData} />
    </div>
  );
};

export default CommentsContainer;

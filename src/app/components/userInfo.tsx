import React from "react";

function userInfo() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="" // Replace with the actual source of the profile photo
            alt={"profile"}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">user.username</h1>
            <p className="text-gray-600">Followers: user.followers</p>
            <p className="text-gray-600">Following: user.following</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">user.bio</p>

        <h2 className="text-xl font-semibold mb-2">Photos:</h2>
        <div className="flex space-x-4 overflow-x-scroll mb-4">
          <img
            key=""
            src= "" // Replace with the actual source of the photo
            alt={`Photo ${ + 1}`}
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">Videos:</h2>
        <div className="flex space-x-4 overflow-x-scroll">
         
            <video
              key=""
              controls
              src="" // Replace with the actual source of the video
              className="w-32 h-32 rounded-lg"
            />
      
        </div>
      </div>
    </div>
  );
}

export default userInfo;

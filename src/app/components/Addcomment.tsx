// import React, { useState } from "react";

// function Addcomment({
//   handleAddComment,
// }: {
//   handleAddComment: () => Promise<void>;
// }) {
//   const [comment, setcomment] = useState("");
//   return (
//     <div className=" absolute top-[100px]  right-5 ">
//       <div className="flex items-center space-x-4  ">
//         <input
//           onChange={(e) => setcomment(e.target.value)}
//           value={comment}
//           type="text"
//           className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:border-blue-500"
//           placeholder="Enter your comment..."
//         />
//         <button
//           onClick={handleAddComment}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//           //   onClick=
//         >
//           Post
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Addcomment;

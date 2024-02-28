import Link from "next/link";
import React from "react";
import Bahasa from "./bahasa";

const Navigasi = () => {
  return (
    <div className="border-b-2 border-blue-500 bg-gray-100 p-4 sticky top-0 left-0 right-0 z-10">
      <div className="container  mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">it'sMe</Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="#">Blogs</Link>
            <Link href="#">Abouts</Link>
          </div>

          <div>
            <Bahasa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigasi;

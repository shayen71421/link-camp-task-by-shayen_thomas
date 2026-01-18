"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-300 border-t-yellow-400 rounded-full animate-spin"></div>
        <p className="text-white text-lg font-semibold">Loading LINK CAMP 2025...</p>
      </div>
    </div>
  );
}

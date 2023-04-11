"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-lg font-bold mt-4">ERROR</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;

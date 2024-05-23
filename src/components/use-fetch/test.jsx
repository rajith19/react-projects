import React from 'react';
import useFetch from "./index.jsx";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>

    </div>
  );
}

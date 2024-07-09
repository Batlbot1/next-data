"use client";

import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const folder = params.folder;

  return (
	  <div className="ml-40">
		<h1>My Page: {Array.isArray(folder) ? folder.join('/') : 'No folder specified'}</h1>
	  </div>
  );
}

export default function Create({ onOpen }) {
  return (
	  <div
		  className="w-44 h-28 flex flex-col items-center rounded-lg border-4 border-dashed border-gray-200 p-4 m-2 hover:cursor-pointer hover:bg-black hover:text-white hover:border-transparent"
		  onClick={onOpen}>
		<div className="flex-none">
		  <h1> + </h1>
		</div>
		<h2>Create folder</h2>
	  </div>
  );
}
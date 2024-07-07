export default function Search() {
  return(
	<div className="w-full flex justify-center p-4">
	  <input
		  type="text"
		  placeholder="Search..."
		  className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
	  />
	</div>
  )
}
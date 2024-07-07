export default function Folder({nameFolder}) {
  return(
	<div className="w-52 h-52 bg-white shadow-xl flex items-center justify-center rounded-lg border border-gray-200 p-4 m-2 hover:cursor-pointer transition-transform hover:scale-105">
	  {nameFolder}
	</div>
  )
}
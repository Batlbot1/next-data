import React, {useState} from "react";
import {Button} from "@nextui-org/button";

export default function ModalCreate({ isOpen, onOpenChange, addFolder }) {
  const [folderName, setFolderName] = useState("");
  const dataToFolder = () => {
	if (folderName.trim() !== "") {
	  addFolder(folderName);
	  setFolderName("");
	  onOpenChange(false);
	}
  };
  return (
	<>

	  {isOpen && (
		  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
			<div className="w-52 h-52 bg-white rounded-lg flex flex-col items-center justify-center p-4">
			  <h1 className="text-black mb-4" >New Folder</h1>
			  <input
				  type="text"
				  value={folderName}
				  onChange={(e) => setFolderName(e.target.value)}
				  placeholder="Folder Name"
				  className="nameFolder w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			  <Button onClick={dataToFolder}>Add</Button>
			</div>
		  </div>
	  )}
	</>

  );
}

'use client'

import Image from "next/image";
import Folder from "@/components/folder/folder";
import Create from "@/components/folder/create";
import Download from "@/components/folder/download";
import File from "@/components/folder/file";
import Search from "@/components/search";
import Profile from "@/components/profile/profile";
import {useState} from "react";
import ModalCreate from "@/components/modal/modalCreate";
import {useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/button";


export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [folders, setFolders] = useState([
      {nameFolder: "Folder_1"},

  ]);

  const [files, setFiles] = useState([
    {nameFile: "File 1"},
  ]);

  const addFolder = (newFolderName) => {
    setFolders([...folders, { nameFolder: newFolderName }]);
  };

  return (

    <main className="ml-40 pt-10">
      <ModalCreate isOpen={isOpen} onOpenChange={onOpenChange} addFolder={addFolder}/>
      <div className="flex items-center">
        <Search />
        <Profile />
      </div>
      <Button onClick={onOpen}>Create Folder</Button>

      <div className="panel bg-white shadow-xl rounded-lg border border-gray-200 p-4 mb-4 mt-4 mr-6 flex flex-wrap justify-center items-center gap-4">
        <Create onOpen={onOpen} />
        <Download />
      </div>

      <div className="folder bg-white shadow-xl rounded-lg border border-gray-200 p-4 mr-4">
        <h1 className="text-left mb-4">All files</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {folders.map((item, index) =>(
              <Folder key={index} nameFolder={item.nameFolder}/>
          ))}

          {files.map((item, index) => (
              <File key={index} nameFile={item.nameFile} />
          ))}

        </div>
      </div>
    </main>
  );
}

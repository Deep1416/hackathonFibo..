"use client";

import { Button } from "@mui/material";
import { Heading, parseDocument } from "../utils/parseDocument";
import { useState } from "react";
import { DraggableStructure } from "../components/DraggableStructure";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "next/image";

export default function Home() {
  const [fileContent, setFileContent] = useState<Heading[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto mt-16 flex flex-col gap-4 px-4 sm:px-8 lg:px-16">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: "primary.dark",
          color: "white",
          "&:hover": {
            backgroundColor: "lightGreen",
          },
        }}
      >
        Upload file
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              if (file.type !== "text/plain") {
                alert("Please upload a plain text file.");
                return;
              }
              setLoading(true);
              const reader = new FileReader();
              reader.onload = (e) => {
                try {
                  const content = e.target?.result as string;
                  setFileContent(parseDocument(content));
                } catch (error) {
                  alert("Failed to parse the file: " + error);
                } finally {
                  setLoading(false);
                }
              };
              reader.readAsText(file);
            }
          }}
        />
      </Button>

      {loading && <p className="text-center text-lg">Processing file...</p>}

      {fileContent.length === 0 && !loading ? (
        <>
          <h1 className="text-center text-2xl font-semibold">
            Upload a Text File to Get Started
          </h1>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.gtag.xyz/images/sections/upload.svg"
              alt="Upload illustration"
              width={300}
              height={300}
            />
          </div>
        </>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <DraggableStructure structure={fileContent} />
        </DndProvider>
      )}
    </div>
  );
}

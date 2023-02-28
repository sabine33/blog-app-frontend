import React from "react";
import { Uploader } from "uploader";
import { UploadButton, UploadDropzone } from "react-uploader";

const options = { multi: false };
const uploader = Uploader({
  apiKey: "free",
});

function UploadImageComponent({
  setOnFileUpload,
}: {
  setOnFileUpload: Function;
}) {
  const onUploadSuccess = (files: any[]) => {
    let fileUrls = files.map((file) => file.fileUrl);
    if (fileUrls.length > 0) {
      setOnFileUpload(fileUrls[0]);
    } else {
      setOnFileUpload(null);
    }
  };

  return (
    <div>
      <UploadDropzone
        uploader={uploader}
        options={options}
        onUpdate={onUploadSuccess}
        width="400px"
        height="300px"
      />
    </div>
  );
}
export const UploadedFile = ({ file }: { file: any }) => {
  // const filePath = file.filePath;
  // const fileUrl = uploader.url(filePath, "thumbnail");
  return (
    <div className="row">
      <img
        src={file}
        className="img-responsive"
        alt="No Image preview available!"
      />
    </div>
  );
};

export default UploadImageComponent;

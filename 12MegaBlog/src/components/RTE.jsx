import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
export default function RTE({ name, Control, label, defaultValue = "" }) {
  return (
    <div>
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={Control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor ",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | image |forcolor | bold italic underline |  \
                alignment aligncenter alignjustify alignright | \
                bulllist  numlist outdent indent | removeformat | help blocks",
              content_style:
                "body { font-family: Helvetica,Arial, sans-serif: font-size:14px} ",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

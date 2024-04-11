import { useEffect, useState } from "react";

const useDragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const input = document.getElementById("file-input") as HTMLInputElement;
    const handleChange = () => {
      const file = input.files?.[0];
      if (!file) {
        return;
      }
      const typesPermited = ["image/jpeg", "image/png", "image/gif"];
      if (!typesPermited.includes(file.type))
        return alert("Tipo de archivo no permitido");
      if (file.size > 2 * 1024 * 1024)
        return alert("El tamaño del archivo no puede superar los 2MB");
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file || null);
    };
    input.addEventListener("change", handleChange);
    return () => {
      input.removeEventListener("change", handleChange);
    };
  }, [selectedFile]);

  const handleButtonClick = () => {
    const input = document.getElementById("file-input") as HTMLInputElement;
    input.click();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    const typesPermited = ["image/jpeg", "image/png", "image/gif"];
    if (!typesPermited.includes(file.type))
      return alert("Tipo de archivo no permitido");
    if (file.size > 2 * 1024 * 1024)
      return alert("El tamaño del archivo no puede superar los 2MB");
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    setSelectedFile(file || null);
    // Aquí puedes realizar cualquier lógica que desees con el archivo
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewImage(null);
  };
  const handleDownload = () => {
    if (selectedFile) {
      const downloadLink = document.createElement("a");
      downloadLink.href = previewImage!;
      downloadLink.download = selectedFile.name;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return {
    dragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    previewImage,
    handleButtonClick,
    selectedFile,
    handleDownload,
    handleReset,
  };
};

export default useDragAndDrop;

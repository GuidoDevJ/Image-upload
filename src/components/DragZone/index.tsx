import useDragAndDrop from "../../Hooks/DragDrop";
import DownLoad from "../../assets/arrowup.svg";
import Button from "../../ui/Buttons/Button";
const DragDropZone = () => {
  const {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    previewImage,
    handleButtonClick,
    handleDownload,
    handleReset
  } = useDragAndDrop();
  return (
    <>
      <div
        className="w-screen h-[90vh] flex flex-col justify-center items-center sm:w-[50%] mx-auto dark:text-[#fff]"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="w-[50vw] h-96 bg-[#FFFFFF] dark:bg-[#4D5562] rounded-lg flex justify-center items-center">
        {previewImage ?(
        <img src={previewImage} className="w-[96%] h-[96%] rounded-lg object-fill" />
      ):(

          <div className="w-[96%] h-[96%] rounded-lg border-dotted border-4 border-[#E5E7EB] flex flex-col justify-center items-center">
            
              <div className="mb-6">
                <img src={DownLoad} className="w-8 h-6 bg-[#C2DAF9] rounded" />
              </div>
              <p className="font-inter text-base mb-2">
                Drag & drop a file or{" "}
                <span
                  className="font-bold text-[#3662E3] cursor-pointer"
                  onClick={handleButtonClick}
                >
                  browse files
                </span>
              </p>
              <p className="font-inter text-xs">
                JPG, PNG or GIF - Max file size 2MB
              </p>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                multiple={true}
                id="file-input"
                name="file-input"
                style={{ display: "none" }}
                required
                data-testid="file-input"
                data-cy="file-input"
                data-test-id="file-input"
                data-test-file-input="file-input"
                data-test-file-input-id="file-input"
                data-test-file-input-name="file-input"
                data-test-file-input-multiple="file-input"
                data-test-file-input-accept="file-input"
                data-test-file-input-required="file-input"
                data-test-file-input-style="file-input"
                data-test-file-input-style-display="file-input"
                data-test-file-input-style-display-none="file-input"
              />
          </div>
      )}
          
        </div>
        {
          previewImage &&(
            <div className="mt-8 w-[34vh] flex justify-evenly items-center">
             <Button text="Download" fn={handleDownload}/>
             <Button text="Back" fn={handleReset}/>
            </div>
          )
        }
      </div>
    </>
  );
};

export default DragDropZone;

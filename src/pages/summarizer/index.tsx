import { UploadButton } from '../../utils/uploadThing'

export default function index() {

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <UploadButton
          endpoint="pdfUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </main>
    </div>
  )
}

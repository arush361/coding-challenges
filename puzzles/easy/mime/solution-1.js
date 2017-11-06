function getMIME(fileName){
  const f = fileName.split(".");
  if (f.length > 1){
      const ext = f.pop().toLowerCase();
      if (mime[ext]) return mime[ext];
  }
  return "UNKNOWN";
}

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const mime = {}

for (let i = 0; i < N; i++) {
  const inputs = readline().split(" ");
  const fileExtension = inputs[0]; // file extension
  const mimeType = inputs[1]; // MIME type.
  mime[fileExtension.toLowerCase()] = mimeType; // Save MIME type to the array
}
for (let i = 0; i < Q; i++) {
  const fileName = readline();
  print(getMIME(fileName));
}
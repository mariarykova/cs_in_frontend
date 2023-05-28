const inputFile = document.querySelector(
  'input[type="file"]'
) as HTMLInputElement;
const canvas = document.querySelector("canvas") as HTMLCanvasElement;

const loadImage = (
  inputFile: HTMLInputElement,
  canvas: HTMLCanvasElement
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    if (!inputFile.files?.length) {
      reject(new Error("No file selected"));
      return;
    }

    const file = inputFile.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const image = new Image();

      image.addEventListener("load", () => {
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext("2d");
        context?.drawImage(image, 0, 0, canvas.width, canvas.height);
        //context?.getImageData(0, 0, canvas.width, canvas.height);

        resolve(image);
      });

      image.addEventListener("error", () => {
        reject(new Error("Failed to load image"));
      });

      image.src = reader.result as string;
    });

    reader.addEventListener("error", () => {
      reject(new Error("Failed to read file"));
    });

    reader.readAsDataURL(file);
  });
};

inputFile.addEventListener("change", async () => {
  try {
    const image = await loadImage(inputFile, canvas);
    console.log("Image loaded:", image);
  } catch (error) {
    console.error("Error loading image:", error);
  }
});

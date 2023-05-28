function getImageDataFromSource(source) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const image = new Image();
  image.src = source;

  console.log(image);

  canvas.width = image.width;
  canvas.height = image.height;

  context.drawImage(image, 0, 0);

  return context.getImageData(0, 0, canvas.width, canvas.height);
}

function grayscale(source) {
  //  const imageData = getImageDataFromSource(source);

  const data = source.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }

  const canvas = document.getElementById("grayscale");
  canvas.width = source.width;
  canvas.height = source.height;

  const context = canvas.getContext("2d");
  context.putImageData(source, 0, 0);

  return canvas.toDataURL();
}

function inverse(source) {
  //  const imageData = getImageDataFromSource(source);
  const data = source.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    data[i] = 255 - r;
    data[i + 1] = 255 - g;
    data[i + 2] = 255 - b;
  }

  const canvas = document.getElementById("inverse");
  canvas.width = source.width;
  canvas.height = source.height;

  const context = canvas.getContext("2d");
  context.putImageData(source, 0, 0);

  return canvas.toDataURL();
}

const imageLoader = document.getElementById("imageLoader");
imageLoader.addEventListener("change", function (event) {
  const originalImage = document.getElementById("original");
  originalImage.src = URL.createObjectURL(event.target.files[0]);

  originalImage.addEventListener("load", function () {
    const grayscaleCanvas = document.getElementById("grayscale");
    grayscaleCanvas.width = originalImage.width;
    grayscaleCanvas.height = originalImage.height;
    const grayscaleContext = grayscaleCanvas.getContext("2d");
    grayscaleContext.drawImage(originalImage, 0, 0);
    const grayscaleData = grayscaleContext.getImageData(
      0,
      0,
      grayscaleCanvas.width,
      grayscaleCanvas.height
    );
    grayscale(grayscaleData);

    const inverseCanvas = document.getElementById("inverse");
    inverseCanvas.width = originalImage.width;
    inverseCanvas.height = originalImage.height;
    const inverseContext = inverseCanvas.getContext("2d");
    inverseContext.drawImage(originalImage, 0, 0);
    const inverseData = inverseContext.getImageData(
      0,
      0,
      inverseCanvas.width,
      inverseCanvas.height
    );
    inverse(inverseData);

    grayscaleContext.putImageData(grayscaleData, 0, 0);
    inverseContext.putImageData(inverseData, 0, 0);
  });
});

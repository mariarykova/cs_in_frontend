"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputFile = document.querySelector('input[type="file"]');
const canvas = document.querySelector("canvas");
const loadImage = (inputFile, canvas) => {
    return new Promise((resolve, reject) => {
        var _a;
        if (!((_a = inputFile.files) === null || _a === void 0 ? void 0 : _a.length)) {
            reject(new Error("No file selected"));
            return;
        }
        const file = inputFile.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const image = new Image();
            image.addEventListener("load", () => {
                canvas.width = 300;
                canvas.height = 400;
                const context = canvas.getContext("2d");
                context === null || context === void 0 ? void 0 : context.drawImage(image, 0, 0);
                resolve(image);
            });
            image.addEventListener("error", () => {
                reject(new Error("Failed to load image"));
            });
            image.src = reader.result;
        });
        reader.addEventListener("error", () => {
            reject(new Error("Failed to read file"));
        });
        reader.readAsDataURL(file);
    });
};
inputFile.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield loadImage(inputFile, canvas);
        console.log("Image loaded:", image);
    }
    catch (error) {
        console.error("Error loading image:", error);
    }
}));

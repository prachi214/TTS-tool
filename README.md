# Image to Text Extraction 🖺 with React, Mantine, and Tesseract.js

This project is a React component that allows users to upload images, extract text from them using `Tesseract.js`, and copy the extracted text to the clipboard. The UI is built using the `Mantine` component library, and the project includes drag-and-drop file uploading functionality.

## Features

- Upload images via drag-and-drop or file selection.
- Extract text from images using `Tesseract.js`.
- Copy the extracted text to the clipboard.
- Responsive and visually appealing UI with Mantine.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Mantine**: Component library for React with customizable components.
- **Tesseract.js**: Library that allows text extraction (OCR) from images.
- **TypeScript**: Static type checker for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
  
## Libraries Used

- [Mantine](https://mantine.dev/): A React components library that helps you build fast and responsive apps.
- [Tesseract.js](https://github.com/naptha/tesseract.js): JavaScript library for OCR (optical character recognition) that processes images to extract text.
- [Tabler Icons](https://tabler-icons.io/): A set of free and open-source icons used in the project.

## How It Works 🔎

1. The user can upload images through a drag-and-drop interface or by selecting the file manually.
2. The `Tesseract.js` library processes the uploaded image and extracts text.
3. Once the text is extracted, it is displayed in the UI.
4. The user can copy the extracted text to the clipboard by clicking a button.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/prachi214/image-to-text-extraction.git
cd image-to-text-extraction

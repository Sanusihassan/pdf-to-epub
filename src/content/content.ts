export const tool = {
  PDF_to_EPUB: {
    title: "PDF to EPUB Converter",
    seoTitle: "Convert PDF to EPUB Free Online - Easy & Fast Transformation",
    description:
      "Convert your PDF documents into EPUB format for easy reading on e-readers and tablets.",
    color: "#86b910",
    type: ".pdf",
    to: "/pdf-to-epub",
    features: [
      {
        title: "Completely free and without registration",
        description:
          "PDFEquips offers a free online PDF to EPUB conversion service. It's not necessary to create an account, and we never ask for your email address or credit card information.",
      },
      {
        title: "High-quality EPUB conversion",
        description:
          "PDFEquips accurately converts your PDF documents into EPUB format, preserving the original layout and formatting as much as possible.",
      },
      {
        title: "Securely convert PDF to EPUB online",
        description:
          "All files you upload and create on our servers are encrypted for security reasons using TLS. They will be immediately and permanently deleted after processing. For more information, please refer to our privacy policy.",
      },
    ],
    keywords:
      "convert PDF to EPUB, PDF to EPUB converter, free PDF to EPUB, online PDF to EPUB, PDF to EPUB conversion, convert PDF to EPUB online free, free PDF to EPUB converter, PDF to EPUB tool, convert PDF to EPUB format, online PDF to EPUB conversion tool, secure PDF to EPUB conversion, PDF to EPUB online converter",
  },
  EPUB_to_PDF: {
    title: "EPUB to PDF Converter",
    seoTitle: "Online EPUB to PDF Conversion - Quick & Free Tool",
    description:
      "Convert your EPUB files into PDF format for easy sharing and printing.",
    color: "#86b910",
    type: ".epub",
    to: "/epub-to-pdf",
    features: [
      {
        title: "Free and easy to use",
        description:
          "PDFEquips provides a completely free online EPUB to PDF conversion service with no need for registration or sign-up. Just upload your EPUB file and get a PDF in seconds.",
      },
      {
        title: "High-quality PDF conversion",
        description:
          "Our converter accurately transforms your EPUB files into PDF format, ensuring that the original text, images, and formatting are preserved.",
      },
      {
        title: "Secure conversion process",
        description:
          "All files uploaded and converted on our platform are securely encrypted with TLS. They are automatically deleted from our servers after processing. Please see our privacy policy for more details.",
      },
    ],
    keywords:
      "convert EPUB to PDF, EPUB to PDF converter, free EPUB to PDF, online EPUB to PDF, EPUB to PDF conversion, convert EPUB to PDF online free, free EPUB to PDF converter, EPUB to PDF tool, convert EPUB to PDF format, online EPUB to PDF conversion tool, secure EPUB to PDF conversion, EPUB to PDF online converter",
  }
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};


export const edit_page = {
  edit_page_titles: {
    pdf_to_epub: "Convert PDF to EPUB options",
    epub_to_pdf: "Convert EPUB to PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    pdf_to_epub: "Convert PDF to EPUB",
    epub_to_pdf: "Convert EPUB to PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile = {
  titles: {
    "pdf-to-epub": [
      "PDF files have been converted to EPUB!",
      "PDF file has been converted to EPUB!",
    ],
    "epub-to-pdf": [
      "EPUB files have been converted to PDF!",
      "EPUB file has been converted to PDF!",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "Download Converted EPUB files",
      "Download Converted EPUB file",
    ],
    "epub-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
  },

  backto: {
    "pdf-to-epub": "Back To Convert PDF to EPUB",
    "epub-to-pdf": "Back To Convert EPUB to PDF",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};

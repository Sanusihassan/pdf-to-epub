import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_EPUB: {
    title: "PDF से EPUB कन्वर्टर",
    seoTitle: "PDF को EPUB में मुफ्त ऑनलाइन कन्वर्ट करें - आसान और तेज़ परिवर्तन",
    description:
      "अपने PDF दस्तावेज़ों को ई-रीडर और टैबलेट पर आसानी से पढ़ने के लिए EPUB प्रारूप में कन्वर्ट करें।",
    color: "#86b910",
    type: ".pdf",
    to: "/pdf-to-epub",
    features: [
      {
        title: "पूरी तरह से मुफ़्त और बिना पंजीकरण के",
        description:
          "PDFEquips एक मुफ्त ऑनलाइन PDF से EPUB रूपांतरण सेवा प्रदान करता है। खाता बनाना आवश्यक नहीं है, और हम कभी भी आपका ईमेल पता या क्रेडिट कार्ड जानकारी नहीं मांगते हैं।",
      },
      {
        title: "उच्च गुणवत्ता वाला EPUB रूपांतरण",
        description:
          "PDFEquips आपके PDF दस्तावेज़ों को EPUB प्रारूप में सटीक रूप से परिवर्तित करता है, मूल लेआउट और स्वरूपण को यथासंभव संरक्षित करता है।",
      },
      {
        title: "ऑनलाइन सुरक्षित रूप से PDF को EPUB में कन्वर्ट करें",
        description:
          "आपके द्वारा अपलोड की गई और हमारे सर्वर पर बनाई गई सभी फ़ाइलें सुरक्षा कारणों से TLS का उपयोग करके एन्क्रिप्ट की जाती हैं। उन्हें प्रोसेसिंग के बाद तुरंत और स्थायी रूप से हटा दिया जाएगा। अधिक जानकारी के लिए, कृपया हमारी गोपनीयता नीति देखें।",
      },
    ],
    keywords:
      "PDF को EPUB में कन्वर्ट करें, PDF से EPUB कन्वर्टर, मुफ्त PDF से EPUB, ऑनलाइन PDF से EPUB, PDF से EPUB रूपांतरण, मुफ्त ऑनलाइन PDF से EPUB कन्वर्ट करें, मुफ्त PDF से EPUB कन्वर्टर, PDF से EPUB टूल, PDF को EPUB प्रारूप में कन्वर्ट करें, ऑनलाइन PDF से EPUB रूपांतरण टूल, सुरक्षित PDF से EPUB रूपांतरण, ऑनलाइन PDF से EPUB कन्वर्टर",
  },
  EPUB_to_PDF: {
    title: "EPUB से PDF कन्वर्टर",
    seoTitle: "ऑनलाइन EPUB से PDF रूपांतरण - त्वरित और निःशुल्क उपकरण",
    description:
      "अपनी EPUB फ़ाइलों को आसानी से साझा करने और प्रिंट करने के लिए PDF प्रारूप में कन्वर्ट करें।",
    color: "#86b910",
    type: ".epub",
    to: "/epub-to-pdf",
    features: [
      {
        title: "मुफ़्त और उपयोग में आसान",
        description:
          "PDFEquips पंजीकरण या साइन-अप की आवश्यकता के बिना पूरी तरह से मुफ्त ऑनलाइन EPUB से PDF रूपांतरण सेवा प्रदान करता है। बस अपनी EPUB फ़ाइल अपलोड करें और सेकंड में PDF प्राप्त करें।",
      },
      {
        title: "उच्च गुणवत्ता वाला PDF रूपांतरण",
        description:
          "हमारा कन्वर्टर आपके EPUB फ़ाइलों को सटीक रूप से PDF प्रारूप में बदल देता है, यह सुनिश्चित करता है कि मूल टेक्स्ट, चित्र और स्वरूपण संरक्षित रहें।",
      },
      {
        title: "सुरक्षित रूपांतरण प्रक्रिया",
        description:
          "हमारे प्लेटफॉर्म पर अपलोड और कन्वर्ट की गई सभी फ़ाइलें TLS के साथ सुरक्षित रूप से एन्क्रिप्ट की जाती हैं। प्रोसेसिंग के बाद उन्हें हमारे सर्वर से स्वचालित रूप से हटा दिया जाता है। अधिक जानकारी के लिए कृपया हमारी गोपनीयता नीति देखें।",
      },
    ],
    keywords:
      "EPUB को PDF में कन्वर्ट करें, EPUB से PDF कन्वर्टर, मुफ्त EPUB से PDF, ऑनलाइन EPUB से PDF, EPUB से PDF रूपांतरण, मुफ्त ऑनलाइन EPUB से PDF कन्वर्ट करें, मुफ्त EPUB से PDF कन्वर्टर, EPUB से PDF टूल, EPUB को PDF प्रारूप में कन्वर्ट करें, ऑनलाइन EPUB से PDF रूपांतरण टूल, सुरक्षित EPUB से PDF रूपांतरण, ऑनलाइन EPUB से PDF कन्वर्टर",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "PDF को EPUB में कन्वर्ट करने के विकल्प",
    epub_to_pdf: "EPUB को PDF में कन्वर्ट करने के विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    pdf_to_epub: "PDF को EPUB में कन्वर्ट करें",
    epub_to_pdf: "EPUB को PDF में कन्वर्ट करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": [
      "PDF फ़ाइलें EPUB में कन्वर्ट हो गई हैं!",
      "PDF फ़ाइल को EPUB में कन्वर्ट कर दिया गया है!",
    ],
    "epub-to-pdf": [
      "EPUB फ़ाइलें PDF में कन्वर्ट हो गई हैं!",
      "EPUB फ़ाइल को PDF में कन्वर्ट कर दिया गया है!",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "कन्वर्ट की गई EPUB फ़ाइलें डाउनलोड करें",
      "कन्वर्ट की गई EPUB फ़ाइल डाउनलोड करें",
    ],
    "epub-to-pdf": [
      "कन्वर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कन्वर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },

  backto: {
    "pdf-to-epub": "वापस PDF को EPUB में कन्वर्ट करने के लिए",
    "epub-to-pdf": "वापस EPUB को PDF में कन्वर्ट करने के लिए",
  },
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};

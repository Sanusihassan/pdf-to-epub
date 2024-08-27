import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_EPUB: {
    title: "محول PDF إلى EPUB",
    seoTitle: "تحويل PDF إلى EPUB مجانًا عبر الإنترنت - تحويل سريع وسهل",
    description:
      "تحويل ملفات PDF الخاصة بك إلى تنسيق EPUB لقراءتها بسهولة على أجهزة القراءة الإلكترونية والأجهزة اللوحية.",
    color: "#86b910",
    type: ".pdf",
    to: "/pdf-to-epub",
    features: [
      {
        title: "مجانًا تمامًا وبدون تسجيل",
        description:
          "يوفر PDFEquips خدمة تحويل PDF إلى EPUB مجانية عبر الإنترنت. ليس من الضروري إنشاء حساب، ولن نطلب عنوان بريدك الإلكتروني أو معلومات بطاقة الائتمان الخاصة بك.",
      },
      {
        title: "تحويل EPUB عالي الجودة",
        description:
          "يحول PDFEquips ملفات PDF الخاصة بك بدقة إلى تنسيق EPUB، مع الحفاظ على التخطيط والتنسيق الأصلي قدر الإمكان.",
      },
      {
        title: "تحويل آمن لـ PDF إلى EPUB عبر الإنترنت",
        description:
          "يتم تشفير جميع الملفات التي تقوم بتحميلها وإنشائها على خوادمنا لأسباب أمنية باستخدام TLS. سيتم حذفها على الفور وبشكل دائم بعد المعالجة. لمزيد من المعلومات، يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا.",
      },
    ],
    keywords:
      "تحويل PDF إلى EPUB، محول PDF إلى EPUB، PDF إلى EPUB مجانًا، PDF إلى EPUB عبر الإنترنت، تحويل PDF إلى EPUB، تحويل PDF إلى EPUB مجانًا عبر الإنترنت، محول PDF إلى EPUB مجاني، أداة تحويل PDF إلى EPUB، تحويل PDF إلى تنسيق EPUB، أداة تحويل PDF إلى EPUB عبر الإنترنت، تحويل آمن لـ PDF إلى EPUB، محول PDF إلى EPUB عبر الإنترنت",
  },
  EPUB_to_PDF: {
    title: "محول EPUB إلى PDF",
    seoTitle: "تحويل EPUB إلى PDF عبر الإنترنت - أداة سريعة ومجانية",
    description:
      "تحويل ملفات EPUB الخاصة بك إلى تنسيق PDF للمشاركة والطباعة بسهولة.",
    color: "#86b910",
    type: ".epub",
    to: "/epub-to-pdf",
    features: [
      {
        title: "مجانًا وسهل الاستخدام",
        description:
          "يوفر PDFEquips خدمة تحويل EPUB إلى PDF مجانية عبر الإنترنت بدون الحاجة إلى التسجيل أو التسجيل. ما عليك سوى تحميل ملف EPUB الخاص بك والحصول على ملف PDF في ثوانٍ.",
      },
      {
        title: "تحويل PDF عالي الجودة",
        description:
          "يحول محولنا ملفات EPUB الخاصة بك بدقة إلى تنسيق PDF، مع ضمان الحفاظ على النص والصور والتنسيق الأصلي.",
      },
      {
        title: "عملية تحويل آمنة",
        description:
          "يتم تشفير جميع الملفات التي يتم تحميلها وتحويلها على منصتنا بأمان باستخدام TLS. يتم حذفها تلقائيًا من خوادمنا بعد المعالجة. يرجى الاطلاع على سياسة الخصوصية الخاصة بنا لمزيد من التفاصيل.",
      },
    ],
    keywords:
      "تحويل EPUB إلى PDF، محول EPUB إلى PDF، EPUB إلى PDF مجانًا، EPUB إلى PDF عبر الإنترنت، تحويل EPUB إلى PDF، تحويل EPUB إلى PDF مجانًا عبر الإنترنت، محول EPUB إلى PDF مجاني، أداة تحويل EPUB إلى PDF، تحويل EPUB إلى تنسيق PDF، أداة تحويل EPUB إلى PDF عبر الإنترنت، تحويل آمن لـ EPUB إلى PDF، محول EPUB إلى PDF عبر الإنترنت",
  },
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "خيارات تحويل PDF إلى EPUB",
    epub_to_pdf: "خيارات تحويل EPUB إلى PDF",
  },
  loader_text: "الرجاء الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    pdf_to_epub: "تحويل PDF إلى EPUB",
    epub_to_pdf: "تحويل EPUB إلى PDF",
  },
  pages: "الصفحات",
  page: "الصفحة",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": [
      "تم تحويل ملفات PDF إلى EPUB!",
      "تم تحويل ملف PDF إلى EPUB!",
    ],
    "epub-to-pdf": [
      "تم تحويل ملفات EPUB إلى PDF!",
      "تم تحويل ملف EPUB إلى PDF!",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "تنزيل الملفات المحولة EPUB",
      "تنزيل الملف المحول EPUB",
    ],
    "epub-to-pdf": [
      "تنزيل الملفات المحولة PDF",
      "تنزيل الملف المحول PDF",
    ],
  },

  backto: {
    "pdf-to-epub": "العودة إلى تحويل PDF إلى EPUB",
    "epub-to-pdf": "العودة إلى تحويل EPUB إلى PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};

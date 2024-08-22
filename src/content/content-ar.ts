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
    seoTitle: "تحويل PDF إلى EPUB عبر الإنترنت - محول PDF إلى EPUB مجاني",
    description:
      "قم بتحويل مستندات PDF الخاصة بك إلى تنسيق EPUB لقراءتها بسهولة على أجهزة القراءة الإلكترونية والأجهزة اللوحية.",
    color: "#86b910",
    type: ".epub",
    to: "/pdf-to-epub",
    features: [
      {
        title: "مجاني تمامًا وبدون تسجيل",
        description:
          "يوفر PDFEquips خدمة تحويل PDF إلى EPUB مجانية عبر الإنترنت. ليس من الضروري إنشاء حساب، ولن نطلب منك عنوان بريدك الإلكتروني أو معلومات بطاقة الائتمان.",
      },
      {
        title: "تحويل EPUB عالي الجودة",
        description:
          "يقوم PDFEquips بتحويل مستندات PDF الخاصة بك إلى تنسيق EPUB بدقة، مع الحفاظ على التخطيط والتنسيق الأصليين قدر الإمكان.",
      },
      {
        title: "تحويل PDF إلى EPUB عبر الإنترنت بأمان",
        description:
          "يتم تشفير جميع الملفات التي تقوم بتحميلها وإنشائها على خوادمنا لأسباب أمنية باستخدام TLS. سيتم حذفها على الفور وبشكل دائم بعد المعالجة. لمزيد من المعلومات، يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا.",
      },
    ],
    keywords:
      "تحويل PDF إلى EPUB، محول PDF إلى EPUB، PDF إلى EPUB مجاني، PDF إلى EPUB عبر الإنترنت، تحويل PDF إلى EPUB، تحويل PDF إلى EPUB مجانًا عبر الإنترنت، محول PDF إلى EPUB مجاني، أداة PDF إلى EPUB، تحويل PDF إلى تنسيق EPUB، أداة تحويل PDF إلى EPUB عبر الإنترنت، تحويل PDF إلى EPUB آمن، محول PDF إلى EPUB عبر الإنترنت",
  },

  // ... (more tools)
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
  },
  loader_text: "الرجاء الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    pdf_to_epub: "تحويل PDF إلى EPUB",
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
  },

  btnText: {
    "pdf-to-epub": ["تنزيل ملفات EPUB المحولة", "تنزيل ملف EPUB المحول"],
  },

  backto: {
    "pdf-to-epub": "العودة إلى تحويل PDF إلى EPUB",
  },
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

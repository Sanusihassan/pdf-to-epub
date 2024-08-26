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
    title: "PDF 转 EPUB",
    seoTitle: "在线免费将 PDF 转换为 EPUB - 简单快速转换",
    description:
      "将您的 PDF 文档转换为 EPUB 格式，以便在电子阅读器和平板电脑上轻松阅读。",
    color: "#86b910",
    type: ".pdf",
    to: "/pdf-to-epub",
    features: [
      {
        title: "完全免费，无需注册",
        description:
          "PDFEquips 提供免费的在线 PDF 到 EPUB 转换服务。无需创建帐户，我们也不会询问您的电子邮件地址或信用卡信息。",
      },
      {
        title: "高质量的 EPUB 转换",
        description:
          "PDFEquips 将您的 PDF 文档准确地转换为 EPUB 格式，尽可能保留原始布局和格式。",
      },
      {
        title: "在线安全转换 PDF 到 EPUB",
        description:
          "您在我们的服务器上上传和创建的所有文件都使用 TLS 加密以确保安全。处理后将立即永久删除。有关更多信息，请参阅我们的隐私政策。",
      },
    ],
    keywords:
      "将 PDF 转换为 EPUB，PDF 到 EPUB 转换器，免费 PDF 到 EPUB，在线 PDF 到 EPUB，PDF 到 EPUB 转换，免费在线将 PDF 转换为 EPUB，免费 PDF 到 EPUB 转换器，PDF 到 EPUB 工具，将 PDF 转换为 EPUB 格式，在线 PDF 到 EPUB 转换工具，安全的 PDF 到 EPUB 转换，在线 PDF 到 EPUB 转换器",
  },
  EPUB_to_PDF: {
    title: "EPUB 转 PDF",
    seoTitle: "在线 EPUB 到 PDF 转换 - 快速免费工具",
    description:
      "将您的 EPUB 文件转换为 PDF 格式，以便轻松共享和打印。",
    color: "#86b910",
    type: ".epub",
    to: "/epub-to-pdf",
    features: [
      {
        title: "免费且易于使用",
        description:
          "PDFEquips 提供完全免费的在线 EPUB 到 PDF 转换服务，无需注册或注册。只需上传您的 EPUB 文件即可在几秒钟内获得 PDF。",
      },
      {
        title: "高质量的 PDF 转换",
        description:
          "我们的转换器将您的 EPUB 文件准确地转换为 PDF 格式，确保保留原始文本、图像和格式。",
      },
      {
        title: "安全的转换过程",
        description:
          "在我们平台上上传和转换的所有文件都使用 TLS 安全加密。处理后会自动从我们的服务器删除。有关更多详细信息，请参阅我们的隐私政策。",
      },
    ],
    keywords:
      "将 EPUB 转换为 PDF，EPUB 到 PDF 转换器，免费 EPUB 到 PDF，在线 EPUB 到 PDF，EPUB 到 PDF 转换，免费在线将 EPUB 转换为 PDF，免费 EPUB 到 PDF 转换器，EPUB 到 PDF 工具，将 EPUB 转换为 PDF 格式，在线 EPUB 到 PDF 转换工具，安全的 EPUB 到 PDF 转换，在线 EPUB 到 PDF 转换器",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "PDF 转 EPUB 选项",
    epub_to_pdf: "EPUB 转 PDF 选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    pdf_to_epub: "将 PDF 转换为 EPUB",
    epub_to_pdf: "将 EPUB 转换为 PDF",
  },
  pages: "页",
  page: "页",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": [
      "PDF 文件已转换为 EPUB！",
      "PDF 文件已转换为 EPUB！",
    ],
    "epub-to-pdf": [
      "EPUB 文件已转换为 PDF！",
      "EPUB 文件已转换为 PDF！",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "下载转换后的 EPUB 文件",
      "下载转换后的 EPUB 文件",
    ],
    "epub-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
  },

  backto: {
    "pdf-to-epub": "返回转换 PDF 到 EPUB",
    "epub-to-pdf": "返回转换 EPUB 到 PDF",
  },
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};

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
    title: "PDF 轉 EPUB 轉換器",
    seoTitle: "在線將 PDF 轉換為 EPUB - 免費 PDF 轉 EPUB 轉換器",
    description:
      "將您的 PDF 文檔轉換為 EPUB 格式，以便在電子閱讀器和平板電腦上輕鬆閱讀。",
    color: "#86b910",
    type: ".epub",
    to: "/pdf-to-epub",
    features: [
      {
        title: "完全免費且無需註冊",
        description:
          "PDFEquips 提供免費的線上 PDF 轉 EPUB 轉換服務。無需註冊帳戶，我們也不會詢問您的電子郵件地址或信用卡資訊。",
      },
      {
        title: "高品質的 EPUB 轉換",
        description:
          "PDFEquips 精準地將您的 PDF 文檔轉換為 EPUB 格式，盡可能保留原始的佈局和格式。",
      },
      {
        title: "在線安全地將 PDF 轉換為 EPUB",
        description:
          "您在我們的伺服器上上傳和創建的所有檔案都使用 TLS 加密，以確保安全性。處理後，這些檔案將立即且永久地刪除。如需了解更多資訊，請參閱我們的隱私政策。",
      },
    ],
    keywords:
      "PDF 轉 EPUB、PDF 轉 EPUB 轉換器、免費 PDF 轉 EPUB、在線 PDF 轉 EPUB、PDF 轉 EPUB 轉換、在線免費將 PDF 轉換為 EPUB、免費 PDF 轉 EPUB 轉換器、PDF 轉 EPUB 工具、將 PDF 轉換為 EPUB 格式、在線 PDF 轉 EPUB 轉換工具、安全的 PDF 轉 EPUB 轉換、PDF 轉 EPUB 在線轉換器",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "PDF 轉 EPUB 轉換選項",
  },
  loader_text: "請稍等...",
  add_more_button: "添加更多檔案",
  action_buttons: {
    pdf_to_epub: "將 PDF 轉換為 EPUB",
  },
  pages: "頁面",
  page: "頁面",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": ["PDF 檔案已轉換為 EPUB！", "PDF 檔案已轉換為 EPUB！"],
  },

  btnText: {
    "pdf-to-epub": ["下載轉換後的 EPUB 檔案", "下載轉換後的 EPUB 檔案"],
  },

  backto: {
    "pdf-to-epub": "返回 PDF 轉 EPUB",
  },
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
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

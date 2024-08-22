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
    title: "Convertidor de PDF a EPUB",
    seoTitle:
      "Convertir PDF a EPUB en línea - Convertidor gratuito de PDF a EPUB",
    description:
      "Convierte tus documentos PDF en formato EPUB para leerlos fácilmente en lectores electrónicos y tabletas.",
    color: "#86b910",
    type: ".epub",
    to: "/pdf-to-epub",
    features: [
      {
        title: "Completamente gratuito y sin registro",
        description:
          "PDFEquips ofrece un servicio gratuito de conversión de PDF a EPUB en línea. No es necesario crear una cuenta y nunca le pedimos su dirección de correo electrónico o información de tarjeta de crédito.",
      },
      {
        title: "Conversión de EPUB de alta calidad",
        description:
          "PDFEquips convierte con precisión tus documentos PDF en formato EPUB, preservando el diseño y el formato originales en la medida de lo posible.",
      },
      {
        title: "Convertir PDF a EPUB en línea de forma segura",
        description:
          "Todos los archivos que cargue y cree en nuestros servidores están encriptados por razones de seguridad utilizando TLS. Se eliminarán de inmediato y permanentemente después del procesamiento. Para obtener más información, consulte nuestra política de privacidad.",
      },
    ],
    keywords:
      "convertir PDF a EPUB, convertidor de PDF a EPUB, PDF a EPUB gratis, PDF a EPUB en línea, conversión de PDF a EPUB, convertir PDF a EPUB en línea gratis, convertidor gratuito de PDF a EPUB, herramienta de PDF a EPUB, convertir PDF a formato EPUB, herramienta de conversión de PDF a EPUB en línea, conversión segura de PDF a EPUB, convertidor de PDF a EPUB en línea",
  },
};
export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "Opciones de conversión de PDF a EPUB",
  },
  loader_text: "Por favor, espere...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    pdf_to_epub: "Convertir PDF a EPUB",
  },
  pages: "páginas",
  page: "página",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": [
      "¡Los archivos PDF se han convertido a EPUB!",
      "¡El archivo PDF se ha convertido a EPUB!",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "Descargar archivos EPUB convertidos",
      "Descargar archivo EPUB convertido",
    ],
  },

  backto: {
    "pdf-to-epub": "Volver a Convertir PDF a EPUB",
  },
};
export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
};

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
    seoTitle: "Convierte PDF a EPUB en línea de forma gratuita - Transformación fácil y rápida",
    description:
      "Convierte tus documentos PDF en formato EPUB para leerlos fácilmente en lectores electrónicos y tabletas.",
    color: "#86b910",
    type: ".pdf",
    to: "/pdf-to-epub",
    features: [
      {
        title: "Completamente gratuito y sin registro",
        description:
          "PDFEquips ofrece un servicio gratuito de conversión de PDF a EPUB en línea. No es necesario crear una cuenta, y nunca le pedimos su dirección de correo electrónico o información de tarjeta de crédito.",
      },
      {
        title: "Conversión de EPUB de alta calidad",
        description:
          "PDFEquips convierte con precisión sus documentos PDF en formato EPUB, preservando el diseño y el formato originales en la medida de lo posible.",
      },
      {
        title: "Convierte PDF a EPUB en línea de forma segura",
        description:
          "Todos los archivos que cargue y cree en nuestros servidores están encriptados por razones de seguridad utilizando TLS. Se eliminarán de inmediato y permanentemente después del procesamiento. Para obtener más información, consulte nuestra política de privacidad.",
      },
    ],
    keywords:
      "convertir PDF a EPUB, convertidor de PDF a EPUB, PDF a EPUB gratis, PDF a EPUB en línea, conversión de PDF a EPUB, convertir PDF a EPUB en línea gratis, convertidor de PDF a EPUB gratis, herramienta de conversión de PDF a EPUB, convertir PDF a formato EPUB, herramienta de conversión de PDF a EPUB en línea, conversión segura de PDF a EPUB, convertidor de PDF a EPUB en línea",
  },
  EPUB_to_PDF: {
    title: "Convertidor de EPUB a PDF",
    seoTitle: "Conversión de EPUB a PDF en línea - Herramienta rápida y gratuita",
    description:
      "Convierte tus archivos EPUB en formato PDF para compartirlos e imprimirlos fácilmente.",
    color: "#86b910",
    type: ".epub",
    to: "/epub-to-pdf",
    features: [
      {
        title: "Gratis y fácil de usar",
        description:
          "PDFEquips proporciona un servicio de conversión de EPUB a PDF en línea completamente gratuito sin necesidad de registro o inscripción. Simplemente cargue su archivo EPUB y obtenga un PDF en segundos.",
      },
      {
        title: "Conversión de PDF de alta calidad",
        description:
          "Nuestro convertidor transforma con precisión sus archivos EPUB en formato PDF, asegurando que se preserve el texto original, las imágenes y el formato.",
      },
      {
        title: "Proceso de conversión seguro",
        description:
          "Todos los archivos cargados y convertidos en nuestra plataforma están encriptados de forma segura con TLS. Se eliminan automáticamente de nuestros servidores después del procesamiento. Consulte nuestra política de privacidad para obtener más detalles.",
      },
    ],
    keywords:
      "convertir EPUB a PDF, convertidor de EPUB a PDF, EPUB a PDF gratis, EPUB a PDF en línea, conversión de EPUB a PDF, convertir EPUB a PDF en línea gratis, convertidor de EPUB a PDF gratis, herramienta de conversión de EPUB a PDF, convertir EPUB a formato PDF, herramienta de conversión de EPUB a PDF en línea, conversión segura de EPUB a PDF, convertidor de EPUB a PDF en línea",
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
    epub_to_pdf: "Opciones de conversión de EPUB a PDF",
  },
  loader_text: "Por favor, espere...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    pdf_to_epub: "Convertir PDF a EPUB",
    epub_to_pdf: "Convertir EPUB a PDF",
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
    "epub-to-pdf": [
      "¡Los archivos EPUB se han convertido a PDF!",
      "¡El archivo EPUB se ha convertido a PDF!",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "Descargar archivos EPUB convertidos",
      "Descargar archivo EPUB convertido",
    ],
    "epub-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
  },

  backto: {
    "pdf-to-epub": "Volver a convertir PDF a EPUB",
    "epub-to-pdf": "Volver a convertir EPUB a PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
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

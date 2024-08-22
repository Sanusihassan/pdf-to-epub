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
    title: "Convertisseur PDF en EPUB",
    seoTitle:
      "Convertir PDF en EPUB en ligne - Convertisseur gratuit de PDF en EPUB",
    description:
      "Convertissez vos documents PDF en format EPUB pour les lire facilement sur les liseuses électroniques et les tablettes.",
    color: "#86b910",
    type: ".epub",
    to: "/pdf-to-epub",
    features: [
      {
        title: "Complètement gratuit et sans inscription",
        description:
          "PDFEquips offre un service gratuit de conversion de PDF en EPUB en ligne. Il n'est pas nécessaire de créer un compte et nous ne vous demandons jamais votre adresse e-mail ou vos informations de carte de crédit.",
      },
      {
        title: "Conversion EPUB de haute qualité",
        description:
          "PDFEquips convertit avec précision vos documents PDF en format EPUB, en préservant autant que possible la mise en page et le formatage originaux.",
      },
      {
        title: "Convertir PDF en EPUB en ligne de manière sécurisée",
        description:
          "Tous les fichiers que vous téléchargez et créez sur nos serveurs sont cryptés pour des raisons de sécurité à l'aide de TLS. Ils seront immédiatement et définitivement supprimés après le traitement. Pour plus d'informations, veuillez consulter notre politique de confidentialité.",
      },
    ],
    keywords:
      "convertir PDF en EPUB, convertisseur de PDF en EPUB, PDF en EPUB gratuit, PDF en EPUB en ligne, conversion de PDF en EPUB, convertir PDF en EPUB en ligne gratuitement, convertisseur gratuit de PDF en EPUB, outil de PDF en EPUB, convertir PDF en format EPUB, outil de conversion de PDF en EPUB en ligne, conversion sécurisée de PDF en EPUB, convertisseur de PDF en EPUB en ligne",
  },

  // ... (more tools)
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};
export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_epub: "Options de conversion de PDF en EPUB",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    pdf_to_epub: "Convertir PDF en EPUB",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-epub": [
      "Les fichiers PDF ont été convertis en EPUB !",
      "Le fichier PDF a été converti en EPUB !",
    ],
  },

  btnText: {
    "pdf-to-epub": [
      "Télécharger les fichiers EPUB convertis",
      "Télécharger le fichier EPUB converti",
    ],
  },

  backto: {
    "pdf-to-epub": "Retour à Convertir PDF en EPUB",
  },
};
export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};

/**
 * Single source of truth for all NTRL website content.
 * Only information supported by the official company profile document is used.
 * Anything unverified is marked with a PLACEHOLDER string so NTRL can supply it.
 */

export const PLACEHOLDER_PREFIX = "[";

export const company = {
  name: "Nirvan Testing & Research Laboratory Pvt. Ltd.",
  shortName: "NTRL",
  tagline: "We Test With Quality & Quality",
  positioning:
    "A trusted testing and research laboratory for construction and infrastructure projects.",
  category:
    "Infrastructure Construction Materials Testing Laboratory — Building & Road Material Testing",
  city: "Patna, Bihar, India",
  incorporated: "3 December 2019",
  website: "www.ntrlindia.in",
  websiteUrl: "https://www.ntrlindia.in",
  address:
    "4A/11, Jagdamba Path, Near Mahima Friends, North S.K. Puri, Boring Road, Patna - 800013, Bihar",
  nablAddress: "4A/11, North S. K. Puri, Phulwari, Patna, Bihar, India",
  phone: "+91-7739568485",
  phoneHref: "tel:+917739568485",
  emails: ["info@ntrlindia.in", "nirvantesting.pat@gmail.com"],
  whatsapp: "+91-7739568485",
  workingHours: "[WORKING HOURS TO BE PROVIDED BY NTRL]",
  mapsQuery:
    "4A/11 Jagdamba Path, North S.K. Puri, Boring Road, Patna 800013, Bihar",
  statutory: [
    { label: "CIN", value: "U74999BR2019PTC044363" },
    { label: "GSTIN", value: "10AAGCN7796P1ZQ" },
  ],
  leadership: [
    { name: "Dr. Rani Kumari", role: "Director" },
    { name: "Brajesh Prasad", role: "CEO — Chief Engineer (Retd.)" },
  ],
  social: [
    { label: "LinkedIn", url: "" },
    { label: "Facebook", url: "" },
    { label: "Instagram", url: "" },
    { label: "YouTube", url: "" },
  ],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Gallery", to: "/gallery" },
  { label: "Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
] as const;

export const credentials = {
  nabl: {
    labCode: "T-8940",
    certificateNo: "TC-17978",
    standard: "ISO/IEC 17025:2017",
    disciplines: "Mechanical and Chemical discipline",
    issueDate: "05/05/2026",
    validUntil: "04/05/2030",
  },
  iso: {
    standard: "ISO 9001:2015",
    note:
      "Certified through Bureau of Accredited Registrar (AIAO-BAR), USA / World Registration Group (WRG).",
  },
} as const;

export type IconName =
  | "flask"
  | "layers"
  | "route"
  | "mountain"
  | "boxes"
  | "droplets"
  | "drill"
  | "scan"
  | "leaf"
  | "map"
  | "beaker"
  | "ruler";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  overview: string[];
  whyItMatters: string;
  applications: string[];
  approach: string;
  categories?: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "building-material-testing",
    title: "Building Material Testing",
    short:
      "Testing services related to construction and building materials to support quality control and project requirements.",
    icon: "layers",
    categories: [
      "Cement Testing",
      "Concrete Testing",
      "Soil Testing",
      "Bitumen Testing",
      "Other building material testing",
    ],
    overview: [
      "NTRL provides third-party testing of construction and building materials for building, infrastructure and engineering projects.",
      "Testing is carried out as per relevant specifications, or as specified by Government and semi-Government departments, or as per client requirements.",
    ],
    whyItMatters:
      "Material quality directly determines the safety, durability and service life of a built structure. Independent testing gives project teams documented evidence that the materials used meet the specification.",
    applications: [
      "Building construction projects",
      "Infrastructure and development works",
      "Government and semi-Government projects",
      "Engineering and consultancy assignments",
    ],
    approach:
      "Testing is performed in a NABL accredited laboratory using advanced equipment maintained as per IS specifications and calibrated through NABL certified calibration agencies, supported by experienced scientists, analysts and engineers.",
    cta: "Enquire About Testing",
  },
  {
    slug: "road-material-testing",
    title: "Road Material Testing",
    short:
      "Testing and quality-assurance support for road construction materials and infrastructure projects.",
    icon: "route",
    categories: [
      "Material quality evaluation",
      "Construction quality control",
      "Laboratory testing",
      "Project support",
    ],
    overview: [
      "NTRL supports road and highway projects with laboratory testing of road construction materials.",
      "Work is undertaken as per relevant specifications or as specified by the client or the concerned department.",
    ],
    whyItMatters:
      "Road performance depends on the quality of the materials placed in each layer. Documented laboratory testing supports construction quality control and departmental reporting.",
    applications: [
      "Roads and highways",
      "Bridge and structure approaches",
      "Government road projects",
      "EPC and infrastructure contracts",
    ],
    approach:
      "A quality-oriented process, advanced calibrated equipment and an experienced technical team support reliable and repeatable results.",
    cta: "Request Road Material Testing",
  },
  {
    slug: "soil-testing",
    title: "Soil Testing",
    short:
      "Professional soil testing for construction and infrastructure-related requirements.",
    icon: "mountain",
    categories: ["Laboratory soil testing", "Field investigation", "Soil characterisation"],
    overview: [
      "NTRL carries out soil testing in the laboratory and supports field investigation requirements for construction and infrastructure projects.",
      "Specific test parameters are agreed with the client and carried out as per the applicable specification.",
    ],
    whyItMatters:
      "Soil behaviour governs foundation design, embankment stability and pavement performance. Reliable soil data reduces design risk on site.",
    applications: [
      "Building foundations",
      "Road embankments and subgrades",
      "Infrastructure and development projects",
      "Geotechnical assignments",
    ],
    approach:
      "Sampling, laboratory testing and reporting follow proper testing procedures with a focus on accuracy and technical compliance.",
    cta: "Request Soil Testing",
  },
  {
    slug: "concrete-testing",
    title: "Concrete Testing",
    short:
      "Testing of concrete and related construction requirements for quality assurance.",
    icon: "boxes",
    categories: [
      "Concrete cube testing",
      "Compressive strength testing",
      "Concrete-related laboratory testing",
    ],
    overview: [
      "NTRL tests concrete samples for quality assurance on building, road and infrastructure works.",
      "Concrete cube testing and compressive strength testing are supported by the laboratory's testing facilities.",
    ],
    whyItMatters:
      "Concrete strength results are one of the primary quality records on a construction project and are routinely required for departmental and client acceptance.",
    applications: [
      "Building and structural works",
      "Bridges and structures",
      "Railway and station infrastructure",
      "Government infrastructure projects",
    ],
    approach:
      "Samples are handled and tested in a controlled laboratory environment with calibrated equipment and documented reporting.",
    cta: "Request Concrete Testing",
  },
  {
    slug: "cement-testing",
    title: "Cement Testing",
    short:
      "Professional cement testing for construction quality control and material assessment.",
    icon: "flask",
    overview: [
      "NTRL provides cement testing services supporting material assessment and construction quality control.",
      "Testing is carried out as per the applicable specification or client requirement.",
    ],
    whyItMatters:
      "Cement quality influences concrete performance across the whole project. Independent verification protects the works against sub-standard material.",
    applications: [
      "Building construction",
      "Road and infrastructure works",
      "Precast and structural elements",
      "Material acceptance and quality control",
    ],
    approach:
      "Chemical and mechanical testing capability within the laboratory's accredited disciplines, supported by calibrated equipment.",
    cta: "Request Cement Testing",
  },
  {
    slug: "bitumen-testing",
    title: "Bitumen Testing",
    short:
      "Testing and evaluation of bitumen and related materials used in road and infrastructure projects.",
    icon: "droplets",
    overview: [
      "NTRL operates a dedicated bitumen testing section supporting road and infrastructure projects.",
      "Testing scope is defined by the applicable specification or by the client requirement.",
    ],
    whyItMatters:
      "Bituminous materials control the durability of flexible pavements. Testing supports acceptance of incoming material and quality control during execution.",
    applications: [
      "Roads and highways",
      "Pavement rehabilitation works",
      "EPC road contracts",
      "Government road departments",
    ],
    approach:
      "Advanced equipment maintained as per IS specifications, calibrated through NABL certified calibration agencies.",
    cta: "Request Bitumen Testing",
  },
  {
    slug: "geotechnical-investigation",
    title: "Geotechnical Investigation",
    short:
      "Geotechnical investigation and field testing support for construction and infrastructure projects.",
    icon: "drill",
    categories: ["Soil investigation", "Field testing", "Standard Penetration Test (SPT)"],
    overview: [
      "NTRL undertakes geotechnical investigation activities including soil investigation and field testing.",
      "Company documentation references Standard Penetration Test (SPT) work as part of field investigation.",
    ],
    whyItMatters:
      "Subsurface information is the basis of safe and economical foundation design. Field investigation reduces uncertainty before construction begins.",
    applications: [
      "Building and structural foundations",
      "Bridges and railway structures",
      "Road and highway alignments",
      "Government and smart city projects",
    ],
    approach:
      "Field activities and laboratory testing are combined into a single documented investigation carried out by experienced engineers and technical staff.",
    cta: "Request a Geotechnical Investigation",
  },
  {
    slug: "non-destructive-testing",
    title: "Non-Destructive Testing (NDT)",
    short:
      "Assessment and evaluation of structures and materials without destructive examination.",
    icon: "scan",
    overview: [
      "NTRL provides non-destructive testing services as part of its infrastructure construction materials testing activities.",
      "NDT supports evaluation and assessment of the relevant structure or material without destructive examination.",
    ],
    whyItMatters:
      "NDT allows an existing structure to be assessed while remaining in service, which is essential for condition assessment and quality verification.",
    applications: [
      "Existing buildings and structures",
      "Bridges and railway structures",
      "Infrastructure condition assessment",
      "Construction quality verification",
    ],
    approach:
      "Testing is planned with the client, executed by trained technical personnel and reported with a focus on accuracy and reliability. Specific techniques are confirmed against the accredited scope for each assignment.",
    cta: "Discuss an NDT Requirement",
  },
  {
    slug: "environmental-testing",
    title: "Environmental Testing",
    short:
      "Environmental sample testing, quality assessment and laboratory analysis.",
    icon: "leaf",
    categories: ["Environmental sample testing", "Quality assessment", "Laboratory analysis"],
    overview: [
      "Environmental testing is one of NTRL's declared work areas alongside its construction materials testing activities.",
      "Sample testing and laboratory analysis are carried out as per the applicable specification or client requirement.",
    ],
    whyItMatters:
      "Environmental data supports statutory compliance and responsible project execution for construction and infrastructure works.",
    applications: [
      "Construction and infrastructure projects",
      "Government and semi-Government works",
      "Industrial and development projects",
      "Compliance and monitoring requirements",
    ],
    approach:
      "Laboratory analysis is supported by chemical testing capability, calibrated instrumentation and experienced analysts.",
    cta: "Enquire About Environmental Testing",
  },
  {
    slug: "digital-surveying",
    title: "Digital Surveying",
    short:
      "Digital surveying activities supporting engineering, construction and infrastructure projects.",
    icon: "map",
    overview: [
      "Digital surveying is a declared activity of NTRL and supports engineering, construction and infrastructure projects.",
      "Scope for each assignment is agreed with the client.",
    ],
    whyItMatters:
      "Accurate survey data underpins design, quantity assessment and execution control on infrastructure projects.",
    applications: [
      "Road and highway alignments",
      "Building and development sites",
      "Infrastructure and urban projects",
      "Engineering consultancy support",
    ],
    approach:
      "Survey activities are carried out by technical personnel with a quality-oriented, documented process.",
    cta: "Discuss a Surveying Requirement",
  },
  {
    slug: "water-testing",
    title: "Water Testing",
    short:
      "Water testing support for construction and infrastructure project requirements.",
    icon: "beaker",
    overview: [
      "Water testing appears in NTRL's project documentation as part of testing work carried out for client projects.",
      "Test parameters for each assignment are confirmed with the client.",
    ],
    whyItMatters:
      "Water used in concrete and construction activities must be suitable for the works; testing provides documented confirmation.",
    applications: [
      "Concrete production and curing",
      "Construction and infrastructure works",
      "Railway and station projects",
      "Government project requirements",
    ],
    approach:
      "Analysis is undertaken in the laboratory's chemical testing facilities with documented reporting.",
    cta: "Enquire About Water Testing",
  },
  {
    slug: "concrete-mix-design",
    title: "Concrete Mix Design",
    short:
      "Concrete mix design support, as referenced in NTRL project documentation.",
    icon: "ruler",
    categories: ["M20", "M25", "M30", "M35", "M40"],
    overview: [
      "NTRL project documentation includes concrete mix design work covering grades M20, M25, M30, M35 and M40.",
      "Mix design assignments are undertaken against the requirements defined by the client and the project.",
    ],
    whyItMatters:
      "A properly established mix design links material properties to the required concrete grade and supports consistent site production.",
    applications: [
      "Railway station and building works",
      "Infrastructure and development projects",
      "Government and semi-Government works",
      "EPC construction contracts",
    ],
    approach:
      "Mix design work draws on the laboratory's cement, concrete, aggregate and water testing capability.",
    cta: "Request Mix Design Support",
  },
];

export const whyChooseUs = [
  {
    no: "01",
    title: "NABL Accreditation",
    body: `NABL accredited laboratory — Laboratory Code ${credentials.nabl.labCode}, Accreditation Certificate No. ${credentials.nabl.certificateNo}, in the field of testing.`,
    icon: "shield" as const,
  },
  {
    no: "02",
    title: "ISO 9001:2015 Certified",
    body:
      "A certified ISO 9001:2015 company, reflecting a documented quality management approach to laboratory work.",
    icon: "badge" as const,
  },
  {
    no: "03",
    title: "Advanced Equipment",
    body:
      "The laboratory is equipped with highly advanced equipment as per IS specifications, supporting a wide range of testing.",
    icon: "cog" as const,
  },
  {
    no: "04",
    title: "Calibrated Equipment",
    body:
      "Equipment is calibrated by NABL certified calibration agencies, supporting traceable and dependable results.",
    icon: "gauge" as const,
  },
  {
    no: "05",
    title: "Experienced Technical Professionals",
    body:
      "Experienced scientists, analysts and engineers support laboratory and technical activities, guided by a retired Chief Engineer from the State Government.",
    icon: "users" as const,
  },
  {
    no: "06",
    title: "Quality & Reliability",
    body:
      "Independent, third-party testing focused on accuracy, reliability and technical compliance.",
    icon: "check" as const,
  },
];

export const industries = [
  {
    slug: "construction",
    title: "Construction",
    body: "Building and construction projects requiring material testing and quality assurance.",
    icon: "building" as const,
  },
  {
    slug: "roads-highways",
    title: "Roads & Highways",
    body: "Road material testing and quality control support for highway and road infrastructure.",
    icon: "route" as const,
  },
  {
    slug: "railways",
    title: "Railways",
    body: "Testing support for railway-related infrastructure projects.",
    icon: "train" as const,
  },
  {
    slug: "government-infrastructure",
    title: "Government Infrastructure",
    body: "Testing as per specifications of Government and semi-Government departments.",
    icon: "landmark" as const,
  },
  {
    slug: "smart-city",
    title: "Smart City Projects",
    body: "Testing support for urban infrastructure and city development projects.",
    icon: "cityscape" as const,
  },
  {
    slug: "engineering-consultancy",
    title: "Engineering & Consultancy",
    body: "Technical testing support for engineering and consultancy organisations.",
    icon: "compass" as const,
  },
  {
    slug: "epc-infrastructure",
    title: "EPC & Infrastructure Companies",
    body: "Testing and quality assurance for infrastructure execution contractors.",
    icon: "hardhat" as const,
  },
];

export const clients = [
  "Bihar Medical Services & Infrastructure Corporation Ltd.",
  "Bihar State Educational Infrastructure Development Corp. Ltd.",
  "East Central Railway",
  "Muzaffarpur Smart City Ltd.",
  "IDA, Bihar",
  "AFCONS Infrastructure Limited",
  "PNC Infratech Ltd.",
  "Ram Kripal Singh Construction Pvt. Ltd.",
  "R & R Associates, Patna",
  "Green Design & Engineering Services",
  "JSP Projects Pvt. Ltd. in JV with Varaha Infra Ltd.",
  "BSC C & C JV",
  "Kona Enterprises, Patna",
  "Shiva Consultancy Service (P) Ltd., New Delhi",
  "SA Infrastructure Consultants Pvt. Ltd. (NHAI Work)",
  "Marc Technocrats Pvt. Ltd.",
  "URS Scott Wilson India Pvt. Ltd. (BSRDC Work)",
  "Global Infra Solution JV Artefact Projects Ltd. in association with MS Consultant",
  "LN Malviya Infrastructure Pvt. Ltd. (BSRDC Work)",
  "SPS Construction India Pvt. Ltd.",
  "Fortune Group",
  "Vriddhi Infrastructure Pvt. Ltd.",
  "Hari Construction",
];

export const projects = [
  {
    client: "Muzaffarpur Smart City Ltd.",
    sector: "Smart City",
    scope: "Testing & technical support",
  },
  {
    client: "East Central Railway",
    sector: "Railways",
    scope: "Testing & technical support",
  },
  {
    client: "Bihar Medical Services & Infrastructure Corporation Ltd.",
    sector: "Government Infrastructure",
    scope: "Testing & technical support",
  },
  {
    client: "Bihar State Educational Infrastructure Development Corp. Ltd.",
    sector: "Government Infrastructure",
    scope: "Testing & technical support",
  },
  {
    client: "AFCONS Infrastructure Limited",
    sector: "EPC & Infrastructure",
    scope: "Testing & technical support",
  },
  {
    client: "PNC Infratech Ltd.",
    sector: "Roads & Highways",
    scope: "Testing & technical support",
  },
  {
    client: "R & R Associates, Patna",
    sector: "Engineering & Consultancy",
    scope: "Testing & technical support",
  },
  {
    client: "Ram Kripal Singh Construction Pvt. Ltd.",
    sector: "Construction",
    scope: "Testing & technical support",
  },
  {
    client: "SA Infrastructure Consultants Pvt. Ltd.",
    sector: "Roads & Highways (NHAI work)",
    scope: "Testing & technical support",
  },
  {
    client: "URS Scott Wilson India Pvt. Ltd.",
    sector: "Roads & Highways (BSRDC work)",
    scope: "Testing & technical support",
  },
  {
    client: "IDA, Bihar",
    sector: "Government Infrastructure",
    scope: "Testing & technical support",
  },
  {
    client: "Vriddhi Infrastructure Pvt. Ltd.",
    sector: "EPC & Infrastructure",
    scope: "Testing & technical support",
  },
];

export const caseStudy = {
  title: "Concrete Mix Design & Water Testing",
  project: "Muzaffarpur Railway Station",
  client: "East Central Railway (project documentation)",
  requirements: [
    "Concrete mix design",
    "Water testing",
  ],
  grades: ["M20", "M25", "M30", "M35", "M40"],
  note:
    "Details shown here are limited to what appears in NTRL project documentation. Project dates, values and completion status are not claimed.",
};

export const projectTypes = [
  "Building",
  "Road",
  "Railway",
  "Bridge",
  "Infrastructure",
  "Government Project",
  "Industrial",
  "Other",
];

export const testingRequirements = [
  "Soil Testing",
  "Concrete Testing",
  "Cement Testing",
  "Bitumen Testing",
  "Road Material Testing",
  "Geotechnical Investigation",
  "NDT",
  "Environmental Testing",
  "Water Testing",
  "Concrete Mix Design",
  "Digital Surveying",
  "Other",
];

export const galleryCategories = [
  "Laboratory",
  "Equipment",
  "Field Testing",
  "Construction Testing",
  "Team",
] as const;

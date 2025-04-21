import axios from "axios";
import FooterBar from "./common/footer";
import Header from "./common/header";
import NavBar from "./common/navBar";
// import MyForm from "./common/button";
import Section from "./common/section";
// import Sidebar from "./common/sidebar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import CustomSelect from "./utils/CustomSelect";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const industrialSector = [
  {
    label: " Agriculture and Allied Industries (AG&A)",
    value: "AG&A",
  },
  {
    label: "Auto Components (AUTOC)",
    value: "AUTOC",
  },
  {
    label: "Automobiles (AUTO)",
    value: "AUTO",
  },
  {
    label: "Aviation (AVT)",
    value: "AVT",
  },
  {
    label: "Banking (BNK)",
    value: "BNK",
  },
  {
    label: "Biotechnology (BIOT)",
    value: "BIOT",
  },
  {
    label: "Cement (CEM)",
    value: "CEM",
  },
  {
    label: "Chemicals (CHE) ",
    value: "CHE",
  },
  {
    label: "Consumer Durables (CONSD)",
    value: "CONSD",
  },
  {
    label: "Defence Manufacturing (DEFM)",
    value: "DEFM",
  },
  {
    label: "Education and Training (EDU&T)",
    value: "EDU&T",
  },
  {
    label: "Electronics System Design & Manufacturing (ESDM)",
    value: "ESDM",
  },
  {
    label: "Engineering and Capital Goods (EN&CG)",
    value: "EN&CG",
  },
  {
    label: "Financial Services (FINS)",
    value: "FINS",
  },
  {
    label: "Fast Moving Consumer Goods (FMCG)",
    value: "FMCG",
  },
  {
    label: "Gems and Jewellery (GEMJ)",
    value: "GEMJ",
  },
  {
    label: "Healthcare (HTC)",
    value: "HTC",
  },
  {
    label: "Infrastructure (INF)",
    value: "INF",
  },
  {
    label: "Insurance (INS)",
    value: "INS",
  },
  {
    label: "IT & Business Process Management (IT&BPM)",
    value: "IT&BPM",
  },
  {
    label: "Leather & Non-Leather (LEA)",
    value: "LEA",
  },
  {
    label: "Manufacturing (MNF)",
    value: "MNF",
  },
  {
    label: "Media and Entertainment (M&E)",
    value: "M&E",
  },
  {
    label: "Medical Devices (MEDD)",
    value: "MEDD",
  },
  {
    label: "Metals and Mining (M&M)",
    value: "M&M",
  },
  {
    label: "Micro, Small and Medium Enterprises (MSME)",
    value: "MSME",
  },
  {
    label: "Oil and Gas (O&G)",
    value: "O&G",
  },
  {
    label: "Pharmaceuticals (pharma)",
    value: "pharma",
  },
  {
    label: "Ports and Shipping (P&S)",
    value: "P&S",
  },
  {
    label: "Power (PSL)",
    value: "PSL",
  },
  {
    label: "Railways (RLT)",
    value: "RLT",
  },
  {
    label: "Real Estate (RE)",
    value: "RE",
  },
  {
    label: "Renewable Energy (R&E)",
    value: "R&E",
  },
  {
    label: "Roads and Highways (R&H)",
    value: "R&H",
  },
  {
    label: "Science and Technology (SC)",
    value: "SC",
  },
  {
    label: "Services (SRV)",
    value: "SRV",
  },
  {
    label: "Space (SP)",
    value: "SP",
  },
  {
    label: "Telecom (T&P)",
    value: "T&P",
  },
  {
    label: "Textiles and Garments (TSM)",
    value: "TSM",
  },
  {
    label: "Tourism and Hospitality (TOU)",
    value: "TOU",
  },
  {
    label: "Others (OTR)",
    value: "OTR",
  },
];

const associateInstitute = [
  {
    label:
      "CSIR-Advanced Materials and Processes Research Institute (CSIR-AMPRI), Bhopal",
    value: "CSIR-AMPRI",
  },
  {
    label: "CSIR-Central Building Research Institute (CSIR-CBRI), Roorkee",
    value: "CSIR-CBRI",
  },
  {
    label: "CSIR-Center for Cellular Molecular Biology (CSIR-CCMB), Hyderabad",
    value: "CSIR-CCMB",
  },
  {
    label: "CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow",
    value: "CSIR-CDRI",
  },
  {
    label:
      "CSIR-Central ElectroChemical Research Institute (CSIR-CECRI), Karaikudi",
    value: "CSIR-CECRI",
  },
  {
    label:
      "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani",
    value: "CSIR-CEERI",
  },
  {
    label:
      "CSIR-Central Food Technological Research Institute (CSIR-CFTRI), Mysore",
    value: "CSIR-CFTRI",
  },
  {
    label:
      "CSIR-Central Glass and Ceramic Research Institute (CSIR-CGCRI), Kolkata",
    value: "CSIR-CGCRI",
  },
  {
    label:
      "CSIR-Central Institute of Medicinal and Aromatic Plants (CSIR-CIMAP), Lucknow",
    value: "CSIR-CIMAP",
  },
  {
    label:
      "CSIR-Central Institute of Mining and Fuel Research (CSIR-CIMFR), Dhanbad",
    value: "CSIR-CIMFR",
  },
  {
    label: "CSIR-Central Leather Research Institute (CSIR-CLRI), Chennai",
    value: "CSIR-CLRI",
  },
  {
    label:
      "CSIR-Central Mechanical Engineering Research Institute (CSIR-CMERI), Durgapur",
    value: "CSIR-CMERI",
  },
  {
    label: "CSIR-Central Road Research Institute (CSIR-CRRI), New Delhi",
    value: "CSIR-CRRI",
  },
  {
    label:
      "CSIR-Central Scientific Instruments Organisation (CSIR-CSIO), Chandigarh",
    value: "CSIR-CSIO",
  },
  {
    label:
      "CSIR-Central Salt and Marine Chemicals Research Institute (CSIR-CSMCRI), Bhavnagar",
    value: "CSIR-CSMCRI",
  },
  {
    label: "CSIR-Central Fourth Paradigm Institute (CSIR-4PI), Bengaluru",
    value: "CSIR-4PI",
  },
  {
    label:
      "CSIR-Institute of Genomics and Integrative Biology (CSIR-IGIB), Delhi",
    value: "CSIR-IGIB",
  },
  {
    label:
      "CSIR-Institute of Himalayan Bioresource Technology (CSIR-IHBT), Palampur",
    value: "CSIR-IHBT",
  },
  {
    label: "CSIR-Indian Institute of Chemical Biology (CSIR-IICB), Kolkata",
    value: "CSIR-IICB",
  },
  {
    label:
      "CSIR-Indian Institute of Chemical Technology (CSIR-IICT), Hyderabad",
    value: "CSIR-IICT",
  },
  {
    label:
      "CSIR-Indian Institute of Integrative Medicine (CSIR-IIIM), UT of J&K",
    value: "CSIR-IIIM",
  },
  {
    label: "CSIR-Indian Institute of Petroleum (CSIR-IIP), Dehradun",
    value: "CSIR-IIP",
  },
  {
    label: "CSIR-Indian Institute of Toxicology Research (CSIR-IITR), Lucknow",
    value: "CSIR-IITR",
  },
  {
    label:
      "CSIR-Institute of Minerals and Materials Technology (CSIR-IIMT), Bhubaneswar",
    value: "CSIR-IIMT",
  },
  {
    label: "CSIR-Institute of Microbial Technology (CSIR-IMT)",
    value: "CSIR-IMT",
  },
  {
    label:
      "CSIR-Institute of Minerals and Materials Technology (CSIR-IMTECH), Chandigarh",
    value: "CSIR-IMTECH",
  },
  {
    label: "CSIR-National Aerospace Laboratories (CSIR-NAL), Bengaluru",
    value: "NCSIR-NAL",
  },
  {
    label: "CSIR-National Botanical Research Institute (CSIR-NBRI), Lucknow",
    value: "CSIR-NBRI",
  },
  {
    label: "CSIR-National Chemical Laboratory (CSIR-NCL), Pune",
    value: "CSIR-NCL",
  },
  {
    label:
      "CSIR-National Environmental Engineering Research Institute (CSIR-NEERI), Nagpur",
    value: "NEE&NEERI",
  },
  {
    label:
      "CSIR-North-East Institute of Science and Technology (CSIR-NEIST), Jorhat",
    value: "CSIR-NEIST",
  },
  {
    label:
      "CSIR-National Geophysical Research Institute (CSIR-NGRI), Hyderabad",
    value: "CSIR-NGRI",
  },
  {
    label:
      "CSIR-National Institute for Interdisciplinary Science and Technology (CSIR-NIIST), Thiruvananthapuram",
    value: "CSIR-NIIST",
  },
  {
    label: "CSIR-National Institute of Oceanography (CSIR-NIO), Goa",
    value: "CSIR-NIO",
  },
  {
    label: "CSIR-National Metallurgical Laboratory (CSIR-NML), Jamshedpur",
    value: "CSIR-NML",
  },
  {
    label: "CSIR-National Physical Laboratory (CSIR-NPL), New Delhi",
    value: "CSIR-NPL",
  },
  {
    label:
      "CSIR-National Institute of Science Communication & Policy Research (CSIR-NISCPR), Delhi",
    value: "CSIR-NISCPR",
  },
  {
    label: "CSIR-Madras Complex (CSIR-CMC), Chennai",
    value: "SERC",
  },
  {
    label: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai",
    value: "CSIR-CMC",
  },
  {
    label: "Other than CSIR",
    value: "CSIR",
  },
];

const theme = [
  {
    label:
      "Aerospace, Electronics and Instrumentation & Strategic Sector (AEISS)",
    value: "(AEISS)",
  },
  {
    label: "Chemical (including leather) and   Postchemicals (CLP)",
    value: "(CLP)",
  },
  {
    label: "Ecology, Environment, Earth & Ocean & Science and Water (ESS)",
    value: "(ESS)",
  },
  {
    label: "Ecology, Environment, Earth & Ocean & Science and Water (EOW)",
    value: "(EOW)",
  },
  {
    label: "Civil, Infrastructure & Engineering (CIE)",
    value: "(CIE)",
  },
  {
    label: "Agri, Nutrition & Biotechnology & Strategic Sector (ANB)",
    value: "(ANB)",
  },
  {
    label: " Mining, Minirals, Metal and Materials (4M)",
    value: "(4M)",
  },
  {
    label:
      "Healthcare-Chemical Drugs,Phytopharmaceuticals,Biopharmaceutical,and Regulatory (HTC)",
    value: "(HTC)",
  },
];

const leadLaboratory = [
  {
    label:
      "CSIR-Advanced Materials and Processes Research Institute (CSIR-AMPRI), Bhopal",
    value: "CSIR-AMPRI",
  },
  {
    label: "CSIR-Central Building Research Institute (CSIR-CBRI), Roorkee",
    value: "CSIR-CBRI",
  },
  {
    label: "CSIR-Center for Cellular Molecular Biology (CSIR-CCMB), Hyderabad",
    value: "CSIR-CCMB",
  },
  {
    label: "CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow",
    value: "CSIR-CDRI",
  },
  {
    label:
      "CSIR-Central ElectroChemical Research Institute (CSIR-CECRI), Karaikudi",
    value: "CSIR-CECRI",
  },
  {
    label:
      "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani",
    value: "CSIR-CEERI",
  },
  {
    label:
      "CSIR-Central Food Technological Research Institute (CSIR-CFTRI), Mysore",
    value: "CSIR-CFTRI",
  },
  {
    label:
      "CSIR-Central Glass and Ceramic Research Institute (CSIR-CGCRI), Kolkata",
    value: "CSIR-CGCRI",
  },
  {
    label:
      "CSIR-Central Institute of Medicinal and Aromatic Plants (CSIR-CIMAP), Lucknow",
    value: "CSIR-CIMAP",
  },
  {
    label:
      "CSIR-Central Institute of Mining and Fuel Research (CSIR-CIMFR), Dhanbad",
    value: "CSIR-CIMFR",
  },
  {
    label: "CSIR-Central Leather Research Institute (CSIR-CLRI), Chennai",
    value: "CSIR-CLRI",
  },
  {
    label:
      "CSIR-Central Mechanical Engineering Research Institute (CSIR-CMERI), Durgapur",
    value: "CSIR-CMERI",
  },
  {
    label: "CSIR-Central Road Research Institute (CSIR-CRRI), New Delhi",
    value: "CSIR-CRRI",
  },
  {
    label:
      "CSIR-Central Scientific Instruments Organisation (CSIR-CSIO), Chandigarh",
    value: "CSIR-CSIO",
  },
  {
    label:
      "CSIR-Central Salt and Marine Chemicals Research Institute (CSIR-CSMCRI), Bhavnagar",
    value: "CSIR-CSMCRI",
  },
  {
    label: "CSIR-Central Fourth Paradigm Institute (CSIR-4PI), Bengaluru",
    value: "CSIR-4PI",
  },
  {
    label:
      "CSIR-Institute of Genomics and Integrative Biology (CSIR-IGIB), Delhi",
    value: "CSIR-IGIB",
  },
  {
    label:
      "CSIR-Institute of Himalayan Bioresource Technology (CSIR-IHBT), Palampur",
    value: "CSIR-IHBT",
  },
  {
    label: "CSIR-Indian Institute of Chemical Biology (CSIR-IICB), Kolkata",
    value: "CSIR-IICB",
  },
  {
    label:
      "CSIR-Indian Institute of Chemical Technology (CSIR-IICT), Hyderabad",
    value: "CSIR-IICT",
  },
  {
    label:
      "CSIR-Indian Institute of Integrative Medicine (CSIR-IIIM), UT of J&K",
    value: "CSIR-IIIM",
  },
  {
    label: "CSIR-Indian Institute of Petroleum (CSIR-IIP), Dehradun",
    value: "CSIR-IIP",
  },
  {
    label: "CSIR-Indian Institute of Toxicology Research (CSIR-IITR), Lucknow",
    value: "CSIR-IITR",
  },
  {
    label:
      "CSIR-Institute of Minerals and Materials Technology (CSIR-IIMT), Bhubaneswar",
    value: "CSIR-IIMT",
  },
  {
    label: "CSIR-Institute of Microbial Technology (CSIR-IMT)",
    value: "CSIR-IMT",
  },
  {
    label:
      "CSIR-Institute of Minerals and Materials Technology (CSIR-IMTECH), Chandigarh",
    value: "CSIR-IMTECH",
  },
  {
    label: "CSIR-National Aerospace Laboratories (CSIR-NAL), Bengaluru",
    value: "NCSIR-NAL",
  },
  {
    label: "CSIR-National Botanical Research Institute (CSIR-NBRI), Lucknow",
    value: "CSIR-NBRI",
  },
  {
    label: "CSIR-National Chemical Laboratory (CSIR-NCL), Pune",
    value: "CSIR-NCL",
  },
  {
    label:
      "CSIR-National Environmental Engineering Research Institute (CSIR-NEERI), Nagpur",
    value: "NEE&NEERI",
  },
  {
    label:
      "CSIR-North-East Institute of Science and Technology (CSIR-NEIST), Jorhat",
    value: "CSIR-NEIST",
  },
  {
    label:
      "CSIR-National Geophysical Research Institute (CSIR-NGRI), Hyderabad",
    value: "CSIR-NGRI",
  },
  {
    label:
      "CSIR-National Institute for Interdisciplinary Science and Technology (CSIR-NIIST), Thiruvananthapuram",
    value: "CSIR-NIIST",
  },
  {
    label: "CSIR-National Institute of Oceanography (CSIR-NIO), Goa",
    value: "CSIR-NIO",
  },
  {
    label: "CSIR-National Metallurgical Laboratory (CSIR-NML), Jamshedpur",
    value: "CSIR-NML",
  },
  {
    label: "CSIR-National Physical Laboratory (CSIR-NPL), New Delhi",
    value: "CSIR-NPL",
  },
  {
    label:
      "CSIR-National Institute of Science Communication & Policy Research (CSIR-NISCPR), Delhi",
    value: "CSIR-NISCPR",
  },
  {
    label: "CSIR-Madras Complex (CSIR-CMC), Chennai",
    value: "SERC",
  },
  {
    label: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai",
    value: "CSIR-CMC",
  },
  {
    label: "Other than CSIR",
    value: "CSIR",
  },
];

const stakeHolders = [
  {
    label: "Ministry of Information and Broadcasting (MoIB)",
    value: "MoIB",
  },
  {
    label: "Ministry of Agriculture & Farmers Welfare (MoA&FW)",
    value: "MoA&FW",
  },
  {
    label: "Ministry of Textiles (MoTex)",
    value: "MoTex",
  },
  {
    label: "Ministry of Commerce & Industry (MOCI)",
    value: "MOCI",
  },
  {
    label: "Ministry of Defence (MoD)",
    value: "MoD",
  },
  {
    label: "Ministry of Finance (MoF)",
    value: "MoF",
  },
  {
    label: "Ministry of Health and Family Welfare (MoHFW)",
    value: "MoHFW",
  },
  {
    label: "Ministry of Home Affairs (MoHA)",
    value: "MoHA",
  },
  {
    label: "Ministry of Housing and Urban Affairs (MoHUA)",
    value: "MoHUA",
  },
  {
    label: "Ministry of Education (MoE)",
    value: "MoE",
  },
  {
    label: "Ministry of Panchayati Raj (MoPR)",
    value: "MoPR",
  },
  {
    label: "Ministry of Petroleum & Natural Gas (MoPNG)",
    value: "MoPNG",
  },
  {
    label: "Ministry of Power (MoP)",
    value: "MoP",
  },
  {
    label: "Ministry of Railways (MoR)",
    value: "MoR",
  },
  {
    label: "Ministry of Road Transport & Highways (MoRTH)",
    value: "MoRTH",
  },
  {
    label: "Ministry of Rural Development (MoRD)",
    value: "MoRD",
  },
  {
    label: "Ministry of Urban Development (MoUD)",
    value: "MoUD",
  },
  {
    label: "Ministry of Water Resources (MoWR)",
    value: "MoWR",
  },
  {
    label: "Ministry of Women & Child Development (MoWCD)",
    value: "MoWCD",
  },
  {
    label: "Ministry of Youth Affairs and Sports (MoYAS)",
    value: "MoYAS",
  },
  {
    label: "Ministry of Coal (MoC)",
    value: "MoC",
  },
  {
    label: "Ministry of Personnel, Public Grievances & Pensions (MoPP&P)",
    value: "MPP&P",
  },
  {
    label: "Ministry of Law & Justice (MoL&J)",
    value: "MoL&J",
  },
  {
    label: "Ministry of Parliamentary Affairs (MoPA)",
    value: "MoPA",
  },
  {
    label: "Ministry of Science & Technology (MoST)",
    value: "MoST",
  },
  {
    label: "Ministry of Culture (MoCL)",
    value: "MoCL",
  },
  {
    label: "Ministry of Steel (MoS)",
    value: "MoS",
  },
  {
    label: "Ministry of Labour & Employment (MoL&E)",
    value: "MoL&E",
  },
  {
    label: "Ministry of Communications (MoCIT)",
    value: "MoCIT",
  },
  {
    label: "Ministry of Civil Aviation (MoCA)",
    value: "MoCA",
  },
  {
    label: "Ministry of New and Renewable Energy (MNRE)",
    value: "MNRE",
  },
  {
    label: "Ministry of Tourism (MoT)",
    value: "MoT",
  },
  {
    label:
      "Ministry of Consumer Affairs, Food & Public Distribution (MoCAF&PD)",
    value: "MoCAF&PD",
  },
  {
    label: "Ministry of Food Processing Industries (MoFPI)",
    value: "MoFPI",
  },
  {
    label: "Ministry of Tourism (MoCF)",
    value: "MoCF",
  },
  {
    label: "Ministry of Mines (MoM)",
    value: "MoM",
  },
  {
    label: "Ministry of Disivestment (MoDIS)",
    value: "MoDIS",
  },
  {
    label: "Ministry of Tribal Affairs (MoTA)",
    value: "MoTA",
  },
  {
    label: "Ministry of Social Justice & Empowerment (MoSJE)",
    value: "MoSJE",
  },
  {
    label: "Ministry of Micro, Small & Medium Enterprises (MSME)",
    value: "MSME",
  },
  {
    label: "Ministry of Heavy Industries & Public Enterprises (MoHI)",
    value: "MoHI",
  },
  {
    label: "Ministry of Statistics & Programme Implementation (MoSPI)",
    value: "MoSPI",
  },
  {
    label: "Ministry of Development of North-East Region (MoDoNER)",
    value: "MoDoNER",
  },
  {
    label: "Ministry of Minority Affairs (MoMA)",
    value: "MoMA",
  },
  {
    label: "Ministry of Corporate Affairs (MoCAF)",
    value: "MoCAF",
  },
  {
    label: "Ministry of Earth Science (MoES)",
    value: "MoES",
  },
  {
    label: "Ministry of Skill Development and Entrepreurship (MoSDE)",
    value: "MoSDE",
  },
  {
    label: "Department of Space (DoS)",
    value: "DoS",
  },
  {
    label: "Election Commission of India (ECI)",
    value: "ECI",
  },
  {
    label: "Department of Atomic Energgy (DAE)",
    value: "DAE",
  },
  {
    label: "AYUSH",
    value: "AYUSH",
  },
  {
    label: "Ministry of External Affairs (MEA)",
    value: "MEA",
  },
  {
    label: "Ministry of Fosheries,Animal Husbandry and Dairying (DADF)",
    value: "DADF",
  },
  {
    label: "Ministry of Jal Shakti (MoJS)",
    value: "MoJS",
  },
  {
    label: "Ministry of Planning (NITI Aayog)",
    value: "NITI Aayog",
  },
  {
    label: "Ministry of Ports, Shipping and Waterways (MoPSW)",
    value: "MoPSW",
  },
];

const SectionOne = () => {
  const initialValues = {
    technologyRefNo: "",
    keywordTechnology: "",
    nameTechnology: "",
    industrialSector: [],
    theme: [],
    multiLabInstitute: "",
    associateInstitute: [],
    leadLaboratory: "",
    technologyLevel: "",
    scaleDevelopment: "",
    yearDevelopment: "",
    briefTech: "",
    competitivePosition: "",
    technoEconomics: "",
    stakeHolders: [],
    environmentalStatutory: "",
    marketPotential: "",
    picture: null, // Assuming this is a file input
    laboratoryDetail: "",
  };

  const validationSchema = Yup.object({
    // technologyRefNo: Yup.string().required("Required"),
    // keywordTechnology: Yup.string().required("Required"),
    // nameTechnology: Yup.string().required("Required"),
    // industrialSector: Yup.array().required("Required"), // Ensure this is an array
    // leadLaboratory: Yup.string().required("Required"),
    // technologyLevel: Yup.string().required("Required"),
    // scaleDevelopment: Yup.string().required("Required"),
    // yearDevelopment: Yup.string().required("Required"),
    // briefTech: Yup.string().required("Required"),
    // competitivePosition: Yup.string().required("Required"),
    // technoEconomics: Yup.string().required("Required"),
    // marketPotential: Yup.string().required("Required"),
    // environmentalStatutory: Yup.string().required("Required"),
    // laboratoryDetail: Yup.string().required("Required"),
  });

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: (values) => {
  //     handleSubmit(values);
  //   },
  // });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("handle submit is calling******************", values);
    const url = "http://172.16.2.102:8080/apf/tdmp/saveSectionOne";
    const config = {
      headers: { "Content-Type": "application/json" }, // Set to multipart/form-data for FormData if needed
    };

    // Create the payload based on the values received
    const payload = {
      technologyRefNo: values.technologyRefNo,
      keywordTechnology: values.keywordTechnology,
      nameTechnology: values.nameTechnology,
      industrialSector: Array.isArray(values.industrialSector)
        ? values.industrialSector
        : [values.industrialSector],
      theme: Array.isArray(values.theme) ? values.theme : [values.theme],
      multiLabInstitute: values.multiLabInstitute,
      associateInstitute: Array.isArray(values.associateInstitute)
        ? values.associateInstitute
        : [values.associateInstitute],
      leadLaboratory: values.leadLaboratory,
      technologyLevel: values.technologyLevel,
      scaleDevelopment: values.scaleDevelopment,
      yearDevelopment: values.yearDevelopment,
      briefTech: values.briefTech,
      competitivePosition: values.competitivePosition,
      technoEconomics: values.technoEconomics,
      stakeHolders: Array.isArray(values.stakeHolders)
        ? values.stakeHolders
        : [values.stakeHolders],
      environmentalStatutory: values.environmentalStatutory,
      marketPotential: values.marketPotential,
      picture: values.picture, // Assuming this is a file input
      laboratoryDetail: values.laboratoryDetail,
    };

    axios
      .post(url, payload, config)
      .then((response) => {
        console.log("Response data:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Form submission failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <>
      <Header />
      <NavBar />
      <div className="flex">
        <div className="bg-gray-800  "></div>
        {/* Form */}
        <div className="flex-1 p-8 bg-blue-200 border">
          <Section sectionLine="Section 1 : Key Details - Add New Technology / Knowhow Information" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="form-group mb-4">
                  <label
                    className="font-bold flex justify-between"
                    htmlFor="technologyRefNo"
                  >
                    Technology /Knowhow Ref No:
                    <span className="Hint block text-xs text-red-500 inline text-end">
                      *Mandatory Field*
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="technologyRefNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                    placeholder="Enter New Information"
                  />
                  <ErrorMessage
                    name="technologyRefNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group">
                  <label className="font-bold" htmlFor="keywordTechnology">
                    Keywords for Technology / Knowhow
                  </label>
                  <Field
                    type="text"
                    name="keywordTechnology"
                    defaultValue="CSIR/ANB/BIOT/01" // Default value here
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="keywordTechnology"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="nameTechnology">
                    Name of Technology / Knowhow: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="nameTechnology"
                    as="textarea"
                    rows="3"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="nameTechnology"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="industrialSector">
                    Industrial Sector
                  </label>
                  <Field
                    name="industrialSector"
                    options={industrialSector}
                    component={CustomSelect}
                    placeholder="Select Industrial Sector..."
                    isMulti={true}
                  />
                  <ErrorMessage
                    name="industrialSector"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="leadLaboratory">
                    Lead Laboratory / Institute
                  </label>
                  <Field
                    name="leadLaboratory"
                    options={leadLaboratory}
                    component={CustomSelect}
                    placeholder="Select a Lab..."
                    // isMulti={true}
                    //className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></Field>
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="theme">
                    Theme
                  </label>
                  <Field
                    name="theme"
                    options={theme}
                    component={CustomSelect}
                    placeholder="Select a Theme..."
                    isMulti={true}
                    //className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <ErrorMessage
                      name="theme"
                      component="div"
                      className="text-red-500"
                    />
                  </Field>
                </div>
                <div className="form-group flex items-center mb-4">
                  <label className="font-bold" htmlFor="multiLabInstitute">
                    Multi Laboratories / Institutes
                  </label>
                  <div className="ml-4 flex space-x-4">
                    <label htmlFor="multiLabYes" className="flex items-center">
                      <input
                        type="radio"
                        id="multiLabYes"
                        name="multiLabInstitute"
                        value="Yes"
                        className="mr-2"
                        onChange={() =>
                          setFieldValue("multiLabInstitute", "Yes")
                        }
                      />
                      Yes
                    </label>
                    <label htmlFor="multiLabNo" className="flex items-center">
                      <input
                        type="radio"
                        id="multiLabNo"
                        name="multiLabInstitute"
                        value="No"
                        className="mr-2"
                        onChange={() =>
                          setFieldValue("multiLabInstitute", "No")
                        }
                      />
                      No
                    </label>
                  </div>
                  <ErrorMessage
                    name="multiLabInstitute"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="associateInstitute">
                    If Yes,Please Specify Labs/Institutes
                  </label>

                  <Field
                    name="associateInstitute"
                    options={associateInstitute}
                    component={CustomSelect}
                    placeholder="Select List Of Multilabs From here..."
                    isMulti={true}
                    //className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></Field>
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="technologyLevel">
                    Technology Readiness Level (TRL)
                  </label>
                  <Field
                    as="select"
                    name="technologyLevel"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  >
                    <option value="" label="Select TRL" />
                    {[...Array(9).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="technologyLevel"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="scaleDevelopment">
                    Scale of Development: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="scaleDevelopment"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="scaleDevelopment"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="yearDevelopment">
                    Year of Development
                  </label>
                  <Field
                    type="text"
                    name="yearDevelopment"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="yearDevelopment"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="briefTech">
                    Brief details of Technology / Knowhow: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 1000 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="briefTech"
                    as="textarea"
                    rows="3"
                    maxLength="1000"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="briefTech"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="competitivePosition">
                    Competitive Positioning in the domain (how is it better than
                    competing technology)/Technology Benchmarking &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 1500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="competitivePosition"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="competitivePosition"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="stakeHolders">
                    Potential Stakeholders
                  </label>
                  <Field
                    name="stakeHolders"
                    options={stakeHolders}
                    component={CustomSelect}
                    placeholder="Select Ministry List from here..."
                    isMulti={true}
                    //className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></Field>
                  <ErrorMessage
                    name="stakeHolders"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="technoEconomics">
                    Techno-economics (including development & deployment
                    cost,operational cost, payback period etc.) &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 1500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="technoEconomics"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="technoEconomics"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="marketPotential">
                    Market Potential &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 1000 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="marketPotential"
                    as="textarea"
                    rows="3"
                    maxLength="1000"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="marketPotential"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="environmentalStatutory">
                    Environmental considerations / Statutory regulatory
                    compliance details &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 1000 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="environmentalStatutory"
                    as="textarea"
                    rows="3"
                    maxLength="300"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="environmentalStatutory"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="picture">
                    Upload High-Resolution Picture (Optional)
                  </label>
                  <input
                    type="file"
                    name="picture"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                    onChange={(e) =>
                      setFieldValue(
                        "picture"
                        // Array.from(e.currentTarget.files)
                      )
                    }
                    // multiple //  This attribute to allow multiple files selection
                  />
                  <ErrorMessage
                    name="picture"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="laboratoryDetail">
                    Contact Details of Laboratory &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 300 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="laboratoryDetail"
                    as="textarea"
                    rows="3"
                    maxLength="300"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="laboratoryDetail"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4 flex justify-center ">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md "
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
                    onClick={() => navigate("/sectionTwo")}
                  >
                    Next
                  </button>
                </div>
                {/* <MyForm/> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default SectionOne;

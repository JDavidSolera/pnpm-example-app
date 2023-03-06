
interface Terminallist {
  id_terminal: number;
  description: string;
}

interface App {
  img: string;
  text: string;
}

interface Item {
  id: number;
  img: string;
  texts_html: string[];
  apps: App[];
  show: boolean;
}

interface PlanDetail {
  title: string;
  items: Item[];
}

interface Plan3 {
  disabled: boolean;
  selected: boolean;
  position: string;
  id_plan: number;
  name: string;
  amount: number;
  label: string;
  gb: string;
  planDetail: PlanDetail;
}

interface Plan {
  id_plan: number;
  quotes: number;
  price: number;
  store_price: number;
  store_quote_price: number;
  store_financing_price: number;
  discount: boolean;
  noStock: boolean;
  quote_amount: number;
  pricePercent?: any;
  priceFinancingPercent?: any;
  next_pay?: number;
  min_amount?: number;
}

interface Plan2 {
  financing: number;
  plans: Plan[];
}


interface CommercialTerms {
  cash: any[];
  financed: any[];
}

interface Techspec {
  label: string;
  value: string;
}

interface Benefit {
  label: string;
  value: string;
  image: string;
}

interface Manufacturer {
  name?: any;
  image?: any;
}

interface Image {
  type: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  shortName: string;
  model: string;
  code: string;
  slug: string;
  image: string;
  images: Image[];
  manufacturer: Manufacturer;
  benefits: Benefit[];
  color: Benefit[];
  functionalities: string[];
  techspecs: Techspec[];
  commercialTerms: CommercialTerms;
  general_top?: any;
  brand_top?: any;
  plans: Plan2[];
  offer_terminal: boolean;
  searched: boolean;
  id_terminal?: number;
  offer_date_time?: string;
}

interface AddressDefault {
  idDepartment?: any;
  idProvince?: any;
  idDistrict?: any;
}

export interface IPromotion {
  url: string;
  document_number: string;
  email?: any;
  campaign_type: string;
  campaign_subtype: string;
  carrusel_type: string;
  msisdn: string;
  campaign_code: string;
  name: string;
  cam: number;
  date_from: string;
  date_to: string;
  date_now: string;
  campaign_quote?: any;
  offer_terminal: number;
  id_delivery: string;
  campaign_finance: number;
  initial_financing: string;
  forced_update: number;
  old_plan_price: string;
  addressDefault: AddressDefault;
  short_id: string;
  products: Product[];
  plans: Plan3[];
  mt: boolean;
  business: boolean;
  mt_amount: number;
  mt_name: string;
  terminal_list: Terminallist[];
}

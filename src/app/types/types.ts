export interface search{
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging? : {};
  results? : product[];
  sort? : {};
  available_sorts? : [];
  filters? : [];
  available_filters? : [];
  pdp_tracking? : {};
  user_context?: string;
}

export interface product{
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mod: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backent: number;
  price: number;
  original_price?: number;
  sale_price?: {};
  payment_method_prices?: [];
  payment_method_type?: string;
  regular_amount? : number;
  type?: string;
  metadata?: {};
  available_quantity: number;
  official_store_id: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: {};
  stop_time: Date;
  seller: seller;
  attributes: attributes[];
  installments: {};
  winner_item_id? : string;
  catalog_listening: boolean;
  discounts?: string;
  promotions?: [];
  inventory_id? : string;
}

export interface seller{
  id: number;
  nickname: string;
}

export interface attributes{
  id: string;
  name: string;
  value_id: number;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct? : string;
  values? : [];
  source: number;
  value_type: string;
}

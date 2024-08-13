import {gql} from "@apollo/client";

export const PRODUCT_BASE_FIELDS = gql`
fragment productBaseFields on products {
  id
  title
  price
  product_medias(order_by: {updated_at: desc}, limit: 1) {
    id
    media_url
  }
  product_discounts(limit: 1, order_by: {discounted_value: desc}) {
    id
    discount_type
    discounted_value
  }
}
`;

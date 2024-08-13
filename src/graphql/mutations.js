import {gql} from "@apollo/client";

export const SIGN_IN = gql`
mutation userSignIn($phone: String!, $password: String!) {
  UserSignIn(phone: $phone, password: $password) {
    token
  }
}
`;

export const SIGN_UP = gql`
mutation userSignUp($name: String!, $phone: String!, $password: String!, $role: String!) {
  UserSignUp(name: $name, phone: $phone, password: $password, role: $role) {
    token
  }
}
`;

export const DEALER_SIGNUP = gql`
mutation DealerSignUp($name: String!, $phone: String!, $address: String!, $city_name: String!, $township_name: String!) {
  DealerSignUp(
    name: $name,
    phone: $phone,
    address: $address,
    city_name: $city_name,
    township_name: $township_name
  ) {
    token
    message
  }
}
`;

export const UPDATE_PASSWORD = gql`
mutation UpdatePassword($oldPassword: String!, $newPassword: String!, $confirmNewPassword: String!) {
  UpdatePassword(oldPassword: $oldPassword, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword){
    message
  }
}
`;

export const ADD_SAVED_PRODUCT = gql`
mutation addSavedProducts($user_id: uuid!, $product_id: uuid!) {
  insert_saved_products_one(object: {user_id: $user_id, product_id: $product_id}) {
    id
  }
}
`;

export const DELETE_SAVED_PRODUCT = gql`
mutation deleteSavedProducts($user_id: uuid!, $product_id: uuid!) {
  delete_saved_products(where: {user_id: {_eq: $user_id}, product_id: {_eq: $product_id}}) {
    affected_rows
  }
}
`;


export const ADD_CART_ITEM = gql`
mutation addCartItem($product_id: uuid!, $product_variant_id: uuid, $quantity: Int!) {
  AddCartItem(product_id: $product_id, product_variant_id: $product_variant_id, quantity: $quantity){
    message
  }
}
`;

export const UPDATE_CART_ITEM = gql`
mutation updateCartItem($cartItemId: uuid!, $quantity: Int!) {
  UpdateCartItem(
    cart_item_id: $cartItemId,
    quantity: $quantity
  ) {
    message
  }
}
`;


export const DELETE_CART_ITEM = gql`
mutation deleteCartItem($cartItemId: uuid!) {
  delete_cart_items_by_pk(id: $cartItemId){
    id
  }
}
`;


export const ADD_INVOICE = gql`
mutation addInvoice {
  AddInvoice {
    message
    id
  }
}
`;


export const ADD_QUOTATION = gql`
mutation addQuotation {
  AddQuotation {
    message
    id
  }
}
`;

export const ADD_SERVICE_TOKEN = gql`
mutation addServiceToken($userId: uuid!,$token_number: String!, $issue_media_type: String!, $product: String!, $description: String!, $issue_media_url: String!, $document_photo_url: String) {
  insert_service_tokens_one(object: {
    user_id: $userId,
    product: $product,
    token_number: $token_number,
    description: $description,
    issue_media_type: $issue_media_type,
    issue_media_url: $issue_media_url,
    document_photo_url: $document_photo_url,
  }) {
    id
  }
}
`;


export const UPDATE_USER = gql`
mutation updateUser($userId: uuid!, $updateData: users_set_input!) {
  update_users_by_pk(
    pk_columns: {id: $userId},
    _set: $updateData
  ) {
    id
  }
}
`;

export const UPDATE_DEALER = gql`
mutation updateDealer($dealerId: uuid!, $updateData: dealers_set_input!) {
  update_dealers_by_pk(pk_columns: {id: $dealerId}, _set: $updateData) {
    id
  }
}

`;


export const DISABLE_USER = gql`
mutation disableUser($userId: uuid!) {
  update_users_by_pk(pk_columns: {id: $userId}, _set: {disabled: true}) {
    id
  }
}
`;

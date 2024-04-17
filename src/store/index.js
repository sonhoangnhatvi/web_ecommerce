import { configureStore, createSlice } from "@reduxjs/toolkit";

// Default state
const initialShowProductDetailState = {
  isShowProductDetail: false,
  product: {},
  productList: [],
  isLogged: {},
  cart: {
    tempQuantity: 0,
    listCart: [],
    subTotal: 0,
    total: 0,
  },
  isShowLiveChat: false,
};

// Slice
const showProductDetailSlice = createSlice({
  name: "show_product_detail",
  initialState: initialShowProductDetailState,
  reducers: {
    HANDLE_VIEW_LIVECHAT(state) {
      state.isShowLiveChat = state.isShowLiveChat ? false : true;
    },
    SHOW_POPUP(state) {
      state.isShowProductDetail = true;
    },
    HIDE_POPUP(state) {
      state.isShowProductDetail = false;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProductList(state, action) {
      state.productList = action.payload;
    },
    ON_LOGIN(state) {
      state.isLogged = true;
    },
    ON_LOGOUT(state) {
      state.isLogged = false;
    },
    ADD_CART(state, action) {
      state.cart.listCart = [...state.cart.listCart, action.payload];
    },
    GETLISTCARTFROMLOCALSTOTE_TO_CART_LISTCART(state, action) {
      state.cart.listCart = action.payload;
    },
    UPDATE_CART(state, action) {},
    DELETE_CART(state, action) {
      state.cart.listCart = state.cart.listCart.filter(
        (product) => product._id !== action.payload._id
      );
    },
    ADD_QUANTITY(state) {
      state.cart.tempQuantity = state.cart.tempQuantity + 1;
    },
    SUB_QUANTITY(state) {
      state.cart.tempQuantity =
        state.cart.tempQuantity === 0 ? 0 : state.cart.tempQuantity - 1;
    },
    RESET_QUANTITY(state) {
      state.cart.tempQuantity = 0;
    },
    CAL_CART_TOTAL(state) {
      // Calculate the new cart.subTotal
      state.cart.subTotal = state.cart.listCart.reduce(
        (subTotal, product) =>
          subTotal +
          parseFloat(product.product.price.replace(/,/g, "")) *
            parseInt(product.quantity),
        0
      );

      // Calculate the new cart.total
      state.cart.total = state.cart.listCart.reduce(
        (total, product) =>
          total +
          parseFloat(product.product.price.replace(/,/g, "")) *
            parseInt(product.quantity),
        0
      );
    },
    ADD_QUANTITY_PRODUCTINCART(state, action) {
      state.cart.listCart[action.payload].quantity =
        state.cart.listCart[action.payload].quantity + 1;

      // Calculate the new cart.subTotal
      state.cart.subTotal = state.cart.listCart.reduce(
        (total, product) =>
          total +
          parseFloat(product.product.price.replace(/,/g, "")) *
            parseInt(product.quantity),
        0
      );
    },
    SUB_QUANTITY_PRODUCTINCART(state, action) {
      state.cart.listCart[action.payload].quantity =
        state.cart.listCart[action.payload].quantity === 0
          ? 0
          : state.cart.listCart[action.payload].quantity - 1;

      if (state.cart.listCart[action.payload].quantity === 0) {
        const newListCartAfterSub = state.cart.listCart.filter(
          (product) =>
            product.product._id.$oid !==
            state.cart.listCart[action.payload].product._id.$oid
        );

        state.cart.listCart =
          newListCartAfterSub.length === 0 ? [] : newListCartAfterSub;

        localStorage.setItem(
          "listCart",
          newListCartAfterSub.length === 0 ? [] : newListCartAfterSub
        );
      }
    },
    DELETE_PRODUCTINCART(state, action) {
      const newListCartAfterDelete = state.cart.listCart.filter(
        (product) => product.product._id.$oid !== action.payload
      );

      state.cart.listCart =
        newListCartAfterDelete.length === 0 ? [] : newListCartAfterDelete;

      localStorage.setItem(
        "listCart",
        newListCartAfterDelete.length === 0 ? [] : newListCartAfterDelete
      );
    },

    RESET_QUANTITY_PRODUCTINCART(state) {
      state.cart.tempQuantity = 0;
    },
  },
});

const store = configureStore({
  reducer: { showProductDetail: showProductDetailSlice.reducer },
});

export const showProductDetailActions = showProductDetailSlice.actions;

export default store;

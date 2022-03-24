import { loginFailure, loginRequest, loginSuccess } from "./userRedux";
import Cookies from "js-cookie";
import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  getProductFailure,
  getProductRequest,
  getProductSuccess,
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from "./productRedux";
import { publicRequest, userRequest } from "../requestMethodes";

export const login = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const res = await publicRequest.post("/user/login", user);
    Cookies.set("auth", res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProduct = async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure(error));
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductRequest());
  try {
    const res = await userRequest.put(`/products/${id}`);
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductRequest());
  try {
    const res = await userRequest.post(`/products`, { product });
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};

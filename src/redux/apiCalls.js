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
import {
    addUsersFailure,
    addUsersRequest,
    addUsersSuccess,
    deleteUsersFailure,
    deleteUsersRequest,
    deleteUsersSuccess,
    getUsersFailure,
    getUsersRequest,
    getUsersSuccess,
    updateUsersFailure,
    updateUsersRequest,
    updateUsersSuccess,
} from "./usersRedux";
import { publicRequest, userRequest } from "../requestMethodes";

export const login = async(dispatch, user) => {
    dispatch(loginRequest());
    try {
        const res = await publicRequest.post("/user/login", user);
        Cookies.set("auth", res.data.token);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};


//PRODUCTS
export const getProduct = async(dispatch) => {
    dispatch(getProductRequest());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure(error));
    }
};

export const deleteProduct = async(id, dispatch) => {
    dispatch(deleteProductRequest());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (error) {
        dispatch(deleteProductFailure(error));
    }
};

export const updateProduct = async(id, product, dispatch) => {
    dispatch(updateProductRequest());
    try {
        const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({ id, product }));
    } catch (error) {
        dispatch(updateProductFailure(error));
    }
};

export const addProduct = async(product, dispatch) => {
    dispatch(addProductRequest());
    try {
        const res = await userRequest.post(`/products`, { product });
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure(error));
    }
};

//USERS

export const getUser = async(dispatch) => {
    dispatch(getUsersRequest());
    try {
        const res = await userRequest.get('/user');
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailure(error));
    }
};

export const deleteUser = async(id, dispatch) => {
    dispatch(deleteUsersRequest());
    try {
        const res = await userRequest.delete(`/user/${id}`);
        dispatch(deleteUsersSuccess(id));
    } catch (error) {
        dispatch(updateUsersFailure(error));
    }
};

export const updateUser = async(id, user, dispatch) => {
    dispatch(updateUsersRequest());
    try {
        const res = await userRequest.put(`/user/${id}`, user);
        dispatch(updateUsersSuccess({ id, user }));
    } catch (error) {
        dispatch(updateUsersFailure(error));
    }
};

export const addUser = async(user, dispatch) => {
    dispatch(addUsersRequest());
    try {
        const res = await userRequest.post(`/user/register`, { user });
        dispatch(addUsersSuccess(res.data));
    } catch (error) {
        dispatch(addUsersFailure(error));
    }
};
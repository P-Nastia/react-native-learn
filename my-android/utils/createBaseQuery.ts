import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {BASE_URL} from "@/constants/urls";

export const createBaseQuery = (endpoint: string) =>
    fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/${endpoint}/`,
    });
import axios from "axios";

async function get(url, headers, params) {
  try {
    console.log("[GET Response - " + url + "]");
    console.log("[Param]");
    console.log(params);
    let response = await axios.get(url, {
      headers: headers,
      timeout: 5000,
      params: params,
    });
    console.log(response.status);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[GET Error - " + url + "]");
    console.log(e.response.data);
    throw {
      statusCode: e?.response?.data?.statusCode || 500,
      message: e?.response?.data?.message || "Please, Check your connection",
    };
  }
}

async function post(url, headers, body) {
  try {
    console.log("[POST Response - " + url + "]");
    console.log("[Body]");
    console.log(body);
    let response = await axios.post(url, body, {
      headers: headers,
      timeout: 5000,
    });
    console.log(response.status);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[POST Error - " + url + "]");
    console.log(e.response.data);
    throw {
      statusCode: e?.response?.data?.statusCode || 500,
      message: e?.response?.data?.message || "Please, Check your connection",
    };
  }
}

async function put(url, headers, body) {
  try {
    console.log("[PUT Response - " + url + "]");
    console.log("[Body]");
    console.log(body);
    let response = await axios.put(url, body, {
      headers: headers,
      timeout: 5000,
    });
    console.log(response.status);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[PUT Error - " + url + "]");
    console.log(e.response.data);
    throw {
      statusCode: e?.response?.data?.statusCode || 500,
      message: e?.response?.data?.message || "Please, Check your connection",
    };
  }
}

async function del(url, headers) {
  try {
    console.log("[DELETE Response - " + url + "]");
    let response = await axios.delete(url, {
      headers: headers,
      timeout: 5000,
    });
    console.log(response.status);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log("[DELETE Error - " + url + "]");
    console.log(e.response.data);
    throw {
      statusCode: e?.response?.data?.statusCode || 500,
      message: e?.response?.data?.message || "Please, Check your connection",
    };
  }
}

export default {
  get,
  post,
  put,
  del,
};

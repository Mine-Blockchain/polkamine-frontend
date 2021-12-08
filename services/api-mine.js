import axios from 'axios'

import { PROXY_URL } from 'config'

const apiAxios = axios.create({
  baseURL: PROXY_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

apiAxios.interceptors.response.use((response) => {
  return response.data;
});

const getPools = async () => {
  return await apiAxios.get('/api/v1/pools')
}

const getPool = async (id) => {
  return await apiAxios.get(`/api/v1/pools/${id}`)
}

const getClaimableAmount = async (address, poolId) => {
  return await apiAxios.get(`/api/v1/user/claimable?address=${address.toLowerCase()}&poolId=${poolId}`)
}

const getClaimableSignature = async (address, poolId) => {
  return await apiAxios.get(`/api/v1/user/claimreq?address=${address.toLowerCase()}&poolId=${poolId}`)
}

export {
  getPools,
  getPool,
  getClaimableAmount,
  getClaimableSignature
};

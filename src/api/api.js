/*
 * @Author: Mr.Wang
 * @Date:   2017-06-05 15:14:03
 * @Last Modified by:   Mr.Wang
 * @Last Modified time: 2017-07-05 11:45:16
 */

'use strict'
import axios from 'axios'
import Qs from 'qs'

const ERR_CODE = true

const getData = (url, type = 'get') => {
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      if (type === 'get') {
        axios.get(url, { params: params })
          .then(response => {
            if (response.data.success === ERR_CODE) {
              resolve(response.data)
            } else {
              reject(response.data)
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      if (type === 'post') {
        const data = Qs.stringify(params)
        axios.post(url, data)
          .then(response => {
            if (response.data.success === ERR_CODE) {
              resolve(response.data)
            } else {
              reject(response.data)
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    })
  }
}

export const ERR_OK = true
// 首页数据

export const getProducts = getData('/api/products')
export const getProduct = getData('/api/product')

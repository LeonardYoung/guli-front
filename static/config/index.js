/*
 * @Author: your name
 * @Date: 2020-12-25 10:04:45
 * @LastEditTime: 2021-01-02 19:01:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \renren-fast-vue\static\config\index.js
 */
/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:88/api'

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()

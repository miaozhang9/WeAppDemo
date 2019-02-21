Page({
  onShareAppMessage() {
    return {
      title: '小程序云开发展示',
      path: 'page/cloud/index'
    }
  },

  data: {
    list: [
      {
        id: 'user',
        name: '用户鉴权',
        open: false,
        pages: [
          {
            zh: '获取 OpenID',
            url: 'user-authentication/user-authentication'
          }
        ]
      }, {
        id: 'database',
        name: '数据库',
        open: false,
        pages: [
          {
            zh: '基本操作',
            url: 'crud/crud'
          }, {
            zh: '权限管理',
            url: 'db-permission/db-permission'
          }, {
            zh: '服务端时间',
            url: 'server-date/server-date'
          }
        ]
      }, {
        id: 'storage',
        name: '存储',
        open: false,
        pages: [
          {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          }, {
            zh: '下载文件',
            url: 'download-file/download-file'
          }, {
            zh: '删除文件',
            url: 'delete-file/delete-file'
          }, {
            zh: '换取临时链接',
            url: 'get-temp-file-url/get-temp-file-url'
          }, {
            zh: '组件支持',
            url: 'cloud-file-component/cloud-file-component'
          }
        ]
      }, {
        id: 'scf',
        name: '云函数',
        open: false,
        pages: [
          {
            zh: 'WXContext',
            url: 'get-wx-context/get-wx-context'
          }, {
            zh: '数据库',
            url: 'scf-database/scf-database'
          }, {
            zh: '存储',
            url: 'scf-storage/scf-storage'
          }
        ]
      }
    ],
  },
  kindToggle(e) {
    const id = e.currentTarget.id; const
      list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
})

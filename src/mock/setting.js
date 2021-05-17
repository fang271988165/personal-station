import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img1.baidu.com/it/u=1884574694,1511898506&fm=26&fmt=auto&gp=0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "271988165",
    qqQrCode:
      "https://apps.eol.cn/app/upload/image/20200404/20200404013529_93805.png",
    weixin: "15500000000",
    weixinQrCode:
      "https://apps.eol.cn/app/upload/image/20200404/20200404013232_50879.png",
    mail: "fjtao997@gmail.com",
    icp: "小涛",
    githubName: "小涛",
    favicon: "https://github.com/fang271988165",
  },
});

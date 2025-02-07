# zaca_club_about
一个神秘小站（笑）

## 页面构成
- **关于ZACA**: aboutZACA.vue ——关于这个神秘小站介绍页面
- **名人堂**: HallOfFame.vue ——里面净是些神人（）
- **神人信息**: Fameprofile.vue ——进去品鉴神人事迹（）

## 工程结构

### 开发环境
- **node版本**：v20.17.0 LTS
- **vue3**
- **vue-router4**
- **Element-plus**

### 工程目录
* public
    1.1 icon.jpg 网站的图标
* src
    * assets
    存放图片资源  

    * components
        * aboutPage
        MainContents.vue : 包括介绍文案和名人堂的跳转入口

        * HallOfFame
        FameCard.vue : 卡片组件，（列祖列宗）笑
        FameList.vue : 卡片的容器，放在神人列表页面

    * MainFooters.vue : 网站底部，备案信息之类的
    * MainHeader.vue : 网站顶部，包括标题和返回按钮

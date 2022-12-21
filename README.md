# cm-server
```
cm-server
├─ chungpa-market
│  ├─ app.js
│  ├─ controller
│  │  └─ login-controller.js
│  ├─ css
│  │  ├─ index.css
│  │  ├─ login.css
│  │  ├─ my-page.css
│  │  ├─ product-detail.css
│  │  ├─ registration.css
│  │  ├─ transaction-history.css
│  │  ├─ wish-list.css
│  │  └─ write.css
│  ├─ db-connect.js
│  ├─ html
│  │  ├─ index.html
│  │  ├─ login.html
│  │  ├─ my-page.html
│  │  ├─ product-detail.html
│  │  ├─ registration.html
│  │  ├─ transaction-history.html
│  │  ├─ wish-list.html
│  │  └─ write.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ products
│  │  ├─ client
│  │  │  ├─ babel.config.js
│  │  │  ├─ jsconfig.json
│  │  │  ├─ package-lock.json
│  │  │  ├─ package.json
│  │  │  ├─ public
│  │  │  │  ├─ favicon.ico
│  │  │  │  └─ index.html
│  │  │  ├─ README.md
│  │  │  ├─ src
│  │  │  │  ├─ App.vue
│  │  │  │  ├─ assets
│  │  │  │  │  └─ logo.png
│  │  │  │  ├─ components
│  │  │  │  │  └─ HelloWorld.vue
│  │  │  │  ├─ main.js
│  │  │  │  ├─ router
│  │  │  │  │  └─ index.js
│  │  │  │  └─ views
│  │  │  │     ├─ AboutView.vue
│  │  │  │     └─ HomeView.vue
│  │  │  └─ vue.config.js
│  │  ├─ html
│  │  │  ├─ js
│  │  │  │  ├─ basic.min.css
│  │  │  │  ├─ dropzone-amd-module.min.js
│  │  │  │  ├─ dropzone.min.css
│  │  │  │  └─ dropzone.min.js
│  │  │  ├─ product_create.html
│  │  │  ├─ product_detail.html
│  │  │  ├─ product_list.html
│  │  │  └─ sales_list.html
│  │  └─ server
│  │     ├─ app.js
│  │     ├─ package-lock.json
│  │     ├─ package.json
│  │     └─ sql.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  ├─ res
│  │  ├─ Camera.png
│  │  ├─ Chat_Circle.png
│  │  ├─ Check-off.png
│  │  ├─ Check-on.png
│  │  ├─ checkbox.png
│  │  ├─ check_off.png
│  │  ├─ check_on.png
│  │  ├─ down-arrow.png
│  │  ├─ go.png
│  │  ├─ Group 24.png
│  │  ├─ no-item-image.png
│  │  ├─ no-picture.png
│  │  ├─ radio_off.png
│  │  ├─ radio_on.png
│  │  ├─ right-arrow.png
│  │  ├─ Search_Magnifying_Glass.png
│  │  ├─ UserCircle.png
│  │  ├─ User_03.png
│  │  ├─ 가격제안check.png
│  │  ├─ 거래btn.png
│  │  ├─ 검색 아이콘.png
│  │  ├─ 굵은 세로 구분줄.png
│  │  ├─ 굵은 세로줄.png
│  │  ├─ 내정보.png
│  │  ├─ 로고3 2.png
│  │  ├─ 로고3.jpg
│  │  ├─ 문의하기.png
│  │  ├─ 세로 구분줄.png
│  │  ├─ 업로드 시간.png
│  │  ├─ 엑스표시.png
│  │  ├─ 조회수.png
│  │  ├─ 찜하기.png
│  │  ├─ 찜한수.png
│  │  └─ 청파톡.png
│  ├─ routes
│  │  ├─ index.js
│  │  ├─ show-all-data.js
│  │  └─ user.js
│  └─ src
│     ├─ App.vue
│     ├─ assets
│     │  ├─ logo.png
│     │  └─ res
│     │     ├─ Camera.png
│     │     ├─ Chat_Circle.png
│     │     ├─ Check-off.png
│     │     ├─ Check-on.png
│     │     ├─ checkbox.png
│     │     ├─ check_off.png
│     │     ├─ check_on.png
│     │     ├─ down-arrow.png
│     │     ├─ go.png
│     │     ├─ Group 24.png
│     │     ├─ no-item-image.png
│     │     ├─ no-picture.png
│     │     ├─ radio_off.png
│     │     ├─ radio_on.png
│     │     ├─ right-arrow.png
│     │     ├─ Search_Magnifying_Glass.png
│     │     ├─ UserCircle.png
│     │     ├─ User_03.png
│     │     ├─ 가격제안check.png
│     │     ├─ 거래btn.png
│     │     ├─ 검색 아이콘.png
│     │     ├─ 굵은 세로 구분줄.png
│     │     ├─ 굵은 세로줄.png
│     │     ├─ 내정보.png
│     │     ├─ 로고3 2.png
│     │     ├─ 로고3.jpg
│     │     ├─ 문의하기.png
│     │     ├─ 세로 구분줄.png
│     │     ├─ 업로드 시간.png
│     │     ├─ 엑스표시.png
│     │     ├─ 조회수.png
│     │     ├─ 찜하기.png
│     │     ├─ 찜한수.png
│     │     └─ 청파톡.png
│     ├─ components
│     │  ├─ HelloWorld.vue
│     │  └─ ItemComp.vue
│     ├─ main.js
│     ├─ router
│     │  └─ index.js
│     └─ views
│        ├─ AboutView.vue
│        ├─ HomeView.vue
│        ├─ LoginView.vue
│        ├─ ProductDetail.vue
│        ├─ SellView.vue
│        └─ WishList.vue
├─ ChungpaFront-main
│  ├─ babel.config.js
│  ├─ jsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  ├─ README.md
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ assets
│  │  │  ├─ fonts
│  │  │  │  ├─ NanumGothic.ttf
│  │  │  │  ├─ NanumGothicBold.ttf
│  │  │  │  ├─ NanumGothicExtraBold.ttf
│  │  │  │  ├─ NanumGothicLight.ttf
│  │  │  │  ├─ PyeongChangPeace-Bold.ttf
│  │  │  │  └─ PyeongChangPeace-Light.ttf
│  │  │  ├─ logo.png
│  │  │  └─ res
│  │  │     ├─ buy 1.png
│  │  │     ├─ Camera.png
│  │  │     ├─ Chat_Circle.png
│  │  │     ├─ Check-off.png
│  │  │     ├─ Check-on.png
│  │  │     ├─ checkbox.png
│  │  │     ├─ check_off.png
│  │  │     ├─ check_on.png
│  │  │     ├─ down-arrow.png
│  │  │     ├─ go.png
│  │  │     ├─ Group 24.png
│  │  │     ├─ no-item-image.png
│  │  │     ├─ no-picture.png
│  │  │     ├─ radio_off.png
│  │  │     ├─ radio_on.png
│  │  │     ├─ right-arrow.png
│  │  │     ├─ Search_Magnifying_Glass.png
│  │  │     ├─ sell 1.png
│  │  │     ├─ UserCircle.png
│  │  │     ├─ User_03.png
│  │  │     ├─ 가격제안check.png
│  │  │     ├─ 거래btn.png
│  │  │     ├─ 검색 아이콘.png
│  │  │     ├─ 굵은 세로 구분줄.png
│  │  │     ├─ 굵은 세로줄.png
│  │  │     ├─ 내정보.png
│  │  │     ├─ 로고3 2.png
│  │  │     ├─ 로고3.jpg
│  │  │     ├─ 문의하기.png
│  │  │     ├─ 세로 구분줄.png
│  │  │     ├─ 업로드 시간.png
│  │  │     ├─ 엑스표시.png
│  │  │     ├─ 조회수.png
│  │  │     ├─ 찜하기.png
│  │  │     ├─ 찜한수.png
│  │  │     └─ 청파톡.png
│  │  ├─ components
│  │  │  ├─ AnotherItem.vue
│  │  │  ├─ ItemComp.vue
│  │  │  ├─ ItemInfo.vue
│  │  │  ├─ NaviComp.vue
│  │  │  └─ ReviewComment.vue
│  │  ├─ main.js
│  │  ├─ router
│  │  │  ├─ index.js
│  │  │  └─ user.js
│  │  ├─ titleMixin.js
│  │  └─ views
│  │     ├─ BuyView.vue
│  │     ├─ LoginView.vue
│  │     ├─ MainView.vue
│  │     ├─ MyPage.vue
│  │     ├─ ProductDetail.vue
│  │     ├─ RegistrationView.vue
│  │     ├─ SellView.vue
│  │     ├─ ShareView.vue
│  │     ├─ TransactionHistory.vue
│  │     ├─ WishList.vue
│  │     └─ WriteView.vue
│  └─ vue.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ app.js
   ├─ db-connect.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ join.js
   │  └─ show-all-data.js
   ├─ sql.js
   └─ views

```
```
cm-server
├─ chungpa-market
│  ├─ app.js
│  ├─ controller
│  │  └─ login-controller.js
│  ├─ css
│  │  ├─ index.css
│  │  ├─ login.css
│  │  ├─ my-page.css
│  │  ├─ product-detail.css
│  │  ├─ registration.css
│  │  ├─ transaction-history.css
│  │  ├─ wish-list.css
│  │  └─ write.css
│  ├─ db-connect.js
│  ├─ html
│  │  ├─ index.html
│  │  ├─ login.html
│  │  ├─ my-page.html
│  │  ├─ product-detail.html
│  │  ├─ registration.html
│  │  ├─ transaction-history.html
│  │  ├─ wish-list.html
│  │  └─ write.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ products
│  │  ├─ client
│  │  │  ├─ babel.config.js
│  │  │  ├─ jsconfig.json
│  │  │  ├─ package-lock.json
│  │  │  ├─ package.json
│  │  │  ├─ public
│  │  │  │  ├─ favicon.ico
│  │  │  │  └─ index.html
│  │  │  ├─ README.md
│  │  │  ├─ src
│  │  │  │  ├─ App.vue
│  │  │  │  ├─ assets
│  │  │  │  │  └─ logo.png
│  │  │  │  ├─ components
│  │  │  │  │  └─ HelloWorld.vue
│  │  │  │  ├─ main.js
│  │  │  │  ├─ router
│  │  │  │  │  └─ index.js
│  │  │  │  └─ views
│  │  │  │     ├─ AboutView.vue
│  │  │  │     └─ HomeView.vue
│  │  │  └─ vue.config.js
│  │  ├─ html
│  │  │  ├─ js
│  │  │  │  ├─ basic.min.css
│  │  │  │  ├─ dropzone-amd-module.min.js
│  │  │  │  ├─ dropzone.min.css
│  │  │  │  └─ dropzone.min.js
│  │  │  ├─ product_create.html
│  │  │  ├─ product_detail.html
│  │  │  ├─ product_list.html
│  │  │  └─ sales_list.html
│  │  └─ server
│  │     ├─ app.js
│  │     ├─ package-lock.json
│  │     ├─ package.json
│  │     └─ sql.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  ├─ res
│  │  ├─ Camera.png
│  │  ├─ Chat_Circle.png
│  │  ├─ Check-off.png
│  │  ├─ Check-on.png
│  │  ├─ checkbox.png
│  │  ├─ check_off.png
│  │  ├─ check_on.png
│  │  ├─ down-arrow.png
│  │  ├─ go.png
│  │  ├─ Group 24.png
│  │  ├─ no-item-image.png
│  │  ├─ no-picture.png
│  │  ├─ radio_off.png
│  │  ├─ radio_on.png
│  │  ├─ right-arrow.png
│  │  ├─ Search_Magnifying_Glass.png
│  │  ├─ UserCircle.png
│  │  ├─ User_03.png
│  │  ├─ 가격제안check.png
│  │  ├─ 거래btn.png
│  │  ├─ 검색 아이콘.png
│  │  ├─ 굵은 세로 구분줄.png
│  │  ├─ 굵은 세로줄.png
│  │  ├─ 내정보.png
│  │  ├─ 로고3 2.png
│  │  ├─ 로고3.jpg
│  │  ├─ 문의하기.png
│  │  ├─ 세로 구분줄.png
│  │  ├─ 업로드 시간.png
│  │  ├─ 엑스표시.png
│  │  ├─ 조회수.png
│  │  ├─ 찜하기.png
│  │  ├─ 찜한수.png
│  │  └─ 청파톡.png
│  ├─ routes
│  │  ├─ index.js
│  │  ├─ show-all-data.js
│  │  └─ user.js
│  └─ src
│     ├─ App.vue
│     ├─ assets
│     │  ├─ logo.png
│     │  └─ res
│     │     ├─ Camera.png
│     │     ├─ Chat_Circle.png
│     │     ├─ Check-off.png
│     │     ├─ Check-on.png
│     │     ├─ checkbox.png
│     │     ├─ check_off.png
│     │     ├─ check_on.png
│     │     ├─ down-arrow.png
│     │     ├─ go.png
│     │     ├─ Group 24.png
│     │     ├─ no-item-image.png
│     │     ├─ no-picture.png
│     │     ├─ radio_off.png
│     │     ├─ radio_on.png
│     │     ├─ right-arrow.png
│     │     ├─ Search_Magnifying_Glass.png
│     │     ├─ UserCircle.png
│     │     ├─ User_03.png
│     │     ├─ 가격제안check.png
│     │     ├─ 거래btn.png
│     │     ├─ 검색 아이콘.png
│     │     ├─ 굵은 세로 구분줄.png
│     │     ├─ 굵은 세로줄.png
│     │     ├─ 내정보.png
│     │     ├─ 로고3 2.png
│     │     ├─ 로고3.jpg
│     │     ├─ 문의하기.png
│     │     ├─ 세로 구분줄.png
│     │     ├─ 업로드 시간.png
│     │     ├─ 엑스표시.png
│     │     ├─ 조회수.png
│     │     ├─ 찜하기.png
│     │     ├─ 찜한수.png
│     │     └─ 청파톡.png
│     ├─ components
│     │  ├─ HelloWorld.vue
│     │  └─ ItemComp.vue
│     ├─ main.js
│     ├─ router
│     │  └─ index.js
│     └─ views
│        ├─ AboutView.vue
│        ├─ HomeView.vue
│        ├─ LoginView.vue
│        ├─ ProductDetail.vue
│        ├─ SellView.vue
│        └─ WishList.vue
├─ ChungpaFront-main
│  ├─ babel.config.js
│  ├─ jsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  ├─ README.md
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ assets
│  │  │  ├─ fonts
│  │  │  │  ├─ NanumGothic.ttf
│  │  │  │  ├─ NanumGothicBold.ttf
│  │  │  │  ├─ NanumGothicExtraBold.ttf
│  │  │  │  ├─ NanumGothicLight.ttf
│  │  │  │  ├─ PyeongChangPeace-Bold.ttf
│  │  │  │  └─ PyeongChangPeace-Light.ttf
│  │  │  ├─ logo.png
│  │  │  └─ res
│  │  │     ├─ buy 1.png
│  │  │     ├─ Camera.png
│  │  │     ├─ Chat_Circle.png
│  │  │     ├─ Check-off.png
│  │  │     ├─ Check-on.png
│  │  │     ├─ checkbox.png
│  │  │     ├─ check_off.png
│  │  │     ├─ check_on.png
│  │  │     ├─ down-arrow.png
│  │  │     ├─ go.png
│  │  │     ├─ Group 24.png
│  │  │     ├─ no-item-image.png
│  │  │     ├─ no-picture.png
│  │  │     ├─ radio_off.png
│  │  │     ├─ radio_on.png
│  │  │     ├─ right-arrow.png
│  │  │     ├─ Search_Magnifying_Glass.png
│  │  │     ├─ sell 1.png
│  │  │     ├─ UserCircle.png
│  │  │     ├─ User_03.png
│  │  │     ├─ 가격제안check.png
│  │  │     ├─ 거래btn.png
│  │  │     ├─ 검색 아이콘.png
│  │  │     ├─ 굵은 세로 구분줄.png
│  │  │     ├─ 굵은 세로줄.png
│  │  │     ├─ 내정보.png
│  │  │     ├─ 로고3 2.png
│  │  │     ├─ 로고3.jpg
│  │  │     ├─ 문의하기.png
│  │  │     ├─ 세로 구분줄.png
│  │  │     ├─ 업로드 시간.png
│  │  │     ├─ 엑스표시.png
│  │  │     ├─ 조회수.png
│  │  │     ├─ 찜하기.png
│  │  │     ├─ 찜한수.png
│  │  │     └─ 청파톡.png
│  │  ├─ components
│  │  │  ├─ AnotherItem.vue
│  │  │  ├─ ItemComp.vue
│  │  │  ├─ ItemInfo.vue
│  │  │  ├─ NaviComp.vue
│  │  │  └─ ReviewComment.vue
│  │  ├─ main.js
│  │  ├─ router
│  │  │  ├─ index.js
│  │  │  └─ user.js
│  │  ├─ titleMixin.js
│  │  └─ views
│  │     ├─ BuyView.vue
│  │     ├─ LoginView.vue
│  │     ├─ MainView.vue
│  │     ├─ MyPage.vue
│  │     ├─ ProductDetail.vue
│  │     ├─ RegistrationView.vue
│  │     ├─ SellView.vue
│  │     ├─ ShareView.vue
│  │     ├─ TransactionHistory.vue
│  │     ├─ WishList.vue
│  │     └─ WriteView.vue
│  └─ vue.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ app.js
   ├─ db-connect.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ join.js
   │  └─ show-all-data.js
   ├─ sql.js
   └─ views

```
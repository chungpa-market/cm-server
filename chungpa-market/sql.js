module.exports = {
    productList: {
      query: `SELECT * from t_product`
    },
    productDetail: {
      query: `SELECT t1.id, t1.product_name, t1.product_price, t2.path, t3.category1, t3.category2, t3.category3 
      FROM t_product t1, t_image t2, t_category t3
      WHERE t1.id = ? AND t1.id = t2.product_id AND t2.type = 3 AND t1.category_id = t3.id`
      // 나중에는 id 변경 - ? = 받아온 데이터를 저 부분에 넘겨줌
    },
    productMainImages: {
      query: `SELECT * FROM t_image WHERE product_id = ? AND TYPE = 2`
    },
    productInsert: {  // 판매자로 등록된 사람만 할수 있게 설정해야 함
      query: `INSERT INTO t_product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    },
    productImageInsert: { 
      query: `INSERT INTO t_image (product_id, type, path)
      VALUES (?, ?, ?)`
    },
    sellerList: {
        query: `select * from t_seller`
    },
    majorLoad: {
      query: `SELECT * FROM t_category_major`
    }

  }
module.exports = {
  sell: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=1`,
  },
  buy: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=2`,
  },
  share: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=3`,
  },
  productDetail: {
    query: `SELECT t1.id, image_path, title, product_price, created_time, product_name, method, content, name FROM t_post t1, t_user t2 WHERE t1.user_id = t2.id AND t1.id=`,
  },
  productInsert: {
    query: `INSERT INTO t_post (id, user_id, tags, title, product_name, category_id, product_price, content, image_path, method,created_time,modified_time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
  },
};

// 게시글 미리보기에서 필요한 정보
//`SELECT id, image_path, title, product_price, content FROM t_post`;
// 제품 상세페이지 쿼리문
// `SELECT id, image_path, title, product_price, created_time, product_name, method, content, name FROM t_post t1, t_user t2 WHERE t1.user_id = t2.login_id`;
// 제품 등록 쿼리
// `INSERT INTO t_post (id, user_id, tags, title, product_name, category_id, product_price, content, image_path, method,created_time,modified_time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;
//

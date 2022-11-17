module.exports={
    productList:{
        query:`SELECT t1.id,t1.product_name, t1.product_price , t3.major,t3.required,t3.GEclass 
        FROM t_product t1, t_image t2, t_category t3
        WHERE t1.id=t2.product_id AND t2.type=1 AND t1.category_id=t3.id `
    },

    productDetail:{
        query:`SELECT t1.id,t1.product_name, t1.product_price , t3.major,t3.required,t3.GEclass 
        FROM t_product t1, t_image t2, t_category t3
        WHERE t1.id=? AND t1.id=t2.product_id AND t2.type=3 AND t1.major=t3.id `
    },
    productMainImages:{
        query:`SELECT * FROM t_image WHERE product_id=? AND TYPE=2 `
    },
    productInsert:{
        query:`INSERT INTO t_product (product_name,product_price,product_describe,tags,trade_method,image_path,
            seller_id,category_id)
            VALUES (?,?,?,?,?,?,?,?)`
    },
    productImageInsert:{
        query:`insert into t_image (product_id,type,path)
        values (?,?,?)`
    },
    sellerList:{
        query:'select * from t_seller'
    },
    
    searchProduct:{
        query:`select * from t_post where product_name '?%';
        select * from t_post where product_name '%?%';`
    },
    productInfoinPal:{
        query:`select * from t_post where tags=1`
    },
    productInfoinSal:{
        query:`select * from t_post where tags=2`
    },
    productInfoinNa:{
        query:`select * from t_post where tags=3`
    },
}
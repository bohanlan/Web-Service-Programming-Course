<template>
    <div class="container">
        <h1>商品清單</h1>
        <!-- 搜尋框 -->
        <!--
        第一題：輸入搜尋文字 (用 v-model 綁定)，即時篩選商品列表。
    -->
        <input type="text" v-model="searchText" placeholder="輸入商品名稱搜尋" class="search-input" />

        <!-- 搜尋結果 -->
        <div v-if="filteredProducts.length > 0">
            <!-- 商品列表 -->
            <div v-for="product in filteredProducts" :key="product.id" class="product-card">
                <!--
        第二題：
        列出所有商品，並顯示：商品圖片、商品名稱、價格
        -->
                <img :src="product.image" alt="商品圖片" class="product-image" />
                <h3>商品名稱：{{ product.name }}</h3>
                <p>價格：{{ product.price }} 元</p>

                <!-- 庫存狀態 -->
                <div>
                    <!--
            第三題：
            每個商品顯示庫存狀態：
            1. 如果庫存數量 > 10，顯示「庫存充足」(class="stock-good")
            2. 如果庫存數量 <= 10 且 > 0，顯示「庫存緊張」(class="stock-low")
            3. 如果庫存數量 = 0，用 v-show 顯示「售完」標籤（紅色字）(class="stock-out")
            -->
                    <p v-if="product.stock > 10" class="stock-good">庫存充足</p>
                    <p v-else-if="product.stock <= 10 && product.stock > 0" class="stock-low">庫存緊張</p>
                    <p v-show="product.stock === 0" class="stock-out">售完</p>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="no-result">找不到商品</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            searchText: '',
            products: [
                {
                    id: 1,
                    name: '聰勁即溶乳清蛋白-濃情巧克力風味',
                    price: 2997,
                    stock: 100,
                    image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7842947/0/638729914961200000?v=1',
                },
                {
                    id: 2,
                    name: '聰勁即溶乳清蛋白-花生巧克力風味',
                    price: 2997,
                    stock: 5,
                    image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7353444/0/638729915240700000?v=1',
                },
                {
                    id: 3,
                    name: '聰勁即溶乳清蛋白-蜂蜜牛奶風味',
                    price: 2997,
                    stock: 7,
                    image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/6944465/0/638729915262900000?v=1',
                },
                {
                    id: 4,
                    name: '聰勁即溶乳清蛋白-原味無添加',
                    price: 2900,
                    stock: 20,
                    image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/6562569/0/638809204022470000?v=1',
                },
                {
                    id: 5,
                    name: '聰勁即溶乳清蛋白-珍珠奶茶風味',
                    price: 2997,
                    stock: 0,
                    image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/6271584/0/638729915021870000?v=1',
                },
            ],
        };
    },
    computed: {
        filteredProducts() {
            if (!this.searchText) {
                return this.products;
            }
            return this.products.filter((product) =>
                product.name.toLowerCase().includes(this.searchText.toLowerCase())
            );
        },
    },
};
</script>

<style>
.container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}
.search-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    font-size: 16px;
}
.product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    text-align: center;
}
.product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
}
.stock-good {
    color: green;
}
.stock-low {
    color: orange;
}
.stock-out {
    color: red;
    font-weight: bold;
}
.no-result {
    text-align: center;
    color: #999;
    margin-top: 20px;
}
</style>

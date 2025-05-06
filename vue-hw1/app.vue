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
                    name: 'iPhone 15',
                    price: 35000,
                    stock: 5,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouynk1Nu-ii7w8AWS8GuYYkiWx3hSkVfTnQ&s',
                },
                {
                    id: 2,
                    name: 'MacBook Pro',
                    price: 70000,
                    stock: 12,
                    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_TW?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1628621722000',
                },
                {
                    id: 3,
                    name: 'AirPods Pro',
                    price: 8000,
                    stock: 0,
                    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1724041668836',
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

// 模拟产品数据
const products = [
    {
        id: 1,
        name: "不锈钢餐具套装",
        description: "高品质不锈钢餐具，耐用美观，适合家庭和餐厅使用。采用食品级304不锈钢材质，经过精细抛光处理，光泽度高，易清洁。",
        image: "images/product1.jpg",
        price: "$25.99",
        category: "餐具系列",
        specs: {
            材质: "304不锈钢",
            规格: "20件套",
            包装: "礼品盒装",
            产地: "中国"
        }
    },
    {
        id: 2,
        name: "陶瓷茶具套装",
        description: "精美陶瓷茶具，传统工艺制作，品味生活必备。采用高温烧制工艺，釉面光滑，色泽温润，具有良好的保温性能。",
        image: "images/product2.jpg",
        price: "$39.99",
        category: "茶具系列",
        specs: {
            材质: "优质陶瓷",
            规格: "6件套",
            包装: "精美礼盒",
            产地: "中国景德镇"
        }
    },
    {
        id: 3,
        name: "竹制砧板",
        description: "天然竹制砧板，环保健康，抗菌防霉。选用优质毛竹为原料，经过高温碳化处理，硬度高，不易开裂，双面可用。",
        image: "images/product3.jpg",
        price: "$19.99",
        category: "厨房用品",
        specs: {
            材质: "天然竹材",
            尺寸: "30×20×1.5cm",
            包装: "环保包装",
            产地: "中国"
        }
    },
    {
        id: 4,
        name: "丝绸围巾",
        description: "100%桑蚕丝围巾，轻盈柔软，光泽自然。采用传统织造工艺，图案精美，色彩丰富，是商务和休闲的理想配饰。",
        image: "images/product4.jpg",
        price: "$59.99",
        category: "纺织品",
        specs: {
            材质: "100%桑蚕丝",
            尺寸: "180×70cm",
            包装: "精美礼盒",
            产地: "中国杭州"
        }
    },
    {
        id: 5,
        name: "紫砂茶壶",
        description: "宜兴紫砂茶壶，传统手工制作，具有良好的透气性和保温性。长期使用后会形成独特的包浆，越用越有韵味。",
        image: "images/product5.jpg",
        price: "$89.99",
        category: "茶具系列",
        specs: {
            材质: "宜兴紫砂",
            容量: "300ml",
            包装: "精美礼盒",
            产地: "中国宜兴"
        }
    },
    {
        id: 6,
        name: "手工刺绣装饰画",
        description: "精美手工刺绣装饰画，采用传统苏绣工艺，图案生动，色彩丰富。是家居装饰和馈赠亲友的理想选择。",
        image: "images/product6.jpg",
        price: "$129.99",
        category: "工艺品",
        specs: {
            材质: "丝绸+绣线",
            尺寸: "50×50cm",
            包装: "精美礼盒",
            产地: "中国苏州"
        }
    }
];

// 显示所有产品
function displayAllProducts() {
    const productList = document.getElementById('product-list');
    
    if (productList) {
        let productHTML = '';
        
        products.forEach(product => {
            productHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-card-content">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p><strong>${product.price}</strong></p>
                        <a href="product-detail.html?id=${product.id}" class="btn">查看详情</a>
                    </div>
                </div>
            `;
        });
        
        productList.innerHTML = productHTML;
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    displayAllProducts();
});
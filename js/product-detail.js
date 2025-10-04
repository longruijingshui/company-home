// 模拟产品数据
const products = [
    {
        id: 1,
        name: "不锈钢餐具套装",
        description: "高品质不锈钢餐具，耐用美观，适合家庭和餐厅使用。采用食品级304不锈钢材质，经过精细抛光处理，光泽度高，易清洁。设计符合人体工程学，握感舒适，使用方便。",
        image: "images/product1.jpg",
        price: "$25.99",
        category: "餐具系列",
        specs: {
            材质: "304不锈钢",
            规格: "20件套",
            包装: "礼品盒装",
            产地: "中国",
            适用场景: "家庭、餐厅、酒店"
        }
    },
    {
        id: 2,
        name: "陶瓷茶具套装",
        description: "精美陶瓷茶具，传统工艺制作，品味生活必备。采用高温烧制工艺，釉面光滑，色泽温润，具有良好的保温性能。造型典雅，工艺精湛，是品茶爱好者的理想选择。",
        image: "images/product2.jpg",
        price: "$39.99",
        category: "茶具系列",
        specs: {
            材质: "优质陶瓷",
            规格: "6件套",
            包装: "精美礼盒",
            产地: "中国景德镇",
            容量: "茶壶300ml，茶杯80ml"
        }
    },
    {
        id: 3,
        name: "竹制砧板",
        description: "天然竹制砧板，环保健康，抗菌防霉。选用优质毛竹为原料，经过高温碳化处理，硬度高，不易开裂，双面可用。独特的 juices 槽设计，方便收集食材汁液，保持台面清洁。",
        image: "images/product3.jpg",
        price: "$19.99",
        category: "厨房用品",
        specs: {
            材质: "天然竹材",
            尺寸: "30×20×1.5cm",
            包装: "环保包装",
            产地: "中国",
            重量: "0.8kg"
        }
    },
    {
        id: 4,
        name: "丝绸围巾",
        description: "100%桑蚕丝围巾，轻盈柔软，光泽自然。采用传统织造工艺，图案精美，色彩丰富，是商务和休闲的理想配饰。具有良好的透气性和吸湿性，四季皆宜。",
        image: "images/product4.jpg",
        price: "$59.99",
        category: "纺织品",
        specs: {
            材质: "100%桑蚕丝",
            尺寸: "180×70cm",
            包装: "精美礼盒",
            产地: "中国杭州",
            重量: "50g"
        }
    },
    {
        id: 5,
        name: "紫砂茶壶",
        description: "宜兴紫砂茶壶，传统手工制作，具有良好的透气性和保温性。长期使用后会形成独特的包浆，越用越有韵味。独特的双层结构设计，防止烫手，使用安全。",
        image: "images/product5.jpg",
        price: "$89.99",
        category: "茶具系列",
        specs: {
            材质: "宜兴紫砂",
            容量: "300ml",
            包装: "精美礼盒",
            产地: "中国宜兴",
            适用茶类: "普洱茶、乌龙茶、红茶"
        }
    },
    {
        id: 6,
        name: "手工刺绣装饰画",
        description: "精美手工刺绣装饰画，采用传统苏绣工艺，图案生动，色彩丰富。是家居装饰和馈赠亲友的理想选择。每幅作品均由经验丰富的绣娘手工完成，独一无二。",
        image: "images/product6.jpg",
        price: "$129.99",
        category: "工艺品",
        specs: {
            材质: "丝绸+绣线",
            尺寸: "50×50cm",
            包装: "精美礼盒",
            产地: "中国苏州",
            工艺: "纯手工苏绣"
        }
    }
];

// 获取URL参数
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 显示产品详情
function displayProductDetail() {
    const productId = getUrlParameter('id');
    const productDetailContent = document.getElementById('product-detail-content');
    
    if (productDetailContent && productId) {
        // 查找对应的产品
        const product = products.find(p => p.id == productId);
        
        if (product) {
            // 构建规格列表
            let specsHTML = '';
            for (const [key, value] of Object.entries(product.specs)) {
                specsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            
            // 显示产品详情
            productDetailContent.innerHTML = `
                <div class="product-detail-content">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-detail-info">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p><strong>价格: ${product.price}</strong></p>
                        <div class="product-specs">
                            <h3>产品规格</h3>
                            <ul class="spec-list">
                                ${specsHTML}
                            </ul>
                        </div>
                        <button class="btn" onclick="alert('已添加到询价单')">询价</button>
                    </div>
                </div>
            `;
        } else {
            productDetailContent.innerHTML = '<p>未找到该产品</p>';
        }
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    displayProductDetail();
});
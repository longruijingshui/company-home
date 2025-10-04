// 模拟产品数据
const products = [
    {
        id: 1,
        name: "阴离子聚丙烯酰胺",
        description: "主要用于各种工业废水的絮凝沉降，沉淀澄清处理",
        image: "image/prod/jibingxixiananyinlizi.jpg",
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
        name: "阳离子聚丙烯酰胺",
        description: "特别适用于城市污水、污泥、造纸污泥及其它工业污泥的脱水处理药剂",
        image: "image/prod/jubingxixiananyanglizi.jpg",
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
        name: "活性炭",
        description: "适用于精制糖脱色、葡萄糖工业、化学助剂高色素溶液的脱色、提纯、除臭、除杂",
        image: "image/prod/huoxingtan.jpg",
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
        name: "聚合氯化铝",
        description: "极易溶于水，可用于生活饮用水、工业用水及工业废水、生活污水处理、印染废水、屠宰废水",
        image: "image/prod/juhelvhualvbankuang.jpg",
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
        name: "聚合氯化铝铁",
        description: "适用于各种工业废水处理：印染废水、皮革废水、重金属废水、含油废水、造纸废水、洗煤废水、矿山废水、冶金废水。",
        image: "image/prod/juhelvhualvtie.jpg",
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
        name: "除磷剂",
        description: "除浊、脱色、脱油、脱水、除菌、除臭、除藻、去除水中COD、BOD及重金属离子等功效显著。",
        image: "image/prod/chulinji.jpg",
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
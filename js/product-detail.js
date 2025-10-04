// 模拟产品数据
const products = [
    {
        id: 1,
        name: "阴离子聚丙烯酰胺",
        description: "阴离子聚丙烯酰胺（APAM）是水溶性的高分子聚合物， 主要用于各种工业废水的絮凝沉降，沉淀澄清处理，如钢铁厂废水，电镀厂废水，冶金废水，洗煤废水等污水处理、污泥脱水等。还可用于饮用水澄清和净化处理。由于其分子链中含有一定数量的很 性基团，它能通过吸附水中悬浮的固体粒子，使粒子间架桥或通过电荷中和使粒子凝聚形成大的絮凝物，故可加速悬浮液中粒子的沉降，有非常明显的加快溶液澄清，促进过滤等效果。",
        image: "image/prod/jibingxixiananyinlizi.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用聚乙烯包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
    {
        id: 2,
        name: "阳离子聚丙烯酰胺",
        description: "阳离子聚丙烯酰胺（CPAM)是线型高分子化合物，由于它具有多种活性的基团， 可与许多物质亲和、吸附形成氢键。主要絮凝带负电荷的物体，具有除浊、吸附、粘合等功能， 适用于染色、造纸、食品、建筑、冶金、选矿、煤粉、水产加工与发酵等行业有机物体含量较高的废水处理，特别适用于城市污水、污泥、造纸污泥及其它工业污泥的脱水处理药剂。",
        image: "image/prod/jubingxixiananyanglizi.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用聚乙烯包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
    {
        id: 3,
        name: "活性炭",
        description: "粉状活性炭的质量有多项物理与化学的指标，主要的如：水分、灰分、酸溶物、各种金属和酸根的含量，以及它的吸附性能等。对于不同用途的活性炭，时常用不同的物质和方法来检验它的吸附性能，如亚甲基蓝吸附值、碘吸附值、焦糖吸附值、硫酸奎宁吸附值等。其中亚甲基蓝吸附值是常用的。亚甲基蓝是一种深蓝色染料，对它的吸附量反映了活性炭吸附小分子物质的能力；具有大量微孔的活性炭，此值较高。焦糖吸附值(或称焦糖脱色率、或糖蜜吸附率)是反映活性炭对具有较高分子量的有色物质的吸附性能，性能良好的活性炭，此值达到100～110。",
        image: "image/prod/huoxingtan.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用塑料编织袋包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
    {
        id: 4,
        name: "聚合氯化铝",
        description: "聚合氯化铝（PAC），简称聚铝，是介于AlCl3和Al(OH)3之间的一种水溶性无机高分子聚合物，化学通式为[Al2(OH)nCl6-n]m，其中m代表聚合程度，n表示聚合氯化铝产品的中性程度，n=1~5为具有Keggin结构的高电荷聚合环链体，对水中胶体和颗粒物具有高度电中和及桥联作用，并可强力去除有毒物及重金属离子，性状稳定，常作为新兴净水材料、混凝剂，被广泛应用于饮用水、工业废水和城市污水的净化处理中。",
        image: "image/prod/juhelvhualvbankuang.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用塑料编织袋包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
    {
        id: 5,
        name: "聚合氯化铝铁",
        description: "  固体聚合氯化铝铁为棕褐色、红棕色粉末或粒状。极易溶于水，可用于生活饮用水、工业用水及工业废水、生活污水处理。混凝效果除表现为剩余浊度色度降低外，还有絮体形成块，吸附性能高，泥渣过滤脱水性能好等特点，特别是在处理高浊度水时，低温低浊度水时，处理效果比明矾、聚合氯化铝、聚合硫酸铁、三氧化铁效果好。其中对于低温低浊度水、低温高浊度的净化处理效果特别明显，可不加碱性助剂和其它混凝剂无法比拟的效果。",
        image: "image/prod/juhelvhualvtie.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用塑料编织袋包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
    {
        id: 6,
        name: "除磷剂",
        description: "聚合硫酸铁是一种性能优越的无机高分子混凝剂，形态性状是淡黄色无定型粉状固体，极易溶于水，10%（质量）的水溶液为红棕色透明溶液，吸湿性。聚合硫酸铁广泛应用于饮用水、工业用水、各种工业废水、城市污水、污泥脱水等的净化处理。",
        image: "image/prod/chulinji.jpg",
        specs: {
            规格: "25kg/袋",
            包装: "外用塑料编织袋包装，内有塑料薄膜套装",
            产地: "中国",
            适用场景: "工业污水"
        }
    },
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
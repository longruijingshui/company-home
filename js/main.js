// 导航栏移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 关闭移动端菜单 when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 模拟产品数据
const products = [
    {
        id: 1,
        name: "阴离子聚丙烯酰胺",
        description: "主要用于各种工业废水的絮凝沉降，沉淀澄清处理",
        image: "image/prod/jibingxixiananyinlizi.jpg",
    },
    {
        id: 2,
        name: "阳离子聚丙烯酰胺",
        description: "特别适用于城市污水、污泥、造纸污泥及其它工业污泥的脱水处理药剂",
        image: "image/prod/jubingxixiananyanglizi.jpg",
    },
    {
        id: 3,
        name: "活性炭",
        description: "适用于精制糖脱色、葡萄糖工业、化学助剂高色素溶液的脱色、提纯、除臭、除杂",
        image: "image/prod/huoxingtan.jpg",
    }
];

// 在首页显示产品预览
function displayProductPreview() {
    const productPreview = document.getElementById('product-preview');
    
    if (productPreview) {
        let productHTML = '';
        
        // 只显示前3个产品作为预览
        products.slice(0, 3).forEach(product => {
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
        
        productPreview.innerHTML = productHTML;
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    displayProductPreview();
});
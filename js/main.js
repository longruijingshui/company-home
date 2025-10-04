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
        name: "不锈钢餐具套装",
        description: "高品质不锈钢餐具，耐用美观，适合家庭和餐厅使用。",
        image: "images/product1.jpg",
        price: "$25.99"
    },
    {
        id: 2,
        name: "陶瓷茶具套装",
        description: "精美陶瓷茶具，传统工艺制作，品味生活必备。",
        image: "images/product2.jpg",
        price: "$39.99"
    },
    {
        id: 3,
        name: "竹制砧板",
        description: "天然竹制砧板，环保健康，抗菌防霉。",
        image: "images/product3.jpg",
        price: "$19.99"
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
                        <p><strong>${product.price}</strong></p>
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
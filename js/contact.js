// 处理联系表单提交
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 简单验证
            if (name && email && subject && message) {
                // 模拟发送邮件（实际项目中这里会调用后端API）
                alert('感谢您的留言！我们会尽快回复您。');
                
                // 重置表单
                contactForm.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
});
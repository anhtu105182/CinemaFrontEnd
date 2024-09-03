<template>
    <header class="header">
        <nav class="navbar">
            <div class="nav-right">
                <router-link to="/" class="logo-img"><img src="../assets/logo/logo.png" alt="Logo" class="logo" /></router-link>
            </div>
            <div class="nav-left">
                <ul class="nav-list">
                    <li class="nav-item"><router-link to="/" class="menu-headeer">Home</router-link></li>
                    <li class="nav-item"><router-link to="/news/MyTicket" class="menu-headeer">Tiket Saya</router-link></li>
                    <li class="nav-item"><router-link to="/news" class="menu-headeer">TIX ID News</router-link></li>
                    <li class="nav-item">
                    <i class="fa-regular fa-bell"></i>
                    </li>
                    <li class="nav-item">
                        <div class="account">
                            <div class="name">A</div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'AppHeader',
};
</script>

<style scoped>
.header {
    background: #FFFFFF;
}
.navbar {
    display: flex;
    justify-content: space-between;
    width: 1000px; /* Đặt lại chiều rộng hợp lý */
    height: 60px; /* Đặt lại chiều cao hợp lý */
    padding: 8px 72px;
}

.logo{
    width: 64px;
    height: 64px;
    padding: 3px 0px 0px 0px;
    gap: 0px;
    opacity: 0px;
    align-items: center;
}
.nav-left {
    display: flex; /* Sử dụng Flexbox để căn chỉnh các phần tử */
    align-items: center; /* Căn giữa các phần tử theo chiều dọc */
    justify-content: right; /* Căn giữa các phần tử theo chiều ngang */
    flex: 1; /* Đảm bảo rằng phần tử này chiếm hết không gian còn lại */
}

.nav-list {
    list-style: none; /* Loại bỏ dấu chấm đầu mục của danh sách */
    padding: 0; /* Loại bỏ padding mặc định */
    margin: 0; /* Loại bỏ margin mặc định */
    display: flex; /* Sử dụng Flexbox để phân bố các mục đều */
    align-items: center; /* Căn giữa các mục theo chiều dọc */
}

.nav-item {
    margin: 0 15px; /* Tạo khoảng cách giữa các mục */
    font-family: Roboto;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.09px;
    text-align: center;

}

.nav-item .menu-headeer {
    color: black; /* Đổi màu chữ của các liên kết */
    text-decoration: none; /* Loại bỏ gạch chân */
    font-size: 16px; /* Kích thước chữ */
}

.nav-item:hover a {
    border: 1px; /* Thay đổi màu chữ khi di chuột vào mục */
}

a {
    position: relative;
    text-decoration: none;
}

a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #000; /* Màu của gạch chân */
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
}

a:hover::after {
    width: 100%;
}
.logo a::after {
    width: 0;
    text-decoration: none;
}
.logo-img img {
    transition: box-shadow 0.3s ease;
}

.logo-img:hover img {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* Thêm bóng đổ cho logo */
}
.fa-regular{
    font-size: 21px;
    align-content: center;
}

.account {
    display: flex; /* Sử dụng Flexbox để căn chỉnh nội dung */
    align-items: center; /* Căn giữa theo chiều dọc */
    justify-content: center; /* Căn giữa theo chiều ngang */
    width: 40px; /* Đặt kích thước của vòng tròn */
    height: 40px; /* Đặt kích thước của vòng tròn */
    border-radius: 50%; /* Tạo hình tròn */
    background: linear-gradient(90deg, #F2C46F 0%, #C6943F 100%); /* Màu nền của vòng tròn */
}

.name {
    font-family: Poppins; /* Phông chữ */
    font-size: 18px; /* Kích thước chữ */
    font-weight: 500; /* Độ dày chữ */
    line-height: 18px; /* Chiều cao dòng */
    text-align: center; /* Căn giữa chữ */
    color: white; /* Màu chữ, có thể thay đổi theo nhu cầu */
}

</style>

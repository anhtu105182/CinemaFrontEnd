<template>
  <footer>
    <hr class="to">
    <div class="container">
      <img class="logo" src="../assets/logo/logo.png" alt="">
      <!-- ô 2 -->
      <div class="information">
        <div class="column">
          <h3>Perusahaan</h3>
          <ul>
            <li>Kontak Kami</li>
            <li>Tentang</li>
            <li>Partner</li>
          </ul>
        </div>
        <div class="column">
          <h3>Seputar</h3>
          <ul>
            <li>TIX ID News</li>
            <li>Bioskop</li>
            <li>Tiket Saya</li>
            <li>Pembayaran</li>
            <li>Cicilan</li>
          </ul>
        </div>
        <div class="column">
          <h3>Dukungan</h3>
          <ul>
            <li>Pusat Bantuan</li>
            <li>Kebijakan Privasi</li>
            <li>FAQ</li>
            <li>Syarat dan Ketentuan</li>
            <li>Update Covid-19</li>
          </ul>
        </div>
      </div>
      <!-- ô 3 -->
      <div class="bank">
        <div class="o1">
          <p>Follow Social Media</p>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-facebook"></i>
        </div>
        <div class="o2">
          <p>Download Aplikasi TIX ID</p>
          <!-- <img src="../assets/logo/shop.png" alt=""> -->
          <div class="h1">
            <img class="i1" src="../assets/logo/ggplay.png" alt="">
            <img class="i1" src="../assets/logo/appstore.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script>
  export default {
    name: 'AppFooter',
  };
</script>
  
<style>
.to{
  width: 100%;
  margin: 0px;
}
.container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 360px;
  margin: 0px;
  /* border: 1px solid red; */
}
.logo{
  width: 110px;
  height: 100px;
  padding: 30px 119px 220px 71px;
  gap: 0px;
  opacity: 0px;
}
.information {
  width: 530px;
  height: 240px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding: 40px 150px 83px 0px;
}
.column h3 {
  margin-bottom: 10px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21.09px;
  text-align: left;

}
  .column ul {
  list-style: none;
  padding: 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}
.column ul li {
  margin-bottom: 5px;
}

.bank{
  width: 241.52px;
  height: 189px;
  top: 40px;
  left: 1008px;
  gap: 0px;
  opacity: 0px;
  padding: 40px 15px 36px 0px;
}
.bank .o1 p {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  line-height: 21.09px;
  text-align: left;
}
.bank .o1 .fa-brands{
  padding: 5px ;
}
.bank .o2 p{
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  line-height: 21.09px;
  text-align: left;

}
.h1{
  display: flex;
}
.bank .o2 .h1 img{
  width: 100px;
  height: 33px;
  top: 45px;
  gap: 0px;
  opacity: 0px;
  margin: 0px 10px 0px 0px;
}
.i1 {
  border-radius: 8px 8px 8px 8px; /* Bo tròn tất cả các góc của hình ảnh */
}
</style>

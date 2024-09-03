`<template>
    <!-- slide p1 -->
    <div class="momji">
        <Splide :options="{ rewind: true, perPage: 2, perMove: 1 }" aria-label="My Favorite Images">
            <SplideSlide>
                <div class="nawap-slde-p1">
                    <div class="slide-p1">
                        <img src="../assets/Homepage/slidep1/s1.png" alt="img 1">
                    </div>
                    <div class="slide-p2">
                        <h3>Spider-Man: No Way Home</h3>
                    </div>
                    <div class="slide-p3">
                        <div  class="swwing-p4-h2 dq1">
                            <div class="t1">XXI</div>
                            <div class="t2">CGV</div>
                            <div class="t3">CINÉPOLIS</div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            
            <SplideSlide>
                <div class="nawap-slde-p1">
                    <div class="slide-p1">
                        <img src="../assets/Homepage/slidep1/s2.png" alt="img 2">
                    </div>
                    <div class="slide-p2">
                        <h3>Spider-Man: No Way Home</h3>
                    </div>
                    <div class="slide-p3">
                        <div  class="swwing-p4-h2 dq1">
                            <div class="t1">XXI</div>
                            <div class="t2">CGV</div>
                            <div class="t3">CINÉPOLIS</div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            
            <SplideSlide>
                <div class="nawap-slde-p1">
                    <div class="slide-p1">
                        <img src="../assets/Homepage/slidep1/s3.jpg" alt="img 3">
                    </div>
                    <div class="slide-p2">
                        <h3>Spider-Man: No Way Home</h3>
                    </div>
                    <div class="slide-p3">
                        <div  class="swwing-p4-h2 dq1">
                            <div class="t1">XXI</div>
                            <div class="t2">CGV</div>
                            <div class="t3">CINÉPOLIS</div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            
            <SplideSlide>
                <div class="nawap-slde-p1">
                    <div class="slide-p1">
                        <img src="../assets/Homepage/slidep1/s4.png" alt="img 4">
                    </div>
                    <div class="slide-p2">
                        <h3>Spider-Man: No Way Home</h3>
                    </div>
                    <div class="slide-p3">
                        <div  class="swwing-p4-h2 dq1">
                            <div class="t1">XXI</div>
                            <div class="t2">CGV</div>
                            <div class="t3">CINÉPOLIS</div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>

    </div>

    <!--slide p2 -->
    <swiper :slides-per-view="1" :autoplay="{ delay: 2000, disableOnInteraction: false }" pagination class="naban-slide">
        <swiper-slide class="d1" >
            <div class="container-slide">
                <div class="wapar-slide">
                    <img src="../assets/Homepage/slidep2/slide1/logo.png" alt="">
                    <h3 class="naban-title">SEWA/BELI FILM dan SERIAL di TIX ID sekarang!</h3>
                    <div class="wapar-slde-a1">
                        <i class="fa-solid fa-globe"></i>
                        <p>www.tix.id</p>
                        <i class="fa-brands fa-instagram"></i>
                        <p>tix_id</p>
                    </div>
                </div>
                <div class="img-slide">
                    <img class="img-s1" src="../assets/Homepage/slidep2/slide1/wite.png" alt="">
                    <img class="img-s2" src="../assets/Homepage/slidep2/slide1/jonwich.png" alt="">
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="d2">
            <div class="logo-container">
                <img src="../assets/Homepage/slidep2/slide2/logo.png" alt="">
            </div>
            <p>Download Sekarang!</p>
            <div class="doaload-slided ">
                <img class="f1" src="../assets/logo/ggplay.png" alt="">
                <img src="../assets/logo//appstore.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide class="d3">
            <h3>Pesan Tiket Film di TIX ID</h3>
            <p>#BebasAntri</p>
        </swiper-slide>
        <!-- Nút điều hướng -->
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
    </swiper>
    
    <!-- phần 3-->
    <div class="container-p3">
        <div class="container-p3-h1">
            <div class="navar-p3-left">
                <h3>TIX ID News</h3>
                <p>Berita tentang dunia perfilman terbaru untuk anda!</p>
            </div>
            <div class="navar-p3-right">
                <h3><router-link to="/news">Lihat Semua</router-link></h3>
            </div>
        </div>
        <div class="container-p3-h2">
            <div>
                <!-- o1 -->
                <img class="img-p3-h2" src="../assets/Homepage/paragraph3/o1.png" alt="img1">
                <div>
                    <div class="a1">Spotlight</div>
                    <div class="content-p3-h2">
                        <h3>Spider-Man: No Way Home Rilis Trailer Terbaru.</h3>
                        <p>08 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
            <!-- o2 -->
            <div>
                <img class="img-p3-h2" src="../assets/Homepage/paragraph3/o2.png" alt="img2">
                <div>
                    <div class="a1">Spotlight</div>
                    <div class="content-p3-h2">
                        <h3>Fakta Film Yowis Ben Finale Yang Perlu Kamu Ketahui Sebelum Nonton!.   </h3>
                        <p>09 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
            <!-- o3 -->
            <div>
                <img class="img-p3-h2" src="../assets/Homepage/paragraph3/o3.png" alt="img3">
                <div>
                    <div class="a1">New</div>
                    <div class="content-p3-h2">
                        <h3>Ghostbusters: Afterlife Hadir Menampilkan Variasi Hantu Baru</h3>
                        <p>08 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- phần 4 -->
    <div class="container-p4-h1">
        <div class="navar-p3-left">
            <h3>TIX ID News</h3>
            <p>Berita tentang dunia perfilman terbaru untuk anda!</p>
        </div>
        <div class="navar-p3-right">
            <h3><router-link to="/ComingSoonMovie">Lihat Semua</router-link></h3>
        </div>
    </div>
    <div class="container-p4-h2">
        <!-- ô 1 -->
        <div >
            <img class="img-p4-h2" src="../assets/Homepage/paragraph4/s1.jpg" alt="img">
            <div class="content-p4-h2">
                <h3>The Matrix: Resurrections</h3>
                <div  class="swwing-p4-h2">
                    <div class="t1">XXI</div>
                    <div class="t2">CGV</div>
                    <div class="t3">CINÉPOLIS</div>
                </div>
            </div>
        </div>
        <!-- ô2 -->
        <div>
            <img class="img-p4-h2" src="../assets/Homepage/paragraph4/s2.jpg" alt="img">
            <div class="content-p4-h2">
                <h3>Resident Evil: Welcome to Raccoon City</h3>
                <div class="swwing-p4-h2">
                    <div class="t1">XXI</div>
                    <div class="t2">CGV</div>
                    <div class="t3">CINÉPOLIS</div>
                </div>
            </div>
        </div>
        <!-- ô 3 -->
        <div>
            <img class="img-p4-h2" src="../assets/Homepage/paragraph4/s3.jpg" alt="img">
            <div class="content-p4-h2">
                <h3>Sword Art Online: Progressive - Aria of a Starless Night</h3>
                <div  class="swwing-p4-h2">
                    <div class="t1">XXI</div>
                    <div class="t2">CGV</div>
                    <div class="t3">CINÉPOLIS</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { defineComponent } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper-bundle.css'

    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import '@splidejs/vue-splide/css/skyblue';
    import '@splidejs/vue-splide/css/sea-green';
    import '@splidejs/vue-splide/css/core';
    export default defineComponent({
        name: 'Homepage',
        components: {
            Swiper,
            SwiperSlide,
            Splide,
            SplideSlide
        },
        
    })
</script>

<style>
/* phần 1 */
/* .monji{
    margin: 0px 10px 0px;
} */
.nwawap-slide-p1{
    width: 500px;
    height: 851px;
    
}
.slide-p1{
    display: flex;
    justify-content: center;
}
.slide-p1 img{
    width: 500px;
    height: 700px;
    border-radius: 12px;
}
.slide-p2{
    display: flex;
    justify-content: center;
}
.slide-p2 h3 {
    width: 500px;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
}
.slide-p3{
    display: flex;
    justify-content: space-around;
}
.dq1{
    position: relative;
    right: 50px;
}















/* phần 2 */


.swiper-button-next, .swiper-button-prev {
    color: black; /* Thay đổi màu sắc của nút */
    width: 72px;
    height: 72px;
    border: 1px ;
    border-radius: 50%;
    background-color: white;

}

.swiper-button-next {
    right: -32px; /* Điều chỉnh vị trí nút Next */
}

.swiper-button-prev {
    left: -32px; /* Điều chỉnh vị trí nút Prev */
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
    font-size: 24px;
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
    font-size: 22px;
}
.naban-slide{
    height: 230px;
    margin: 0px 50px 0px 50px;

}
.d1{
    background-color: #F3F3F3;
}
.d2{
    background-color: #1A2C50;
    display: flex;
    flex-direction: column;
    align-items: center; /* Căn giữa theo chiều ngang */
    text-align: center;
}
.d3{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Lớp phủ màu đen với độ trong suốt 50% */
                url(../assets/Homepage/slidep2/slide3/quay.jpg);
    background-size: cover;
    background-position: center top;
    background-position: 50% -200px;
}

.container-slide{
    display: flex;
    justify-content: center;
}

.wapar-slide img{
    width: 64px;
    height: 64PX;
}
.wapar-slide h3{
    width: 400px;
    height: 96px;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    margin: 0px;
}
.wapar-slde-a1{
    display: flex;
    align-items: center

}
.wapar-slde-a1 p{
    margin-right: 21px;
    font-family: roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;

}
.fa-solid{
    margin-right: 10px;
}
.fa-brands{
    margin-right: 10px;
}
.img-slide{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.img-slide img{
    width: 200px;
    height: 363px;

}
.img-s2{
    position: relative;
    right: 80px;
}


.logo-container img {
    width: 200px;
    height: 102px;
    
}
.d2 p {
    font-family: roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;
    margin: 0px;
}
.doaload-slided {
    display: flex;
    justify-content: center;
}
.doaload-slided img{
    width: 90px;
    height: 30px;
    border-radius: 7px;
}
.doaload-slided .f1{
    margin-right: 15px;

}
.d3 h3{
    font-family: Roboto;
    font-size: 54px;
    font-weight: 700;
    line-height: 63.28px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 0px;

}
.d3 p{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
    text-align: center;
    color: #FFFFFF;
}
/* phàn 3 */
.container-p3{
    margin: 0px 50px 0px 50px;
}
.container-p3-h1{
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
    margin: 30px 0px 20px 0px;
}
.navar-p3-right{
    align-items: center;
    align-content: center;
    
}
.navar-p3-right h3 a {
    text-decoration: none;
    width: 170px;
    height: 22px;
    top: 1601px;
    left: 1199px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-align: right;
    color: #118EEA;

}
.navar-p3-left h3 {
    width: 132px;
    height: 32px;
    top: 1594px;
    left: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    padding: 0px;
    margin: inherit;
}
.navar-p3-left p{
    padding: 0px;
    width: 357px;
    height: 24px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A637A;
}

/* p3-h2 */
.container-p3-h2{
    height: 459px;
    display: flex;
    justify-content: space-between;

}
.img-p3-h2{
    width: 350px;
    height: 200px;
    border-radius: 15px;
}
.a1{
    width: 50px;
    height: 20px;
    padding: 8px 12px 8px 12px;
    margin-top: 20px;
    gap: 10px;
    border: 1px 0px 0px 0px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    text-align: left;
    border: 1px solid #333D58;
    text-align: center;
    align-content: center;
    border-radius: none;

}
.content-p3-h2 h3{
    width: 355px;
    height: 96px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #333333;
    margin-top: 12px ;
}
.content-p3-h2 p{
    width: 145px;
    height: 24px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A637A;
}

/* phần 4 */
.container-p4-h1{
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
    margin: 30px 0px 20px 0px;
}
.container-p4-h2{
    display: flex;
    justify-content: space-between;
    margin-bottom: 160px;
}
.img-p4-h2{
    width: 359px;
    height: 507px;
    border-radius: 12px;
}
.content-p4-h2 h3{
    width: 355px;
    height: 50px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    text-align: left;
    color: #333333;
    margin-top: 12px ;
    align-content: center;
}
.swwing-p4-h2{
    width: 100px;
    display: flex;
    justify-content: space-between;
}
.swwing-p4-h2 .t1{
    width: Hug (35px)px;
    height: Hug (26px)px;
    padding: 6px 8px 6px 8px;
    gap: 10px;
    border-radius: 4px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    background: linear-gradient(90deg, #F2C46F 0%, #C6943F 100%);
    color: #FFFFFF;
    margin-right: 18px;
}
.swwing-p4-h2 .t2{
    width: Hug (40px)px;
    height: Hug (26px)px;
    padding: 6px 8px 6px 8px;
    gap: 10px;
    border-radius: 4px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    background: #EC1E2B;
    color: #FFFFFF;
    margin-right: 18px;

}
.swwing-p4-h2 .t3{
    width: Hug (76px)px;
    height: Hug (26px)px;
    padding: 6px 8px 6px 8px;
    gap: 10px;
    border-radius: 4px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    background: #000E62;
    color: #FFFFFF;

}
</style>`
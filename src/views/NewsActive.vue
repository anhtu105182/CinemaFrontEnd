<template>
    <!-- phần 1 -->
    <div class="tong">
        <!-- tầng 1 -->
        <div class="title-p1">
            <h2 class="title-o1">Spider-Man: No Way Home Rilis Trailer Terbaru</h2>
            <p class="title-o2">17 Nov 2021 | TIX ID</p>
        </div>
        <!-- tầng 2 -->
        <div class="tissue">
            <img src="../assets/Homepage/paragraph3/o1.png" alt="Nhệ nhọ">
        </div>
        <!-- tần 3 -->
        <div class="contents">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.</p><br>
            <p>Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices.Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas</p><br>
            <p>Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.</p>
        </div>
        <!-- tần 4 -->
        <div>
            <div class="up4">
                <p>Share this article</p>
                <div class="up4-app">
                    <i class="fa-brands fa-instagram hq"></i>
                    <i class="fa-brands fa-twitter hq"></i>
                    <i class="fa-brands fa-square-facebook hq"></i>
                </div>
                <div class="container">
                    <div class="like-container">
                        <button @click="toggleLike" :class="{ liked: isLiked }">
                            <i class="fas fa-thumbs-up"></i>
                            <span>{{ likeCount }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- phần 2 -->
    <div class="tong2">
        <div class="title-p2">See Other Articles</div>
        <div class="container-p3-h2">
            <div>
                <!-- o1 -->
                <img class="img-p3-h2" src="../assets/news/s1.png" alt="img1">
                <div>
                    <div class="a1">News</div>
                    <div class="content-p3-h2">
                        <h3>Ghostbusters: Afterlife Hadir Menampilkan Variasi Hantu Baru</h3>
                        <p>08 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
            <!-- o2 -->
            <div>
                <img class="img-p3-h2" src="../assets/news/s2.png" alt="img2">
                <div>
                    <div class="a1">News</div>
                    <div class="content-p3-h2">
                        <h3>House of Gucci: Kisah Pewaris Tunggal Gucci Pada Tahun 1955.</h3>
                        <p>09 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
            <!-- o3 -->
            <div>
                <img class="img-p3-h2" src="../assets/news/s3.png" alt="img3">
                <div>
                    <div class="a1">News</div>
                    <div class="content-p3-h2">
                        <h3>Aksi Donnie Yen Dalam Film Aksi Hongkong Terbaru </h3>
                        <p>15 Nov 2021 | TIX ID</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsActive',
    data() {
        return {
            likeCount: 403, // Số lượng like ban đầu
            isLiked: false, // Trạng thái đã like hay chưa
            };
    },
    methods: {
        toggleLike() {
            if (this.isLiked) {
                this.likeCount--; // Giảm 1 nếu đã like và click lại
            } else {
                this.likeCount++; // Tăng 1 nếu chưa like
            }
            this.isLiked = !this.isLiked; // Đảo ngược trạng thái like
        },
    },
    }
</script>

<style>
.tong{
    margin: 102px 291px 0px 291px;
}
/* tầng1 */
.title-p1{
    margin-bottom: 70px;
}
.title-o1{
    font-family: Roboto;
    font-size: 40px;
    font-weight: 700;
    line-height: 65.63px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 10px;
}
.title-o2{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin: 0px;
    color: #5A637A;
}
/* tầng 2 */
.tissue{
    margin-bottom: 67px;
    border-radius: 12px;
}
.tissue img {
    border-radius: 12px;
}

.contents p{
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    text-align: justify;
    line-height: 28px;
    margin: 0px;
}
.up4{
    font-family: Roboto;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
}
.up4-app{
    display: flex;

}
.hq{
    margin-right: 14px; 
}
.container {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; 
    margin-top: 48px;
}

.like-container button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 18px;
    border: 2px solid #333;
    border-radius: 25px;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.like-container button.liked {
    color: #007bff;
    border-color: #007bff;
}

.like-container i {
    margin-right: 8px;
}

.like-container span {
    font-size: 18px;
}   


/* phần 2 */
.tong2{
    margin: 64px 45px 110px 45px;

}
.title-p2{
    font-family: Roboto;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
    text-align: center;
    margin-bottom: 80px;
}
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

</style>
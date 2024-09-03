<template>
    <div id="total">
        <div class="wrap-p1">
            <h3>TIX ID News</h3>
            <p>Berita tentang dunia perfilman terbaru untuk kamu!</p>
        </div>
        <div class="wrap-p2">
            <div class="search-container">
                <input type="text" placeholder="Search Post">
                <i class="fas fa-search"></i>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn" @click="toggleDropdown">
                    Sortir     <i class="fa-solid fa-caret-down"></i>
                </button>
                <div class="dropdown-content" v-if="isOpen">
                    <label v-for="item in items" :key="item.value">
                        <input type="checkbox" v-model="item.checked" @change="updateSelectedItems" />
                        {{ item.name }}
                    </label>
                </div>
            </div>
        </div>
        <div class="wrap-p3">
            <div 
                class="r1" 
                v-for="(item, index) in itemsWrapP3" 
                :key="index" 
                :class="{ active: selectedIndexes.includes(index) }"
                @click="toggleSelection(index)"
            >
                {{ item }}
            </div>
        </div>
        <div class="wrap-p4" id="part3">
            <img class="img-p4" src="../assets/Homepage/paragraph3/o1.png" alt="img1">
            <div class="wrap-p4-h2">
                <div class="q1">Spotlight</div>
                <div class="wrap-p4-h2-t1">
                    <router-link to="/news/NewsActive"><h3>Spider-Man: No Way Home Rilis Trailer Terbaru.</h3></router-link>
                    <p class="p1">Spider-Man: No Way Home menjadi film yang sangat dinantikan oleh banyak orang. Film ini merupakan lanjutan kisah Peter Parker dalam ...</p>
                    <p class="p2">17 Nov 2021 | TIX ID</p>
                </div>
            </div>
            
        </div>
        <div class="wrap-p4" id="part5">
            <div class="wrap-p4-h3">
                <div class="q1">Spotlight</div>
                <div class="wrap-p4-h3-t1">
                    <h3>Spider-Man: No Way Home Rilis Trailer Terbaru.</h3>
                    <p class="p1">Spider-Man: No Way Home menjadi film yang sangat dinantikan oleh banyak orang. Film ini merupakan lanjutan kisah Peter Parker dalam ...</p>
                    <p class="p2">17 Nov 2021 | TIX ID</p>
                </div>
            </div>
            <img class="img-p5" src="../assets/Homepage/paragraph3/o2.png" alt="img1">
        </div>
        <!-- phần cuối -->
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
    name:'news',
    data() {
        return {
            isOpen: false,
            selectedIndexes: [], // Mảng chứa các chỉ số được chọn
            itemsWrapP3: [
                'Spiderman',
                'Peter Parker',
                'Yowis Ben',
                'Ghostbusters',
                'Film Indonesia',
                'Aksi'
            ],
            items: [
                { name: 'Spotlight', value: 'spotlight', checked: false },
                { name: 'News', value: 'news', checked: false },
                { name: 'Video', value: 'video', checked: false }
            ]
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        updateSelectedItems() {
            console.log('Selected items:', this.items.filter(item => item.checked));
        },
        toggleSelection(index) {
            // Kiểm tra nếu đã chọn mục này thì bỏ chọn
            if (this.selectedIndexes.includes(index)) {
                this.selectedIndexes = this.selectedIndexes.filter(i => i !== index);
            } else {
                // Nếu chưa chọn thì thêm vào mảng
                this.selectedIndexes.push(index);
            }
        }
    }
}
</script>

<style>
#total{
    margin: 0px 40px;
}
.wrap-p1 h3 {
    width: 198px;
    height: 42px;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    line-height: 42.19px;
    text-align: left;
    margin: 0PX;
    margin-bottom: 15px;
}
.wrap-p1 p{
    width: 362px;
    height: 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
}
.wrap-p2{
    display: flex;
    justify-content: left;
    margin-top: 30px;
    margin-bottom: 20px;
}
.search-container {
    position: relative;
    width: 400px;
}
.search-container input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #6c757d;
    outline: none;
}

.search-container input::placeholder {
    color: #adb5bd;
}

.search-container .fa-search {
    position: absolute;
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #6c757d;
}
.sle-p1{
    position: relative;
    left: 45px;
    margin: opx 24px;
    border: none;
}
.dropdown {
    position: relative;
    display: inline-block;
    margin: 0px 30px;
    left: 45px;

}

.dropdown-btn {
    background-color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;

}

.dropdown-content {
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    z-index: 1;
    border-radius: 4px;
    min-width: 160px;
    text-align: left;
}

.dropdown-content label {
    display: block;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
}

.dropdown-content input[type="checkbox"] {
    margin-right: 10px;
}

.dropdown-content label:hover {
    background-color: #f1f1f1;
}

.wrap-p3{
    width:  800px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-bottom: 60px;
}
.r1{
    padding: 12px 20px 12px 20px;
    border-radius: 23px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    border-radius: 25px;
    border: 1px solid #8F98AA;
    color: #8F98AA;
}
#part3{
    margin-bottom: 70px;
}
.r1.active {
    color: #333333;
    border: 1px solid #333333; /* Thay đổi màu border */
}
.r1:hover{
    cursor: pointer;
}
.wrap-p4{
    display: flex;
    justify-content: space-around;
}
.img-p4{
    width: 550px;
    height: 380px;
    border-radius: 8px;
    margin-right: 20px;
    
}
.wrap-p4-h2{
    width: 512px;
    height: 300px;
    margin-left: 63px;
    margin-top: 40px;
}
.q1{
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
a{
    text-decoration: none;
}
.wrap-p4-h2-t1 h3{
    width: 512px;
    height: 100px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
    color: #333333;
    margin: 20px 0px;
    text-decoration: none;
}
.wrap-p4-h2-t1 .p1{
    width: 512px;
    height: 48px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A637A;
}
.wrap-p4-h2-t1 .p2{
    width: 512px;
    height: 24px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #414A63;

}
#part5{
    margin-bottom: 112px;
}
.wrap-p4-h3{
    width: 512px;
    height: 300px;
    margin-top: 40px;
}
.img-p5{
    width: 400px;
    height: 380px;
    border-radius: 8px;
    margin-left: 20px;
    
}
.wrap-p4-h3-t1 h3{
    width: 512px;
    height: 100px;
    gap: 0px;
    opacity: 0px;
    font-family: Roboto;
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
    color: #333333;
    margin: 20px 0px;
}
.wrap-p4-h3-t1 .p1{
    width: 512px;
    height: 48px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A637A;
}
.wrap-p4-h3-t1 .p2{
    width: 512px;
    height: 24px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #414A63;
}
/* phan cuoi */
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

</style>
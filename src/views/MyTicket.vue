<template>
    <div class="warap-h1">
        <div class="title-h1">
            <h3>Tiket Saya</h3>
            <p>Daftar tiket dan transaksi yang pernah anda lakukan</p>
        </div>
        <div class="wrap-q3">
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
        <div>
            <div class="wrap-p4">
                <div class="wrap-p4-y1">
                    <div class="wrap-p4-y1-poster">
                        <img src="../assets/Myticket/s1.png" alt="">
                    </div>
                    <div>
                        <div class="contents-poster">
                            <h3>Spiderman: No Way Home</h3>
                            <p>Kamis, 16 Desember 2021, 14:40 </p>
                        </div>
                        <div class="contents-poster-address">
                            <ion-icon class="z1" name="location-outline"></ion-icon>
                            <p class="v1">Grand Indonesia CGV</p>
                            <p>( Regular 2D )</p>
                        </div>
                    </div>
                </div>
                <div class="wrap-p4-y2">
                    <div class="wrap-p4-y2-a1">Berhasil</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyTicket',
    data() {
        return {
            isOpen: false,
            selectedIndexes: [],
            itemsWrapP3: [
                'Film',
                'Event',
                'Voucher'
            ],
        }
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

.title-h1 h3{
    width: 200px;
    height: 32px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    text-align: left;

}
.title-h1 p{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A637A; 

}
.wrap-q3{
    width:  300px;
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
    border: 1px solid #333D58;
    color:  #333D58;

}
#part3{
    margin-bottom: 70px;
}
.r1.active {
    color: #118EEA;
    border: 1px solid #118EEA; /* Thay đổi màu border */
    
}
.r1:hover{
    cursor: pointer;
    color: #118EEA;
    border: 1px solid #118EEA;
}
.wrap-p4{
    width: 768px;
    display: flex;
    justify-content: space-between;
}
.wrap-p4-y1{
    display: flex;
    justify-content: space-between;

}
.wrap-p4-y1-poster img{
    width: 135px;
    height: 202px;
    margin: 0px 55px 0px 0px;
    border-radius: 8px 8px 8px 8px;
}
.contents-poster h3{
    font-family: Roboto;
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    text-align: left;
}
.contents-poster p{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
    color: #414A63;
}
.contents-poster-address{
    display: flex;
    align-items: center;
}
.contents-poster-address .v1{
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #BDC5D4;
    margin-right: 5px;
}
.z1{
    color: #BDC5D4;
}
.contents-poster-address p{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: left;
    color: #414A63;
}

</style>
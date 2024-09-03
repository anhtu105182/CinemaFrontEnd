<template>
<!-- phần 4 -->
<div class="container-p4-h1">
        <div class="navar-p3-left">
            <h3>Akan datang</h3>
            <p>Tunggu kehadirannya di bioskop kesayangan kamu!</p>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComingSoonMovie'
}
</script>

<style>
.navar-p3-left h3{
    width: 204px;
    height: 42px;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
    text-align: left;

}
.navar-p3-left p{
    width: 366px;
    height: 24px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #414A63;
}
.container-p4-h1{
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
    margin: 30px 50px 20px 50px;
}
.container-p4-h2{
    display: flex;
    justify-content: space-between;
    margin-bottom: 160px;
    margin: 0px 50px 160px 50px;
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
    margin-bottom: 40px;
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
</style>
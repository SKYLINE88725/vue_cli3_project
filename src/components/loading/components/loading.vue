<template>
    <div class="spinner-box">
        <div class="configure-border-1">  
            <div class="configure-core"></div>
        </div>  
        <div class="configure-border-2">
            <div class="configure-core"></div>
        </div> 
    </div>
</template>
<style type="text/css" lang="scss" >
// @import '@/assets/scss/base.scss';
@keyframes configure-clockwise {
    0% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes configure-xclockwise {
    0% {
        transform: rotate(45deg);
    }
    25% {
        transform: rotate(-45deg);
    }
    50% {
        transform: rotate(-135deg);
    }
    75% {
        transform: rotate(-225deg);
    }
    100% {
        transform: rotate(-315deg);
    }
}
    body{
        width:100%;
        height:100%;
    }
    .spinner-box {
    width: 3rem;
    height: 3rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    }
    /* X-ROTATING BOXES */
    .configure-border-1 {
        width: 1.15rem;
        height: 1.15rem;
        padding: .03rem;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffab91;
        animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
    }
    .configure-border-2 {
        width: 1.15rem;
        height: 1.15rem;
        padding: .03rem;
        left: -1.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(63, 249, 220);
        transform: rotate(45deg);
        animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
    }
    .configure-core {
        width: 100%;
        height: 100%;
        background:$bgcolor;
    }
</style>
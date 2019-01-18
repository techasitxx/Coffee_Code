var app = angular.module('app',['ui.router'])
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/Home/index.html'
    })
    .state('next', {
        url: '/next_page',
        templateUrl: 'app/NextPage/index.html'
    })
    .state('Menu', {
        url: '/menu_page',
        templateUrl: 'app/Menu/index.html'
    })
    .state('Menu_2', {
        url: '/menu_page_2',
        templateUrl: 'app/Next-Manu/index.html'
    })
    .state('ht_1',{
        url: '/ht_1',
        templateUrl: 'app/How-to-menu/ht_1.html'
    })
    // Start blog content 1-24
    .state('page1', {
        url: '/blag/content/ประวัติของกาแฟ',
        templateUrl: 'app/Page.ReadMore/1.html'
    })
    .state('page2', {
        url: '/blag/content/วิธีดื่มกาแฟที่ถูกต้อง',
        templateUrl: 'app/Page.ReadMore/2.html'
    })
    .state('page3', {
        url: '/blag/content/ทำไมคนไทยจึงติด_กาแฟเข้ม-หวานมัน',
        templateUrl: 'app/Page.ReadMore/3.html'
    })
    .state('page4', {
        url: '/blag/content/กาแฟไม่ใส่น้ำตาลก็หวานได้',
        templateUrl: 'app/Page.ReadMore/4.html'
    })
    .state('page5', {
        url: '/blag/content/ทำไมกาแฟสำเร็จรูป_ไม่อร่อยเท่ากาแฟสด',
        templateUrl: 'app/Page.ReadMore/5.html'
    })
    .state('page6', {
        url: '/blag/content/เพราะกาแฟคืองานศิลปะ',
        templateUrl: 'app/Page.ReadMore/6.html'
    })
    .state('page7', {
        url: '/blag/content/กาแฟคั่วมือ_สร้างคุณค่าให้ชีวิต',
        templateUrl: 'app/Page.ReadMore/7.html'
    })
    .state('page8', {
        url: '/blag/content/เครื่องชงกาแฟ_สโลว์ไลฟ์_ดื่มอย่างมีสุนทรีย์',
        templateUrl: 'app/Page.ReadMore/8.html'
    })
    .state('page9', {
        url: '/blag/content/กาแฟ_เหมาะกับใครและไม่เหมาะกับใครบ้าง',
        templateUrl: 'app/Page.ReadMore/9.html'
    })
    .state('page10', {
        url: '/blag/content/คนไทยอยากเรียก_เอสเปรสโซ่เย็น_ผิดไหม',
        templateUrl: 'app/Page.ReadMore/10.html'
    })
    .state('page11', {
        url: '/blag/content/แคลอรี่ในเครื่องดื่มของมนุษย์ออฟฟิศ',
        templateUrl: 'app/Page.ReadMore/11.html'
    })
    .state('page12', {
        url: '/blag/content/กาแฟโบราณ_vs_กาแฟสด',
        templateUrl: 'app/Page.ReadMore/12.html'
    })
    .state('page13', {
        url: '/blag/content/เมล็ดกาแฟ_เก็บอย่างไรให้คงคุณภาพได้ดี',
        templateUrl: 'app/Page.ReadMore/13.html'
    })
    .state('page14', {
        url: '/blag/content/กากกาแฟ_มีประโยชน์นะ_ชงเสร็จแล้วอย่าเพิ่งทิ้ง',
        templateUrl: 'app/Page.ReadMore/14.html'
    })
    .state('page15', {
        url: '/blag/content/จากผลเชอร์รี่_สู่กาแฟถ้วยโปรด',
        templateUrl: 'app/Page.ReadMore/15.html'
    })
    .state('page16', {
        url: '/blag/content/คั่วเมล็ดกาแฟต่างกัน_ให้รสชาติที่ต่างกัน',
        templateUrl: 'app/Page.ReadMore/16.html'
    })
    .state('page17', {
        url: '/blag/content/ลาเต้_อาร์ต_ศิลปะเพิ่มเสน่ห์ให้กาแฟ',
        templateUrl: 'app/Page.ReadMore/17.html'
    })
    .state('page18', {
        url: '/blag/content/เมนูกาแฟเยอะจริง_สั่งอย่างไรดี',
        templateUrl: 'app/Page.ReadMore/18.html'
    })
    .state('page19', {
        url: '/blag/content/ดื่มกาแฟให้ได้ประโยชน์สูงสุด_โทษต่ำสุด',
        templateUrl: 'app/Page.ReadMore/19.html'
    })
    .state('page20', {
        url: '/blag/content/4_องค์ประกอบสำคัญของ_espresso_perfect_shot',
        templateUrl: 'app/Page.ReadMore/20.html'
    })
    .state('page21', {
        url: '/blag/content/5_ข้อ_ชงเอสเปรสโซ่ให้_perfect',
        templateUrl: 'app/Page.ReadMore/21.html'
    })
    .state('page22', {
        url: '/blag/content/เอสเปรสโซ่_คำเรียกคุ้นหูนี้คืออะไร',
        templateUrl: 'app/Page.ReadMore/22.html'
    })
    .state('page23', {
        url: '/blag/content/ไม่ดื่มกาแฟ_แต่ไปดื่มชาและน้ำอัดลมแทน_หลีกเลี่ยงคาเฟอีนได้จริงหรือ',
        templateUrl: 'app/Page.ReadMore/23.html'
    })
    .state('page24', {
        url: '/blag/content/หลัก_FABAF_กินกาแฟให้ได้อรรถรส',
        templateUrl: 'app/Page.ReadMore/24.html'
    })
    // end blog
    .state('categories', {
        url: '/Blog_Categories',
        templateUrl:'app/Blog/index.html'
    })
    .state('next-2',{
        url: '/blog_2',
        templateUrl:'app/Next/index.html'
    })
})
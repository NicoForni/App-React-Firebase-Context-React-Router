const products = [
    {id:1, name:"Blade", price:500, category: "pelicula", img:"https://es.web.img2.acsta.net/medias/nmedia/18/78/58/59/20134443.jpg"},
    {id:2, name:"La momia", price:300, category:"pelicula", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAKRq-CI-5FDbBvMPt9VFYWRTBVNOZ5M-McFl5uV_URjrKf1XcBvIKfVqeRFXzVO16Yo&usqp=CAU"},
    {id:3 , name:"The punisher" , price:400 , category:"pelicula" , img:"https://es.web.img3.acsta.net/pictures/14/03/24/12/51/217527.jpg"},
    {id:4 , name:"Bagger Vance" , price:600 , category:"pelicula" , img:"https://es.web.img3.acsta.net/medias/nmedia/18/86/25/46/20199360.jpg" },
    {id:5 , name:"Lost" , price:550 , category:"serie" , img:"https://posteronline.es/wp-content/uploads/2021/10/SE-0050.jpg"},
    {id:6 , name:"Breaking Bad" , price:450 , category:"serie", img:"https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fseries%2F000%2F002%2F236%2Fbreaking-bad-1.jpg&nuevoancho=690&medio=abc" },
    {id:7 , name:"The boys" , price:520 , category:"serie" , img:"https://as01.epimg.net/meristation/imagenes/2020/08/05/noticias/1596628368_372018_1596628747_sumario_normal.jpg" },
    {id:8 , name:"Free solo" , price:480 , category:"documental" , img:"https://bloximages.newyork1.vip.townnews.com/conwaydailysun.com/content/tncms/assets/v3/editorial/6/38/63866bb8-a1ab-11e9-95ea-afc6285162bc/5d2386b36cdc6.image.jpg?resize=500%2C708"},
    {id:9 , name:"Loki" , price:230 , category:"documental" , img:"https://www.cinemascomics.com/wp-content/uploads/2021/03/kk-1-3.jpg" },
    {id:10 , name:"Gambito de dama" , price:780 , category:"documental" , img:"https://cdn1-production-images-kly.akamaized.net/-ea7UFh8FxG0LsPfSzZl01vjuBA=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3367739/original/073586500_1612368731-The_Queen_s_Gambit.jpg" }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);        
    });
};

export const getItem = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products[0]);
        },2000);
    });
}


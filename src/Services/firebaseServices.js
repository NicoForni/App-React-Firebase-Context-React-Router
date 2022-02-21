const products = [
    {id:1, name:"Blade", price:500, category: "pelicula", description: "En un mundo en guerra, en el que cohabitan hombres y vampiros, el caso de Blade es extraordinario: es un vampiro que no se alimenta de sangre humana y que, además, pretende acabar con la raza de seres superiores que mordieron a su madre cuando estaba embarazada." ,img:"https://es.web.img2.acsta.net/medias/nmedia/18/78/58/59/20134443.jpg"},
    {id:2, name:"La momia", price:300, category:"pelicula", description:"Durante una batalla en Egipto, el legionario Rick O'Connell y un compañero descubren las ruinas de Hamunaptra, la ciudad de los muertos. Algún tiempo después vuelven al mismo lugar con una egiptóloga y su hermano. Allí coinciden con un grupo de estadounidenses, deseosos de correr aventuras, que acabarán provocando la resurrección de la momia de un diabólico sacerdote egipcio que intenta desesperadamente recuperar a su amada.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAKRq-CI-5FDbBvMPt9VFYWRTBVNOZ5M-McFl5uV_URjrKf1XcBvIKfVqeRFXzVO16Yo&usqp=CAU"},
    {id:3 , name:"The punisher" , price:400 , category:"pelicula" , description:"Frank Castle (Thomas Jane), un agente secreto del FBI con un historial intachable, decide un día abandonar una profesión tan peligrosa para poder tener una vida familiar normal. Pero, precisamente entonces, su vida se hace añicos al cumplirse el peor de sus temores: su familia es asesinada como venganza por su último trabajo. Buscando castigar a los asesinos, al final encuentra lo que menos esperaba: la redención.", img:"https://es.web.img3.acsta.net/pictures/14/03/24/12/51/217527.jpg"},
    {id:4 , name:"Bagger Vance" , price:600 , category:"pelicula" , description:"Tras su heroico comportamiento en la Primera Guerra Mundial (1914-1918), Rannulph Junuh (Matt Damon) se hace muy popular. En 1931, lo invitan a enfrentarse a dos famosos jugadores en un torneo de golf, cuyo fin es inaugurar un nuevo campo y atraer la atención del público gracias a su presencia. Pero como Junuh no está al nivel de sus adversarios, decide contratar a un caddie muy especial, Bagger Vance (Will Smith), un misterioso joven negro que parece esconder más de un as en la manga.", img:"https://es.web.img3.acsta.net/medias/nmedia/18/86/25/46/20199360.jpg" },
    {id:5 , name:"Lost" , price:550 , category:"serie" , description:"Historia de un variopinto grupo de supervivientes de un accidente de aviación en una isla del Pacífico aparentemente desierta, una isla en la que suceden cosas muy extrañas. Luchando por la supervivencia, casi medio centenar de personas mostrarán lo mejor y lo peor de sí mismas.", img:"https://posteronline.es/wp-content/uploads/2021/10/SE-0050.jpg"},
    {id:6 , name:"Breaking Bad" , price:450 , category:"serie", description:"Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.", img:"https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fseries%2F000%2F002%2F236%2Fbreaking-bad-1.jpg&nuevoancho=690&medio=abc" },
    {id:7 , name:"The boys" , price:520 , category:"serie" , description:"The Boys está ambientada en un universo en el que los individuos superpoderosos son reconocidos como héroes por el público en general y trabajan para la poderosa corporación Vought International, que los comercializa y monetiza. Fuera de sus personajes heroicos, la mayoría son arrogantes y corruptos. La serie se centra principalmente en dos grupos: los Siete, el principal equipo de superhéroes de Vought International, y The Boys como protagonistas, vigilantes que buscan derribar a Vought y a los superhéroes corruptos.", img:"https://as01.epimg.net/meristation/imagenes/2020/08/05/noticias/1596628368_372018_1596628747_sumario_normal.jpg" },
    {id:8 , name:"Free solo" , price:480 , category:"documental" , description:"Documental que narra la hazaña de Alex Honnold al escalar sin ningún tipo de ayuda la formación rocosa vertical El Capitán, ubicada dentro del Parque Nacional Yosemite (Mariposa County, Estados Unidos), de unos 900 metros de altura. Fue el primer escalador en lograrlo.", img:"https://bloximages.newyork1.vip.townnews.com/conwaydailysun.com/content/tncms/assets/v3/editorial/6/38/63866bb8-a1ab-11e9-95ea-afc6285162bc/5d2386b36cdc6.image.jpg?resize=500%2C708"},
    {id:9 , name:"Loki" , price:230 , category:"serie" , description:"Loki se encuentra con la Agencia de Variación Temporal, una organización burocrática que existe fuera del tiempo y el espacio, obligado a responder por sus crímenes que realizó contra la línea del tiempo y le da una opción: Ser eliminado de la realidad o ayudar a atrapar una amenaza aún mayor.", img:"https://www.cinemascomics.com/wp-content/uploads/2021/03/kk-1-3.jpg" },
    {id:10 , name:"Gambito de dama" , price:780 , category:"documental" , description:"Kentucky, años 60. En plena Guerra Fría, la joven Beth Harmon (Anya Taylor-Joy) es una huérfana con una aptitud prodigiosa para el ajedrez, que lucha contra sus adicciones mientras trata de convertirse en la mejor jugadora del mundo ganando a los grandes maestros, en especial a los rusos.", img:"https://cdn1-production-images-kly.akamaized.net/-ea7UFh8FxG0LsPfSzZl01vjuBA=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3367739/original/073586500_1612368731-The_Queen_s_Gambit.jpg" }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);        
    });
};

export const getItem = (id) => {
    return new Promise ((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod);
        },2000);
    });
}

export const getByCategory = (idCategory) => {
    if (!idCategory) return getProducts();
    return new Promise ((resolve) => {
        const productsFiltered = products.filter(item => item.category === idCategory)
        setTimeout(() => {
            resolve(productsFiltered);
        },2000);
    });
}
# Movies Market ✨

## Información de este proyecto:

Web app que carga un catálogo de productos hecho en [Firebase](https://firebase.google.com/).

![Alt proyecto](2022-03-28-17-38-34_1.gif)

## 

## Hecho con

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)

## 

## Dependencias

[ReactRouter](https://reactrouter.com/docs/en/v6) Utilizo esta librería para crear rutas que rendericen diferentes componentes. Facilita la navegabilidad y le concede un enrutamiento dinámico a la aplicación.

[Firebase](https://firebase.google.com/) Utilizo esta librería para conectar con la base de datos de Firebase.

## 

## Ejecucion local

#####  1.Abrir una nueva terminal y clonar el repositorio con el siguiente comando:

## 

```sh
git clone https://github.com/NicoForni/app-nico.git
```

#####  2.Desde la terminal nos ubicamos en la carpeta raíz del proyecto e instalamos todas las dependencias con el comando:

## 

```sh
npm install
```


#####  3.Por último corremos nuestro proyecto con el comando:

## 

```sh
npm start
```

## Información sobre desarrollo

**- Main ("/"):** Renderiza las imágenes de productos destacados, un container para acceder a las distintas categorías y otro con todos los productos existentes en la base de datos.

**- Category ("/category/:categoryId"):** Renderiza los productos filtrados en base a su categoría.

**- Item ("/detail/:productId"):** Renderiza una card con los detalles del producto seleccionado (nombre, descripción, imágen, stock).

**- Cart ("/cart"):** Renderiza el carrito de compras con los productos agregados por el usuario.

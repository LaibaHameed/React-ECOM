# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


in this app we use:
1. React Router ( npm i react-router-dom)
2. bootstrap ( npm i bootstrap@5.3.2)
3. react Bootstrap ( npm i react-bootstrap bootstrap)
4. react countup ( npm i react-countup)
5. swiperjs ( npm i swiper)
6. popperjs ( npm i @popperjs/core )



<!-- shop -->
const menuItems = [...new Set(Data.map((val)=> val.category))]; ?????

<!-- pagination -->
const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i);
    }


useParamss
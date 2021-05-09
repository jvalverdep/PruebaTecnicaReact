const BrandsService = require('../pages/Brands/Listbrands')
const text ="hola Mundo";
test ('debete tener un text', ()=>{
    expect(text).toMatch(/Mundo/);
})
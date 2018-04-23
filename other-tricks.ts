/* To create a component via CLI */

/* First install CLI, after create the component in terminal with the next line */
ng g c products/product-detail.component --flat 

/* To create a service */
ng g s products/product-guard.service -m app.module

/*
ng: angular CLI
s: service
g: generate
c: component
-m app.module: register service in module (app.module)
products/product-detail.component: component path
--flat: no create folder
*/
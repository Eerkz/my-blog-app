rmdir functions\.nuxt /s /q
mkdir functions\.nuxt
xcopy src\.nuxt\dist\server functions\.nuxt\dist\ /e
del functions\nuxt.config.js
xcopy src\nuxt.config.js functions
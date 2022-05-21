rmdir public /s /q
mkdir public
mkdir public\_nuxt
xcopy src\dist\ public /e
xcopy src\static public /e
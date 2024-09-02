<<<<<<< HEAD
Tutorias
=======
1. Rama Principal (main o master)
Descripción: Esta es la rama principal y siempre debe estar en un estado funcional. Solo se fusionan en esta rama los cambios que han sido revisados y aprobados.
2. Rama de Desarrollo (develop)
Descripción: Esta rama sirve como integración para las nuevas características y correcciones. Todos los desarrolladores deben basar sus ramas de características a partir de esta rama.
3. Ramas de Características (feature/)
Descripción: Estas ramas se crean para desarrollar nuevas características o funcionalidades. Cada característica debe tener su propia rama.

Ejemplo de nombres:
feature/usuario-perfil: Para trabajar en la funcionalidad del perfil de usuario.
feature/filtros-busqueda: Para implementar los filtros de búsqueda.
4. Ramas de Corrección de Errores (bugfix/)
Descripción: Se utilizan para corregir errores que se encuentran en la rama de desarrollo. Una vez que el error está corregido, se fusiona de nuevo en la rama de desarrollo.

Ejemplo de nombres:
bugfix/error-login: Para corregir un error específico en el proceso de inicio de sesión.
5. Ramas de Preparación para Lanzamiento (release/)
Descripción: Estas ramas se utilizan para preparar una nueva versión del software. Aquí se realizan pruebas finales y correcciones menores antes de fusionar los cambios en la rama principal.

Ejemplo de nombres:
release/v1.0.0: Para la versión 1.0.0 del software.
6. Ramas de Hotfix (hotfix/)
Descripción: Se utilizan para corregir errores críticos que necesitan ser solucionados de inmediato en la rama principal. Después de aplicar el hotfix, se fusiona tanto en la rama principal como en la de desarrollo.

Ejemplo de nombres:
hotfix/seguridad-login: Para corregir un problema crítico de seguridad en el login.
>>>>>>> cc6528f0a5e33410ad11caa4a7c308e560300411

ANTES DE TODO DESCARGAR POSTGRESQL INSTALARLO.

ELIMINAR CARPETA MYENV DE LA CARPETA BACKEND

ABRIR LA TERMINAL EN LA CARPETA BACKEND,
  TERMINAL: CD BACKEND

LUEGO

CREAR ENTORNO VIRTUAL

  python -m venv nombre_del_entorno

ACTIVAR ENTORNO VIRTUAL

  .\nombre_del_entorno\Scripts\Activate.ps1

TE TIENE QUE SALIR EN TERMINAL ASI:

  (myenv) C:\ruta\a\tu\proyecto>

LUEGO 

- pip install Django
- pip install djangorestframework
- pip install django-cors-headers
- pip install psycopg2-binary

luego de instalar las dependencias abrir pgAdmin4 que es la base de datos posgresql
conectar en la base de datos, click derecho en postgreSQL 16, crear base de datos colocan el nombre de bd_tutoria y password admin, en todos lados que pidan password en la bd


LUEGO DE ESTO EN LA CARPETA BACKEND->MAIN->SETTING.PY 
CONFIGURAR LA BASE DE DATOS,

CONFIGURAR LA BASE DE DATOS EN SETTINGS.PY BACKEND CON SUS DATOS:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'bd_tutoria',  # Nombre de la base de datos
            'USER': 'posgresql',    # Usuario de la base de datos
            'PASSWORD': 'admin',  # Contraseña del usuario
            'HOST': 'localhost',  # Asegúrate de que el host sea 'localhost'
            'PORT': '5432',       # Puerto de la base de datos
        }
    }

LUEGO PROBAR SI FUNCIONA CON (estando en la terminal con (myenv) C:\ruta\a\tu\proyecto\backend>)
  python manage.py runserver



LUEGO QUE FUNCIONE NOS VAMOS A LA PAGINA FRONTEND Y ABRIMOS UNA TERMINAL, C:\ruta\a\tu\proyecto\FRONTEND
COLOCAMOS 
-  NPM INSTALL
-  NPM START

DEBERIA ESTAR FUNCIONANDO LA PAGINA


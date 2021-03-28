# MENTOR ME
## API

**1) SEED:** `npm run seed`
**2) START:** `npm start`
### ENDPOINTS:
#### USER
RUTA GET: http://localhost:5000/api/user
- enviar en el header el token
- funcion: busca el usuario para ponerlo en perfil (la info del id la saca del token enviado) o si se envia un ID en body, busca el id de ese usuario (si es que quiero renderizar un usuario especifico)

RUTA GET: http://localhost:5000/api/user/userstype ///RUTA EN ARMADO
- enviar en el header el token
- recibe en el body un string indicando si busca mentor o mentee --> se esta armando para que devuelva todos:
  *excluyendose:
- el id del usuario que lo pidio
- el id de los mentees o mentor que ya tiene (por eso necesitamos el token)
  *incluyendose:
  - areas que concurden para el match
  - skills que concuerden para el match.

#### AUTH
- [x] **Login:** POST http://localhost:5000/api/auth/login
    - enviar en body las siguientes key:
      - "email",
      - "password"
  
- [x] **Register:** POST http://localhost:5000/api/auth/register
  /// Ver si en esta instancia se envian las skills o se suma una ruta adicional
  - Enviar en body las siguientes keys:
    - "firstName":
    - "lastName":
    - "password"  
    - "email"

#### TECHNOLOGIES: 
- [x] **Get all:** GET http://localhost:5000/api/techs

#### AREAS:
- [x] **Get all:** GET http://localhost:5000/api/areas

#### LOCATIONS: 
- [x] **Get all:** GET http://localhost:5000/api/locations
*Require admin role:*
- [x] **Create one:** POST http://localhost:5000/api/locations
         - Example body: `{"locationName": "Tucumán"}`
- [x] **Update by ID:** PUT http://localhost:5000/api/locations/:id
         - Example body: `{"locationName": "Tucumán"}`
- [x] **Delete by ID:** DELETE http://localhost:5000/api/locations/:id

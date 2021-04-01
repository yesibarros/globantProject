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
- Body de ejemplo: 
```javascript
{
    "role":["mentor"],
    "location": "605fba8c3ccf24250dd12618",
    "areas": ["605fba8d3ccf24250dd12652","605fba8d3ccf24250dd12650"],
    "technologies": ["605fba8c3ccf24250dd1264a","605fba8c3ccf24250dd12647","605fba8c3ccf24250dd12646"]
}
```
**Nota: los ids pueden cambiar con cada seed. Para asegurarse del correcto funcionamiento de la ruta buscar siempre los ids más actuales.**

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

*Require admin token:*
- [x] **Create one:** POST http://localhost:5000/api/techs
- Example body: `{ technologyName: "PHP" }`
- [x] **Update by ID:** PUT http://localhost:5000/api/techs/:id
- :id = technology id
- Example body: `{"technologyName": "JavaScript"}`
- [x] **Delete by ID:** DELETE http://localhost:5000/api/techs/:id
- :id = technology id

#### AREAS:
- [x] **Get all:** GET http://localhost:5000/api/areas

#### LOCATIONS: 
- [x] **Get all:** GET http://localhost:5000/api/locations

- Gets all locations if no query is sent.
          
- Gets all locations that matches the query if it is sent.
          
- Example with query for country id: `http://localhost:5000/api/locations?country=605f75a3670db3da36907438`
          
*Require admin token:*
- [x] **Create one:** POST http://localhost:5000/api/locations

- Example body: 
    
    ```javascript
       {
       locationName: "Tucumán", 
       phone: "+54 156 1564 4564", 
       address: "Av. Principal 123, Tucumán, Tucumán", 
       country: "605f75a3670db3da36907438"
       }
     ```
- [x] **Update by ID:** PUT http://localhost:5000/api/locations/:id
         - Example body: `{"locationName": "Tucumán"}`
- [x] **Delete by ID:** DELETE http://localhost:5000/api/locations/:id

#### COUNTRIES:
- [x] **Get all:** GET http://localhost:5000/api/countries

*Require admin token:*
- [x] **Create one:** POST http://localhost:5000/api/countries

- Example body: `{ countryName: "Brasil" }`


- [x] **Update by ID:** PUT http://localhost:5000/api/countries/:id

- :id = country id

- Example body: `{"locationName": "Argentina"}`


- [x] **Delete by ID:** DELETE http://localhost:5000/api/countries/:id

- :id = country id

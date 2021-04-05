# MENTOR ME

## API

**1) SEED:** `npm run seed`

**2) START:** `npm start`

### ENDPOINTS:

#### USER
RUTA GET: http://localhost:5000/api/user
- enviar en el header el token
- funcion: busca el usuario para ponerlo en perfil (la info del id la saca del token enviado) o si se envia un ID en body, busca el id de ese usuario (si es que quiero renderizar un usuario especifico)

- [x] **Get matches:** GET: http://localhost:5000/api/user/userstype 
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
*Nota: los ids pueden cambiar con cada seed. Para asegurarse del correcto funcionamiento de la ruta buscar siempre los ids más actuales.*

- [x] **New request:** PUT http://localhost:500/api/users/:id/newRequest
- :id = userId(_id)
- Enviar en el header el token del usuario
- Los datos enviados en el body crean una nueva solicitud (request) enviada a los usuarios especificados según su id en el body
- Ejemplos de bodys válidos para setear una solicitud por parte de un mentee a un mentor:
```javascript
{
  "mentor": "6068e49f179298556a95f9fa"
}

{
  "mentor": {"_id": "6068e49f179298556a95f9fa", "message":"Hola, creo que haríamos un buen match, me gustaría ser tu mentee"}
}
```
- Ejemplos de bodys válidos para setear una solicitud por parte de un mentor a varios mentees:
```javascript
{
    "mentees": ["6068e49f179298556a95f9f7", "6068e49f179298556a95f9d2", "60691b0c3c7b051e9e37ddc0"]
}

{
    "mentees": [{"_id":"6068e49f179298556a95f9f7", "message":"Hola, ¿querés ser mi mentee?"}, {"_id":"6068e49f179298556a95f9d2", message: ""}, "60691b0c3c7b051e9e37ddc0"]
}
```
*Si no se especifica un mensaje el mensaje por defecto es "¡Hola! me gustaría ser tu mentee/mentor"*
*En el caso del mentor, está previsto que pueda enviar una solicitud a varios mentees (sin exceder su cantidad de mentees máxima) para poder disminuir los pedidos al back*
- Devuelve un arreglo de todas las requests con estado pendiente que hizo el usuario

- [ ] **Accept request:** PUT http://localhost:500/api/users/:id/acceptRequest



#### AUTH
- [x] **Login:** POST http://localhost:5000/api/auth/login
- enviar en body las siguientes key:
 - "email",
 - "password"
  
- [x] **Register:** POST http://localhost:5000/api/auth/register
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

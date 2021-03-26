
SEED: npm run seed

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

  
  RUTA POST: http://localhost:5000/api/auth/login
- enviar en body las siguientes key:
  - "email",
  - "password"
  PENDIENTE devolver el usuario (con toda la info? Necesitamos armar una funcion externa para modularizar y que haga el populate, sino se devuelve solo ids.)
  
  RUTA POST: http://localhost:5000/api/auth/register
  /// Ver si en esta instancia se envian las skills o se suma una ruta adicional
- enviar en body las siguientes keys:
  - "firstName":
  - "lastName":
  - "password"  
  - "email"


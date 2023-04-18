class UsersController {
create  (request, response) {
  const {name, email, password} = request.body;

  response.status(201).json({name, email, password});
}
}

module.exports = UsersController;





/*
index - get para listar vários registros
show - get para exibir um registro 
create - post para criar um registro
update - put para atualizar um registro
delete - DELETE para remover um registro
*/
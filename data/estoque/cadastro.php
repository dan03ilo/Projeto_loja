<?php
#Vamos construir os cabeçalhos para o trabalho com a api
header("Access-Control-Allow-Origin:*");
header("COntent-Type: application/json; charset=utf-8");

#se não for adicionado o metodo a ser utilizado ele utilizara o GET por poadrão
header("Access-Control-Allow-Method:POST");
#Define o tempo de espera da api. Neste caso é de 1 minuto.
header("Access-Control-Max-Age:3600");

include_once "../../config/database.php";
include_once "../../domain/estoque.php";

$database = new Database();
$db = $database->getConnection();

$estoque = new Estoque($db);

#O cliente ira enviar os dados no formato json. Porem nos precisamos dos dados no formato php para cadastrar em banco de dados.
#Para realizar essa conversão ie=remos usar o banco json_decode. Assim o cliente vai enviar os daos, estes são lidos pela entrada php: 
#e seu conteudo é capturado e convertido para o formato php.
$data = json_decode(file_get_contents("php://input"));

#verificar se os campos estão com dados.
if(!empty($data->id_produto) && !empty($data->quantidade) && !empty($data->alterado)){
    $estoque->id_produto = $data->id_produto;
    $estoque->quantidade = $data->quantidade;
    $estoque->alterado = $data->alterado;
    
    if($estoque->cadastro()){
        header("HTTP/1.0 201");
        echo json_encode(array("mensagem"=>"Cadastrado!"));
    }
    else{
        header("HTTP/1.0 400");
        echo json_encode(array("mensagem"=>"Erro ao efetuar cadastrado!"));
    }
    
}
else{
    header("HTTP/1.0 400");
    echo json_encode(array("mensagem"=>"Você precisa passar todos os dados para cadastrar"));
}
?>

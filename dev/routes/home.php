<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->get("/", function (Request $rq, Response $response) {
    //$this->flash->addMessage("success", "You succeeded bro !");
    return $this->view->render($response, "home.twig");
});
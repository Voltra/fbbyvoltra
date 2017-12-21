<?php

use App\Helpers\TwigExtensions\CsrfExtension;
use Knlv\Slim\Views\TwigMessages;
use Noodlehaus\Config;
use Slim\App as SlimApp;
use Slim\Container;
use Slim\Views\Twig;
use Slim\Views\TwigExtension;

session_start();

define("INCL_ROOT", dirname(__DIR__));
define("DEV_ROOT", INCL_ROOT."/dev");
define("PUBLIC_ROOT", INCL_ROOT."/public_html");

require_once INCL_ROOT."/vendor/autoload.php";

$configMode = require(DEV_ROOT."/config-mode.php");
$app = new SlimApp([
    "config" => Config::load(DEV_ROOT."/config/{$configMode}.php")
]);

if($app->getContainer()["config"]["debug"])
    $app->getContainer()["settings"]["displayErrorDetails"] = true;

////////////////////////////////////////////////
//Add your middlewares here
////////////////////////////////////////////////

$capsule = require_once("db_init.php");
require_once "filters.php";
require_once "route_autoload.php";

$container = $app->getContainer();
$container["flash"] = function(){
    return new \Slim\Flash\Messages();
};
$container["view"] = function (Container $container) {
    $config = $container["config"];
    $twig_config = $config->get("twig");
    $debug = $config->get("debug");
    $view = new Twig(DEV_ROOT."/views", [
        "cache" => $twig_config["cache"],
        "debug" => $debug
    ]);

    $env = $view->getEnvironment();
    $env->addGlobal("debug", $debug);

    $basePath = rtrim(str_ireplace("index.php", "", $container["request"]->getUri()->getBasePath()), "/");
    $view->addExtension(new TwigExtension($container["router"], $basePath));
    $view->addExtension(new CsrfExtension($view));
    $view->addExtension(new TwigMessages(
        $container->flash
    ));

    $env->setLexer(new Twig_Lexer($env, $twig_config["tags"]));

    return $view;
};

////////////////////////////////////////////////
//Configure your container here
////////////////////////////////////////////////
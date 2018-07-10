$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/specifications/SeleniumBusca.feature");
formatter.feature({
  "line": 1,
  "name": "Selenium Busca",
  "description": "As novo cliente\nQue acessa o site Selenium HQ\nEu desejo realizar uma busca no site",
  "id": "selenium-busca",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Busca com sucesso",
  "description": "",
  "id": "selenium-busca;busca-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "eu acesso o site Selenium HQ",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "preecho as informacoes da Busca",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "realizo acao Procurar",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "eu vejo o resultado da consulta com sucesso",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
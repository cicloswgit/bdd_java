Feature: Selenium Busca
	As novo cliente
	Que acessa o site Selenium HQ
	Eu desejo realizar uma busca no site

Scenario: Busca com sucesso
	Given eu acesso o site Selenium HQ
	When preecho as informacoes da Busca
	And realizo acao Procurar
	Then eu vejo o resultado da consulta com sucesso
	
	
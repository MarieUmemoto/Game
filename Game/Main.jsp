<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DUSTBOX GAME</title>
</head>
<link href = "gage.css" rel = "stylesheet" type = "text/css" >
<% page import="Top.html" %>
<body>
<div class="canvas">
<%if(Top.level()){ %>     <%-- Top.htmlからLevel●の値を受け取りたい--%>
	<%case 1:%>
		<%system.out.println(1);%><img src="haikyo.png">
		<%break;%>
	<%case 2:%>
		<%system.out.println(2);%><img src="rojiura.png">
		<%break;%>
	<%case 3:%>
		<%system.out.println(3);%><img src="juutakugai">
		<%break;%>
<%}%>
<div class="button">
<div id="timer1">
<input type="submit" value="HIGTH" class="START1" onclick="start1()">
<input type="submit" value="STOP" class="STOP1" onclick="stop1()">
</div>

<div id="timer2">
<input type="submit" value="POWER" class="START2" onclick="start2()"><br>
<input type="submit" value="STOP" class="STOP2" onclick="stop2()">
</div>
</div>

<div class="POI">
<input type="submit" value="Let's POI!!" class="POI" onclick="POI()">
</div>
</div>

<a href="Top.html">BACK</a>













<script type="text/javascript" src="./gage.js">
</script>
</body>
</html>
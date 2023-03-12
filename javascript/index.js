function calcularPerdas(){

  var tipoVacina = inp_tipoVacina.value

  var valorVacina = inp_valorVac.value

  var totalVacina = inp_totalVac.value

  // Sem a VacSense
  var perdasVacina = totalVacina * .45 // total de vacinas * 45%


  var prejuizoMes = perdasVacina * valorVacina // vacinas perdidas * valor vacinas

  var prejuizoAno = perdasVacina * 12 // vacinas perdidas * 12 (meses do ano)

  // Com a VacSense

  var vacinasPoupadas = perdasVacina * .70 // vacinas perdidas * 70% (porcentagem provisoria)

  var poupadasMes = valorVacina * vacinasPoupadas; // valor vacinas * vacinas poupadas

  var poupadasAno = poupadasMes * 12; // vacinas poupadas por Mes * 12 (meses do ano))


  resultado.innerHTML = (`

  tipo de vacina - ${tipoVacina}<br>
  total de vacina - ${totalVacina}<br>
  valor da vacina - ${valorVacina}<br><br>
  
  Sem VacSense ❌💉<br>
  vacinas perdidas - ${perdasVacina}<br><br>
  
  prejuízo p/mês - R$${prejuizoMes}<br>
  prejuízo p/ano - R$${prejuizoAno}<br><br>
  
  Com VacSense ✅💉<br>
  vacinas poupadas - ${vacinasPoupadas} <br><br>
  
  economia p/mês - R$${poupadasMes} <br>
  economia p/ano - R$${poupadasAno} <br><br>
  `)
}
function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nfGQNhVAed":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwq_dUnix03-GViLRcCIc_LunCp7h4gLCl7tO316uVi9J1_eCPof_s5dc6Bj6FMW8jS/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


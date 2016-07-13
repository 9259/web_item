window.onload=function(){
	var introductionA=document.getElementById("introduction-a");
	var assessA=document.getElementById("assess-a");
	var introductionDiv=document.getElementById("introduction-div");
	var assessDiv=document.getElementById("assess-div");
	assessA.onclick=function(){
						introductionDiv.className="div-none";
						assessA.className="introduction-active";
						introductionA.className="";
					}
	introductionA.onclick=function(){
						introductionDiv.className="div-block";
						introductionA.className="introduction-active";
						assessA.className="";
					}
}



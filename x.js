		function insertText($inp,$id,$text){
				if(document.getElementById($inp).value!=''){
				    document.getElementById($id).innerText=$text
				}
				else{
					document.getElementById($id).innerText='All Fields Must be Filled'
				}
			}
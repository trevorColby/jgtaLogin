//Get needed elements and store so we only iterate the DOM once
var englishButton = document.getElementById('englishButton');
var mandarinButton = document.getElementById('mandarinButton');
var guestButton = document.getElementById('guestButton');
var adminButton = document.getElementById('adminButton');
var curLang = document.getElementById('curLang');
var curLoginType = document.getElementById('curLoginType');
var curFlag = document.getElementById('curFlag');
var username = document.getElementById('loginUsername');
var password = document.getElementById('loginPassword');
var login = document.getElementById('loginButton');
var background = document.getElementById('backgroundImg');
var body = document.body;
var html = document.documentElement;

//Set our background image in the center of the screen
var centerBackgroundImg = function() {
	var pageWidth = Math.max( body.scrollWidth, 
			       body.offsetWidth, 
			       html.clientWidth, 
			       html.scrollWidth, 
			       html.offsetWidth );
	if(pageWidth < 600) {
		background.src = '../images/mistGolfMobile.jpg';
	}else {
		background.src = '../images/mistGolfThin.jpg';
	}
	var backgroundWidth = background.offsetWidth;
	background.style.marginLeft = ((pageWidth - backgroundWidth)  / 2) + 'px'; 

	var backgroundHeight = background.offsetHeight;
	var pageHeight = Math.max( body.scrollHeight, 
			       body.offsetHeight, 
			       html.clientHeight, 
			       html.scrollHeight, 
			       html.offsetHeight );
	background.style.marginTop = ((pageHeight - backgroundHeight)  / 2) + 'px'; 
}

//On page load center our background image
window.addEventListener('load', centerBackgroundImg);

//On page resize center our background image
window.addEventListener('resize',centerBackgroundImg);

//jsGrid code below
$(function() {

  $("#grid").jsGrid({
    width: "100%",
    height: "calc(95vh - 150px)",
    filtering: true,
    editing: true,
    sorting: true,
    paging: false,
    loadIndication: true,
    loadMessage: "Loading Content...",
    deleteConfirm: "Are you sure you want to permanently delete this golfer from the record?",
    // rowClick: function(args) { alert(args.item) }, 
    data: competitors, //here I just read in my array and populate
    fields: [
      { name: "Name", type: "text", sorting: true},
      { name: "Gender", type: "text", sorting: true, filtering: true},
      { name: "Group", type: "text", sorting: true},
      { name: "R1", type: "text", sorting: false, filtering: false, 
      	editTemplate: function() {
          var $result = jsGrid.fields.control.prototype.itemTemplate.apply(this, arguments);
	      var $myButton = $(`<form>
	      			Hole 1: <input style="width:70%" type="text" title="Edit"><br>
				Hole 2: <input style="width:70%" type="text" title="Edit"><br>
				Hole 3: <input style="width:70%" type="text" title="Edit"><br>
				Hole 4: <input style="width:70%" type="text" title="Edit"><br>
				Hole 5: <input style="width:70%" type="text" title="Edit"><br>
				Hole 6: <input style="width:70%" type="text" title="Edit"><br>
				Hole 7: <input style="width:70%" type="text" title="Edit"><br>
				Hole 8: <input style="width:70%" type="text" title="Edit"><br>
				Hole 9: <input style="width:70%" type="text" title="Edit"><br><br><br>
				Hole 10: <input style="width:65%" type="text" title="Edit"><br>
				Hole 11: <input style="width:65%" type="text" title="Edit"><br>
				Hole 12: <input style="width:65%" type="text" title="Edit"><br>
				Hole 13: <input style="width:65%" type="text" title="Edit"><br>
				Hole 14: <input style="width:65%" type="text" title="Edit"><br>
				Hole 15: <input style="width:65%" type="text" title="Edit"><br>
				Hole 16: <input style="width:65%" type="text" title="Edit"><br>
				Hole 17: <input style="width:65%" type="text" title="Edit"><br>
				Hole 18: <input style="width:65%" type="text" title="Edit"><br>
				</form>
				`);
	          return $result.add($myButton);
		  }
      },
      { name: "R2", type: "text", sorting: false, filtering: false,
      	editTemplate: function() {
          var $result = jsGrid.fields.control.prototype.itemTemplate.apply(this, arguments);
	      var $myButton = $(`<form>
	      			Hole 1: <input style="width:70%" type="text" title="Edit"><br>
				Hole 2: <input style="width:70%" type="text" title="Edit"><br>
				Hole 3: <input style="width:70%" type="text" title="Edit"><br>
				Hole 4: <input style="width:70%" type="text" title="Edit"><br>
				Hole 5: <input style="width:70%" type="text" title="Edit"><br>
				Hole 6: <input style="width:70%" type="text" title="Edit"><br>
				Hole 7: <input style="width:70%" type="text" title="Edit"><br>
				Hole 8: <input style="width:70%" type="text" title="Edit"><br>
				Hole 9: <input style="width:70%" type="text" title="Edit"><br><br><br>
				Hole 10: <input style="width:65%" type="text" title="Edit"><br>
				Hole 11: <input style="width:65%" type="text" title="Edit"><br>
				Hole 12: <input style="width:65%" type="text" title="Edit"><br>
				Hole 13: <input style="width:65%" type="text" title="Edit"><br>
				Hole 14: <input style="width:65%" type="text" title="Edit"><br>
				Hole 15: <input style="width:65%" type="text" title="Edit"><br>
				Hole 16: <input style="width:65%" type="text" title="Edit"><br>
				Hole 17: <input style="width:65%" type="text" title="Edit"><br>
				Hole 18: <input style="width:65%" type="text" title="Edit"><br>
				</form>
				`);
	          return $result.add($myButton);
		  }
      },
      { name: "R3", type: "text", sorting: false, filtering: false,
      	editTemplate: function() {
          var $result = jsGrid.fields.control.prototype.itemTemplate.apply(this, arguments);
	      var $myButton = $(`<form>
	      			Hole 1: <input style="width:70%" type="text" title="Edit"><br>
				Hole 2: <input style="width:70%" type="text" title="Edit"><br>
				Hole 3: <input style="width:70%" type="text" title="Edit"><br>
				Hole 4: <input style="width:70%" type="text" title="Edit"><br>
				Hole 5: <input style="width:70%" type="text" title="Edit"><br>
				Hole 6: <input style="width:70%" type="text" title="Edit"><br>
				Hole 7: <input style="width:70%" type="text" title="Edit"><br>
				Hole 8: <input style="width:70%" type="text" title="Edit"><br>
				Hole 9: <input style="width:70%" type="text" title="Edit"><br><br><br>
				Hole 10: <input style="width:65%" type="text" title="Edit"><br>
				Hole 11: <input style="width:65%" type="text" title="Edit"><br>
				Hole 12: <input style="width:65%" type="text" title="Edit"><br>
				Hole 13: <input style="width:65%" type="text" title="Edit"><br>
				Hole 14: <input style="width:65%" type="text" title="Edit"><br>
				Hole 15: <input style="width:65%" type="text" title="Edit"><br>
				Hole 16: <input style="width:65%" type="text" title="Edit"><br>
				Hole 17: <input style="width:65%" type="text" title="Edit"><br>
				Hole 18: <input style="width:65%" type="text" title="Edit"><br>
				</form>
				`);
	          return $result.add($myButton);
		  }
	},
      {name: "DNF", type: "text", sorting: false, filtering: false},
      // {
      // itemTemplate: function() {
      //     var $result = jsGrid.fields.control.prototype.itemTemplate.apply(this, arguments);
	      // var $myButton = $('<input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit"><input class="jsgrid-button jsgrid-delete-button" type="button" title="Delete">');
	          // return $result.add($myButton);
		  // }
	// },
      { type: "control" }
    ]
  })  
})

var competitors = [
	{
		Name: "Ying Yang",
		Group: "1",
		Gender: "Male",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "1",
		Gender: "Male",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "1",
		Gender: "Male",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "2",
		Gender: "Female",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "2",
		Gender: "Female",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "2",
		Gender: "Female",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "3",
		Gender: "Female",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "3",
		Gender: "Male",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "3",
		Gender: "Male",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "4",
		Gender: "Female",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "4",
		Gender: "Female",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "4",
		Gender: "Female",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "4",
		Gender: "Female",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "4",
		Gender: "Female",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "4",
		Gender: "Female",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "5",
		Gender: "Male",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "5",
		Gender: "Male",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "5",
		Gender: "Male",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
	{
		Name: "Ying Yang",
		Group: "5",
		Gender: "Male",
		R1: "33",
		R2: "33",
		R3: "33",
		DNF: "-"
	},
	{
		Name: "Yao Ming",
		Group: "5",
		Gender: "Male",
		R1: "37",
		R2: "35",
		R3: "31",
		DNF: "-"
	},
	{
		Name: "Leslie Chao",
		Group: "5",
		Gender: "Male",
		R1: "40",
		R2: "30",
		R3: "40",
		DNF: "-"
	},
];


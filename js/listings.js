///<reference path="jquery-vsdoc.js>
function loadListings(listings)
{
	if (listings.phizResponse != null)
	{
		
		var listingsHTMLarray = buildListingsHTML(listings);
		var shortListingsArray = listingsHTMLarray[0];	//An array of short textual listing data
		var longListingsArray = listingsHTMLarray[1];	//An array of full textual listing data
		var listingIndex;								//The current listing we are displaying
		$("#mainContainer").empty();        
        var xCount = Math.floor($(document).width() / 375); 	//How many can be displayed in a horizontal row
		listingIndex = 0;
		for (var i = 0; i < shortListingsArray.length / xCount; i++)
		{
			for (j = 0; j < xCount; j++)
			{
				if (listingIndex < shortListingsArray.length)
				{
				    newListing = "<div id='" + listings.phizResponse[listingIndex].idNum + "' class='listingContainer' style='left:" + ((j * 375) + 10) + "px; top: " + ((i * 175) + 10) + "px; width: 325px; height: 150px;'>" +
                    "<span class='fullText' style='display:none'>" + longListingsArray[listingIndex] + "</span><span class='listingText'>" + shortListingsArray[listingIndex] + "</span>" +
                    "</div>";
				    $("#mainContainer").html($("#mainContainer").html() + newListing);
					listingIndex++;
				}
				else
				{
					break;
				}
			}
        }
        $(".listingContainer").each(function () { $(this).data("topOrigin", this.style.top) });
        $(".listingContainer").each(function () { $(this).data("leftOrigin", this.style.left) });
        $("#mainContainer").find(".listingContainer").hoverIntent({
            over: function ()
            {
                $(this).data("mouseIn", "true");
                var mainDiv = document.getElementById("mainContainer");
                this.style.zIndex = 3;
                var boxTop = "-=75px";
                var boxLeft = "-=100px";
                if ((parseInt(this.style.left) + parseInt(this.style.width) + 100) > parseInt($(document).width()))
                {
                    boxLeft = "-=175px";
                }
                if ((parseInt(this.style.top) + parseInt(this.style.height) + 75) > parseInt($(mainDiv).scrollTop()) + parseInt($(mainDiv).height()))
                {
                    boxTop = "-=150px";
                }
                if ((parseInt(this.style.left) - 100) < 0)
                {
                    boxLeft = "+=0px";
                }
                if ((parseInt(this.style.top) - 75) < parseInt($(mainDiv).scrollTop()))
                {
                    boxTop = "+=0px";
                }
                $(this).animate({ top: boxTop, left: boxLeft, height: 300, width: 500, backgroundColor: "#3A578C" }, { queue: false, duration: 500 });
                $(this).find(".listingText").fadeOut({ queue: true, duration: 250, complete: function () { fadeinFull(this) } });
                $(this).find(".listingText .belowPic").animate({ opacity: 0, queue: true, duration: 250 });
                $(this).find(".listingText .listingInnerText").animate({ opacity: 0, queue: true, duration: 250 });
            },
            out: function ()
            {
                $(this).data("mouseIn", "false");
                this.style.zIndex = 2;
                x = $(this).data("topOrigin");
                y = $(this).data("leftOrigin");
                $(this).animate({ top: x, left: y, height: 150, width: 325, backgroundColor: "#2C426B" }, { queue: false, duration: 500, complete: function () { this.style.zIndex = 1; } });
                $(this).find(".fullText").fadeOut({ queue: true, duration: 250, complete: function () { fadeinShort(this) } });
                $(this).find(".fullText .belowPic").animate({ opacity: 0, queue: true, duration: 250 });
                $(this).find(".fullText .listingInnerText").animate({ opacity: 0, queue: true, duration: 250 });
            },
            timeout: 251
        });
        if (document.getElementById("searchBox").value != "")
        {
            getIndexes();
        }
        loadGroups();
	}
	else
	{
		$("#mainContainer").html("<div class='errorContainer'>No entries matched your search.</div>");
	}
}
function getListings(start, end)
{
	document.getElementById("folder").value
    $("#mainContainer").html("<img src='images/Ajax-loader.gif' style='position:absolute; left: 50%; top: 50%;'>");
	$.ajax
	({
		url: serviceLocation + "getInfoBasic",
		type: "GET",
		data: {"group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value, "startIndex": start, "endIndex": end, "search": document.getElementById("searchBox").value},
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: loadListings,
		error: showError,
		cache: false
	});
}
function getListingsTop()
{
	advanced = false;
	$("#mainContainer").html("<img src='images/Ajax-loader.gif' style='position:absolute; left: 50%; top: 50%;'>");
	$.ajax
	({
		url: serviceLocation + "getInfoTop",
		type: "GET",
		data: {"group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value, "search": document.getElementById("searchBox").value},
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: loadListings,
		error: showError,
		cache: false
	});
}
function getListingsAdv(start, stop)
{
    advanced = true;
	document.getElementById("searchBox").value="";
    $("#mainContainer").html("<img src='images/Ajax-loader.gif' style='position:absolute; left: 50%; top: 50%;'>");
    var gender;
    var dorm;
    var major;

    if (document.getElementById("maleRadio").checked == true)
    {
        gender = "M";
    }
    else if (document.getElementById("femaleRadio").checked == true)
    {
        gender = "F";
    }
    else
    {
        gender = "";
    }

    if (gender == "M")
    {
        dorm = document.getElementById("mensDorms").value;
    }
    else if (gender == "F")
    {
        dorm = document.getElementById("womensDorms").value;
    }
    else
    {
        dorm = document.getElementById("eitherDorms").value;
    }

    if (document.getElementById("folder").value == "undergrad")
    {
        major = document.getElementById("ugMajor").value;
    }
    else if (document.getElementById("folder").value == "grad")
    {
        major = document.getElementById("grMajor").value;
    }
    else if (document.getElementById("folder").value == "mmp")
    {
        major = document.getElementById("mmpMajor").value;
    }
    else
    {
        major = "";
    }

    $.ajax
	({
	    url: serviceLocation + "getInfoAdvanced",
	    type: "GET",
	    data: { "group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value, "startIndex": start, "endIndex": stop,
	        "firstName": document.getElementById("advFirstName").value, "lastName": document.getElementById("advLastName").value, "gender": gender, "year": document.getElementById("yearSelect").value, 
        "dorm": dorm, "floor": document.getElementById("floorSelect").value, "major": major, "sport": document.getElementById("sportsSelect").value},
	    processData: true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: loadListings,
	    error: showError,
	    cache: false
	});
}

function getListingsAdvTop()
{
    advanced = true;
	document.getElementById("searchBox").value="";
    $("#mainContainer").html("<img src='images/Ajax-loader.gif' style='position:absolute; left: 50%; top: 50%;'>");
    var gender;
    var dorm;
    var major;

    if (document.getElementById("maleRadio").checked == true)
    {
        gender = "M";
    }
    else if (document.getElementById("femaleRadio").checked == true)
    {
        gender = "F";
    }
    else
    {
        gender = "";
    }

    if (gender == "M")
    {
        dorm = document.getElementById("mensDorms").value;
    }
    else if (gender == "F")
    {
        dorm = document.getElementById("womensDorms").value;
    }
    else
    {
        dorm = document.getElementById("eitherDorms").value;
    }

    if (document.getElementById("folder").value == "undergrad")
    {
        major = document.getElementById("ugMajor").value;
    }
    else if (document.getElementById("folder").value == "grad")
    {
        major = document.getElementById("grMajor").value;
    }
    else if (document.getElementById("folder").value == "mmp")
    {
        major = document.getElementById("mmpMajor").value;
    }
    else
    {
        major = "";
    }

    $.ajax
	({
	    url: serviceLocation + "getInfoAdvancedTop",
	    type: "GET",
	    data: { "group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value,
	        "firstName": document.getElementById("advFirstName").value, "lastName": document.getElementById("advLastName").value, "gender": gender, "year": document.getElementById("yearSelect").value,
	        "dorm": dorm, "floor": document.getElementById("floorSelect").value, "major": major, "sport": document.getElementById("sportsSelect").value
	    },
	    processData: true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: loadListings,
	    error: showError,
	    cache: false
	});
}

function buildListingsHTML(listings)
{
    var shortArray = new Array();
    var longArray = new Array();
	for (var i = 0; i < listings.phizResponse.length; i++)
	{
		entry = listings.phizResponse[i];
		shortArray[i] = "<div class='belowPic'><img class='listingImage' width='88px' height='110px' src='"+entry.pictureURL+"' onerror='this.src=\"images/nopic.png\"' /></div>";
		shortArray[i] += "<b><span class='listingName'>" + entry.firstName + " " + entry.middleInit + " " + entry.lastName + "</span></b><br />";
		//Shortened listings
		if (entry.title != null)
		{       //Employees
		    shortArray[i] += entry.title + "<br />";
		    if (entry.extension != "")
		    {
		        if (entry.extension != "")
		        {
		            shortArray[i] += "Ext: " + entry.extension + "<br />";
		        }
		        else
		        {
		            "<br /><br />";
		        }
		    }
		    shortArray[i] += entry.email;
		}
		else
		{       //Students
			if (entry.residentStatus != "")
			{
				shortArray[i] += entry.residentStatus + "<br /><br />";
			}
		    if (entry.cellNumber != "" && entry.cellNumber != 0)
		    {
		        if (entry.cellNumber.length == 10)
		        {
		            shortArray[i] += "Cell Phone: " + entry.cellNumber.substring(0, 3) + "-" + entry.cellNumber.substring(3, 6) + "-" + entry.cellNumber.substring(6, 10) + "<br /><br />";
		        }
		        else
		        {
		            shortArray[i] += "Cell Phone: " + entry.cellNumber + "<br /><br />";
		        }
		    }
			if (entry.email != "")
			{
				shortArray[i] += entry.email + "@malone.edu";
			}
		}
    }
    //Full listings
	for (var i = 0; i < listings.phizResponse.length; i++)
	{
        if (listings.phizResponse[i].title != null)
        {       //Employees
            entry = listings.phizResponse[i];
            var preferred = "";
            if (entry.preferredName != "" && entry.preferredName != entry.firstName)
            {
                preferred = "(" + entry.preferredName + ") ";
            }
            longArray[i] = "<div class = 'belowPic'><img class='listingImage' width='175px' height='219px' src='" + entry.pictureURL + "' onerror='this.src=\"images/nopic.png\"' /><br />";
            longArray[i] += "<a href='javascript:void(0)' onclick='createPDFsingle($(this).closest(\".listingContainer, .accordionItem\").attr(\"id\"))'>Create PDF</a></div>";
			longArray[i] += "<span class='listingName'><b>" + entry.firstName + " " + preferred + entry.middleInit + " " + entry.lastName + "</b></span><br />";
            longArray[i] += "<div class='listingInnerText' style='float:left; width: 55%;'>";
	        longArray[i] += entry.title + "<br />";
	        //longArray[i] += entry.department + "<br />";
	        if (entry.extension != "")
	        {
	            longArray[i] += "Ext: " + entry.extension + "<br />";
	        }
			if (entry.building != "")
			{
				longArray[i] += "Building: " + entry.building + "<br />";
			}
	        if (entry.email != "")
	        {
	            longArray[i] += "Email: <a href='mailto:" + entry.email + "'>" + entry.email + "</a><br /><br />";
	        }
			if (entry.phoneNumber != "")
			{
				if (entry.phoneNumber.length == 10)
	            {
	                longArray[i] += "Home Phone: " + entry.phoneNumber.substring(0, 3) + "-" + entry.phoneNumber.substring(3, 6) + "-" + entry.phoneNumber.substring(6, 10) + "<br />";
	            }
	            else
	            {
	                longArray[i] += "Phone: " + entry.phoneNumber + "<br />";
	            }
			}
			if (entry.address != "")
			{
				if (entry.address != "FERPA Privacy")
				{
					longArray[i] += "Address:<br />" + entry.address;
				}
				else
				{
					longArray[i] += entry.address;
				}
			}
			
	        longArray[i] += "</div>";
	    }
	    else
	    {       //Sudents
	        entry = listings.phizResponse[i];
	        var preferred = "";
	        if (entry.preferredName != "" && entry.preferredName != entry.firstName)
	        {
	            preferred = "(" + entry.preferredName + ") ";
	        }
	        longArray[i] = "<div class = 'belowPic' ><img class='listingImage' width='175px' height='219px' src=" + entry.pictureURL + " onerror='this.src=\"images/nopic.png\"' /><br />";
			longArray[i] += "<a href='javascript:void(0)' onclick='createPDFsingle($(this).closest(\".listingContainer, .accordionItem\").attr(\"id\"))'>Create PDF</a></div>";
	        longArray[i] += "<span class='listingName'><b>" + entry.firstName + " " + preferred + entry.middleInit + " " + entry.lastName + "</b></span><br />";
	        longArray[i] += "<div class='listingInnerText' style='float:left; width: 55%;'>";
	        longArray[i] += entry.residentStatus + "<br />";
	        if (entry.dorm != "" && entry.dorm != "Pattie's Place" && entry.dorm != "Holding")
	        {
	            longArray[i] += "Dorm: " + entry.dorm + " " + entry.room + "<br />";
	        }
	        if (entry.cellNumber != "" && entry.cellNumber != 0)
	        {
	            if (entry.cellNumber.length == 10)
	            {
	                longArray[i] += "Cell Phone: " + entry.cellNumber.substring(0, 3) + "-" + entry.cellNumber.substring(3, 6) + "-" + entry.cellNumber.substring(6, 10) + "<br />";
	            }
	            else
	            {
	                longArray[i] += "Cell Phone: " + entry.cellNumber + "<br />";
	            }
	        }
			if (entry.phoneNumber != "" && entry.phoneNumber != 0 && entry.phoneNumber != entry.cellNumber)
	        {
	            if (entry.phoneNumber.length == 10)
	            {
	                longArray[i] += "Home Phone: " + entry.phoneNumber.substring(0, 3) + "-" + entry.phoneNumber.substring(3, 6) + "-" + entry.phoneNumber.substring(6, 10) + "<br />";
	            }
	            else
	            {
	                longArray[i] += "Home Phone: " + entry.phoneNumber + "<br />";
	            }
	        }
	        if (entry.email != "")
	        {
	            longArray[i] += "Email: <a href='mailto:" + entry.email + "@malone.edu'>" + entry.email + "@malone.edu</a><br />";
	        }
			if (entry.mailboxNumber != "")
	        {
	            longArray[i] += "Mailbox: " + entry.mailboxNumber + "<br />";
	        }
	        longArray[i] += "<hr noshade='noshade' />";
	        if (entry.year)
	        {
	            longArray[i] += "Year: " + entry.year + "<br />";
	        }
	        if (entry.major)
	        {
	            longArray[i] += "Major: " + entry.major + "<br />";
	        }
	        if (entry.birthdate)
	        {
	            longArray[i] += "Birthdate: " + entry.birthdate + "<br />";
	        }
			if (entry.address != "")
			{
				if (entry.address != "FERPA Privacy")
				{
					longArray[i] += "<hr noshade='noshade' />" +
					"Address:<br />" +
					entry.address;
				}
				else
				{
					longArray[i] += entry.address;
				}
			}
			longArray[i] += "</div>";
	    }
	}
	
	var outArray = new Array();
	outArray[0] = shortArray
	outArray[1] = longArray;
	return outArray;
}

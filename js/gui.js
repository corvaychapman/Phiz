///<reference path="jquery-vsdoc.js>
function fadeinFull(element)
{
	if ($(element).parent().data("mouseIn")=="true")
	{
	    $(element).parent().find(".fullText").fadeIn({ queue: true, duration: 250 });
	    $(element).parent().find(".fullText .belowPic").animate({ opacity: 1, queue: true, duration: 250 });
	    $(element).parent().find(".fullText .listingInnerText").animate({ opacity: 1, queue: true, duration: 250 });
	}
	else
	{
		fadeinShort(element);
	}
}

function fadeinShort(element)
{
    $(element).parent().find(".listingText").fadeIn({ queue: true, duration: 250 });
    $(element).parent().find(".listingText .belowPic").animate({ opacity: 1, queue: true, duration: 250 });
    $(element).parent().find(".listingText .listingInnerText").animate({ opacity: 1, queue: true, duration: 250 });
}

function resizeWindow()
{
    var width = $(document).width();
    var height = $(document).height();
    //parent.PhizResizeIframe(width, height);

    if ($(document).width() > 400)
    {
        document.getElementById("mainContainer").style.height = ($(document).height() - 150 + "px");
        document.getElementById("footer").style.top =  ($(document).height() - 50) + "px";
        var listingArr = $(".listingContainer");
        var xCount = Math.floor($(document).width() / 375); 	//How many can be displayed in a horizontal row
        var displayCount = listingArr.length;
        var listingIndex = 0;
        for (var i = 0; i < displayCount / xCount; i++)
        {
            for (j = 0; j < xCount; j++)
            {
                if (listingIndex < displayCount)
                {
                    var thisListing = listingArr[listingIndex];
                    thisListing.style.left = ((j * 375) + 10) + "px";
                    thisListing.style.top = ((i * 175) + 10) + "px"
                    $(thisListing).data("topOrigin", thisListing.style.top);
                    $(thisListing).data("leftOrigin", thisListing.style.left);
                    listingIndex++;
                }
                else
                {
                    break;
                }
            }
        }
    }
}

function getIndexes()
{
    $(".indexSpan").each(function () { $(this).empty(); });
    $.ajax
	({
	    url: serviceLocation + "getIndexNames",
	    type: "GET",
	    data: { "group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value, "search": document.getElementById("searchBox").value },
	    processData: true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function (response)
	    {
	        if (response.phizResponse != null)
	        {
	            $("#numFooter").empty();
	            if (document.getElementById("searchBox").value != "" && document.getElementById("searchBox").value != null)
	            {
	                $("#alphaFooter").hide();
	                var outStr = "";
	                var j = 0;
	                for (var i = 0; i < response.phizResponse.length; i += 2)
	                {
	                    if (document.getElementById("sortBy").value == "ln")
	                    {
	                        if (response.phizResponse.length > 1)
	                        {
	                            startName = response.phizResponse[i].lastName;
	                            endName = response.phizResponse[i + 1].lastName;
	                            startShort = response.phizResponse[i].lastNameShort;
	                            endShort = response.phizResponse[i + 1].lastNameShort;
	                        }
	                        else
	                        {
	                            startName = response.phizResponse[i].lastName;
	                            endName = response.phizResponse[i].lastName;
	                            startShort = response.phizResponse[i].lastNameShort;
	                            endShort = response.phizResponse[i].lastNameShort;
	                        }
	                    }
	                    else
	                    {
	                        if (response.phizResponse.length > 1)
	                        {
	                            startName = response.phizResponse[i].firstName;
	                            endName = response.phizResponse[i + 1].firstName;
	                            startShort = response.phizResponse[i].firstNameShort;
	                            endShort = response.phizResponse[i + 1].firstNameShort;
	                        }
	                        else
	                        {
	                            startName = response.phizResponse[i].firstName;
	                            endName = response.phizResponse[i].firstName;
	                            startShort = response.phizResponse[i].firstNameShort;
	                            endShort = response.phizResponse[i].firstNameShort;
	                        }
	                    }
	                    if (document.getElementById("sortBy").value == "ln")
	                    {
	                        outStr = "<a href='#' onclick='getListings(\"" + (startName) + "\",\"" + (endName) + "\")'>" + ++j + "</a> ";
	                    }
	                    else
	                    {
	                        outStr = "<a href='#' onclick='getListings(\"" + (startName) + "\",\"" + (endName) + "\")'>" + ++j + "</a> ";
	                    }
	                    $("#numFooter").html($("#numFooter").html() + outStr);
	                }
	            }
	            else
	            {
	                $("#alphaFooter").show();
	                var outStr = "";
	                for (var i = 0; i < response.phizResponse.length; i += 2)
	                {
	                    var startName;
	                    var endName;
	                    var startShort;
	                    var endShort;
	                    if (document.getElementById("sortBy").value == "ln")
	                    {
	                        if (response.phizResponse.length > 1)
	                        {
	                            startName = response.phizResponse[i].lastName;
	                            endName = response.phizResponse[i + 1].lastName;
	                            startShort = response.phizResponse[i].lastNameShort;
	                            endShort = response.phizResponse[i + 1].lastNameShort;
	                        }
	                        else
	                        {
	                            startName = response.phizResponse[i].lastName;
	                            endName = response.phizResponse[i].lastName;
	                            startShort = response.phizResponse[i].lastNameShort;
	                            endShort = response.phizResponse[i].lastNameShort;
	                        }
	                    }
	                    else
	                    {
	                        if (response.phizResponse.length > 1)
	                        {
	                            startName = response.phizResponse[i].firstName;
	                            endName = response.phizResponse[i + 1].firstName;
	                            startShort = response.phizResponse[i].firstNameShort;
	                            endShort = response.phizResponse[i + 1].firstNameShort;
	                        }
                            else
                            {
                                startName = response.phizResponse[i].firstName;
                                endName = response.phizResponse[i].firstName;
                                startShort = response.phizResponse[i].firstNameShort;
                                endShort = response.phizResponse[i].firstNameShort;
                            }
	                    }
	                    if (document.getElementById("order").value == "ascending")
	                    {
	                        outStr = "<a href='#' onclick='getListings(\"" + (startName) + "\",\"" + (endName) + "\")'>" + startShort + "-" + endShort + "</a> ";
	                    }
	                    else
	                    {
	                        outStr = "<a href='#' onclick='getListings(\"" + (endName) + "\",\"" + (startName) + "\")'>" + startShort + "-" + endShort + "</a> ";
	                    }

	                    if (startShort.substring(0, 1) != endShort.substring(0, 1))
	                    {

	                        var j = 0;
	                        do
	                        {
	                            if (document.getElementById("order").value == "ascending")
	                            {
	                                j++;
	                            }
	                            else
	                            {
	                                j--;
	                            }
	                            $("#"+String.fromCharCode(startShort.toLowerCase().charCodeAt(0) + j) + "Span").html(($("#"+String.fromCharCode(startShort.toLowerCase().charCodeAt(0) + j) + "Span").html())+outStr);
	                        }
	                        while (String.fromCharCode(startShort.toLowerCase().charCodeAt(0) + j) != endShort.toLowerCase().substring(0, 1).toLowerCase() && startShort.toLowerCase().charCodeAt(0) + (j + 1) < 123 && startShort.toLowerCase().charCodeAt(0) + (j + 1) > 97)
	                    }
	                    $("#"+startShort.substring(0, 1).toLowerCase() + "Span").html($("#"+startShort.substring(0, 1).toLowerCase() + "Span").html()+outStr);
	                }
	            }
	        }
	    },
	    error: showError,
	    cache: false
	});
}
function getIndexesAdvanced()
{
    $(".indexSpan").each(function () { $(this).empty(); });
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
	    url: serviceLocation + "getIndexNamesAdvanced",
	    type: "GET",
	    data: { "group": document.getElementById("folder").value, "sortBy": document.getElementById("sortBy").value, "order": document.getElementById("order").value, 
	        "firstName": document.getElementById("advFirstName").value, "lastName": document.getElementById("advLastName").value, "gender": gender, "year": document.getElementById("yearSelect").value,
	        "dorm": dorm, "floor": document.getElementById("floorSelect").value, "major": major, "sport": document.getElementById("sportsSelect").value },
	    processData: true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function (response)
	    {
	        if (response.phizResponse != null)
	        {
	            $("#numFooter").empty();
	            $("#alphaFooter").hide();
	            var outStr = "";
	            var j = 0;
	            for (var i = 0; i < response.phizResponse.length; i += 2)
	            {
	                if (document.getElementById("sortBy").value == "ln")
	                {
	                    if (response.phizResponse.length > 1)
	                    {
	                        startName = response.phizResponse[i].lastName;
	                        endName = response.phizResponse[i + 1].lastName;
	                        startShort = response.phizResponse[i].lastNameShort;
	                        endShort = response.phizResponse[i + 1].lastNameShort;
	                    }
	                    else
	                    {
	                        startName = response.phizResponse[i].lastName;
	                        endName = response.phizResponse[i].lastName;
	                        startShort = response.phizResponse[i].lastNameShort;
	                        endShort = response.phizResponse[i].lastNameShort;
	                    }
	                }
	                else
	                {
	                    if (response.phizResponse.length > 1)
	                    {
	                        startName = response.phizResponse[i].firstName;
	                        endName = response.phizResponse[i + 1].firstName;
	                        startShort = response.phizResponse[i].firstNameShort;
	                        endShort = response.phizResponse[i + 1].firstNameShort;
	                    }
	                    else
	                    {
	                        startName = response.phizResponse[i].firstName;
	                        endName = response.phizResponse[i].firstName;
	                        startShort = response.phizResponse[i].firstNameShort;
	                        endShort = response.phizResponse[i].firstNameShort;
	                    }
	                }
	                if (document.getElementById("sortBy").value == "ln")
	                {
	                    outStr = "<a href='#' onclick='getListingsAdv(\"" + (startName) + "\",\"" + (endName) + "\")'>" + ++j + "</a> ";
	                }
	                else
	                {
	                    outStr = "<a href='#' onclick='getListingsAdv(\"" + (startName) + "\",\"" + (endName) + "\")'>" + ++j + "</a> ";
	                }
	                $("#numFooter").html($("#numFooter").html()+outStr);
	            }
	        }
	    },
	    error: showError,
	    cache: false
	});
}
function changeOrder()
{
    var childArr = $.makeArray($("#indexLetters").find(".indexLetter")).reverse();
    var outStr = "";
    for (var i = 0; i < childArr.length; i++)
    {
        outStr += childArr[i].outerHTML;
    }
    $("#indexLetters").html(outStr);
    if (!advanced)
    {
        getListingsTop();
        getIndexes();
    }
    else
    {
        getListingsAdvTop();
        getIndexesAdvanced();
    }
    $(".indexLetter").mouseup(
		function ()
		{
		    $(".indexSpan").hide();
		    $("#" + this.id.substring(0, 1) + "Span").show();
		})
}
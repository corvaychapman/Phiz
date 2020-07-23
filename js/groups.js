///<reference path="jquery-vsdoc.js>
function loadGroups()
{
	$("#groupsSelectList").remove();
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "getGroupList",
		data: { "secureKey": secureKey },
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(response){
			groupsSelector = "<div class='groupsList'><div class='initial'>Add to group...</div>";
			groupsSelector+="<div class='options' style='display:none'>";
			
			groupsSelectList = "<select id='groupsSelectList' onchange='loadGroupSorter(\"sequence\")' onclick='g_lastClickedName = $(\"#groupsSelectList :selected\").text(); g_lastClickedId = $(\"#groupsSelectList\").val();'><option></option>"
			if (response.phizResponse != null)
			{
				for(var i = 0; i < response.phizResponse.length; i++)
				{
					groupsSelector+="<div class='groupItem' onclick='addToGroup(this,"+response.phizResponse[i].folderID+")'>"+response.phizResponse[i].folderName+"</div>";
					groupsSelectList += "<option value="+response.phizResponse[i].folderID+">"+response.phizResponse[i].folderName+"</option>";
				}
			}
			groupsSelector+="<div class='groupItem' id=-1 onclick='createGroup(this)'>New group...</div>";
			groupsSelector+="</div></div>";
			

			$(".groupsList").remove();
			$(".fullText > .belowPic").each(function () { $(this).html($(this).html() + groupsSelector) });
			$(".groupsList").mouseup(
				function()
				{
					$(this).find(".initial").hide(100);
					$(this).find(".options").show(100);
				}
			)
			$(".groupsList").mouseleave(
				function()
				{
					$(this).find(".initial").show(100);
					$(this).find(".options").hide(100);
				}
			)
			$(".groupItem").hover(
				function()
				{
					this.style.backgroundColor = "#CCC";
				},
				function()
				{
					this.style.backgroundColor = "#FFF";
				}
			)
			$.ajax
			({
				type: "GET",
				url: serviceLocation + "getSharedGroupList",
				data: { "secureKey": secureKey },
				processData: true,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(response){
					if (response.phizResponse != null)
					{
						for(var i = 0; i < response.phizResponse.length; i++)
						{
							groupsSelectList += "<option value="+response.phizResponse[i].folderID+" style='color: #747474;'><i>Shared:</i>"+response.phizResponse[i].folderName+"</option>";
						}
					}
					else
					{
					}
					$.ajax
					({
						type: "GET",
						url: serviceLocation + "getClassGroupList",
						data: { "secureKey": secureKey },
						processData: true,
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						success: function(response){
							if (response.phizResponse != null)
							{
								for(var i = 0; i < response.phizResponse.length; i++)
								{
									groupsSelectList += "<option value="+response.phizResponse[i].folderID+" style='color: #747474;'><i>Class:</i>"+response.phizResponse[i].folderName+"</option>";
								}
							}
							else
							{
							}
							$.ajax
							({
								type: "GET",
								url: serviceLocation + "getDormGroupList",
								data: { "secureKey": secureKey },
								processData: true,
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								success: function(response){
									if (response.phizResponse != null)
									{
										for(var i = 0; i < response.phizResponse.length; i++)
										{
											groupsSelectList += "<option value="+response.phizResponse[i].folderID+" style='color: #747474;'><i>Dorm:</i>"+response.phizResponse[i].folderName+"</option>";
										}		
									}
									else
									{
									}
									//console.log(groupsSelectList);
									groupsSelectList += "</select>";
									$("#groupDialog").html(groupsSelectList+$("#groupDialog").html());
								},
								error: showError,
								cache: false
							});
							//groupsSelectList += "</select>";
							//console.log(groupsSelectList);
							//$("#groupDialog").html(groupsSelectList+$("#groupDialog").html());
						},
						error: showError,
						cache: false
					});

					
				},
				error: showError,
				cache: false
			});
		},
		error: showError,
		cache: false
	});
	
	
}
function createGroup(element)
{
	var groupName=prompt("Please enter a name for your new group.");
	if (groupName.length < 25)
	{
		if (groupName!=null && groupName!="")
		{
		    $.ajax
			({
			    type: "GET",
			    url: serviceLocation + "createGroup",
			    data: { "groupName": groupName, "secureKey": secureKey },
			    processData: true,
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
			    success: function (response)
			    {
			        if (response.phizResponse > 0)
			        {
			            alert(groupName + " created successfully.");
			            if (element != null)
						{
							addToGroup(element, response.phizResponse);
						}
			            loadGroups();
			        }
			        else
			        {
			            if (response.phizResponse == -1)
						{
							alert("Invalid group name.");
							createGroup();
						}
						else
							alert("An error has occurred. Please try again later.");
			        }
			    },
			    error: showError,
			    cache: false
			});
		}
	}
	else
	{
		alert("The group names must be less than 25 characters in length.");
		createGroup();
	}
}
function addToGroup(element, folderID)
{
	idNum = $(element).closest(".listingContainer").attr("id");
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "addToGroup",
		data: { "id": idNum, "folderID": folderID, "group": document.getElementById("folder").value, "secureKey": secureKey },
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(response){alert(response.phizResponse)},
		error: showError,
		cache: false
	});
}
function loadGroupSorter(sortby_loc, skipSave)
{
	g_sortBy = sortby_loc;	//g_sortBy = Global variable used in displayGroup function
	if (groupChanged && !skipSave && $("#groupsSelectList :selected").text().substring(0,7)!="Shared:" && $("#groupsSelectList :selected").text().substring(0,6)!="Class:" && confirm("Would you like to save the changes to your group?")) 
	{
		updateGroup(g_lastClickedName, g_lastClickedId);
	}
	if (!skipSave)
	{
		groupChanged = false;
	}
	
	if ($("#groupsSelectList").val() != "")
	{		
		if ($("#groupsSelectList :selected").text().substring(0,7)!="Shared:" && $("#groupsSelectList :selected").text().substring(0,6)!="Class:" && $("#groupsSelectList :selected").text().substring(0,6)!="Class:")
		{
			$("#groupDialog").find("input").show();
			$("#createGroupButton").hide();
			$("#sortOptions").show();
		}
		else
		{
			$("#groupDialog").find("#hide > input").hide();
			$("#createGroupButton").hide();
			$("#pdfButton").show();
			$("#emailButton").show();
			$("#sortOptions").show();
			$("#groupSortButton").show();
		}
		if ($("#groupsSelectList :selected").text().substring(0,6)!="Class:")
		{
			if ($("#groupsSelectList :selected").text().substring(0,5)==="Dorm:")
			{
				$.ajax
				({
					type: "GET",
					url: serviceLocation + "getDormGroup",
					data: { "dormID": $("#groupsSelectList").val(), "rfp": false, "secureKey": secureKey },
					processData: true,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: displayGroup,
					error: showError,
					cache: false
				});
			}
			else 
			{
				$.ajax
				({
					type: "GET",
					url: serviceLocation + "getGroup",
					data: { "folderID": $("#groupsSelectList").val(), "secureKey": secureKey },
					processData: true,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: displayGroup,
					error: showError,
					cache: false
				});
			}	
		}	
		else
		{
			$.ajax
			({
				type: "GET",
				url: serviceLocation + "getClassGroup",
				data: { "courseID": $("#groupsSelectList").val(), "rfp": false, "secureKey": secureKey },
				processData: true,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: displayGroup,
				error: showError,
				cache: false
			});
		}
		
	}
	else
	{
		$("#groupDialog").find("input").hide();
		$("#createGroupButton").show();
		$("#groupAccordion").empty();
		$("#sortOptions").hide();
	}
}

function displayGroup (response)
{
	if (response.phizResponse)
	{
		if (response.phizResponse.length > 0)
		{
			if (g_sortBy == "ln")
			{
				response.phizResponse.sort(function(a,b){
					if (a.lastName > b.lastName)
						return 1;
					else
						return -1;
				});
			}
			if (g_sortBy == "fn")
			{
				response.phizResponse.sort(function(a,b){
					if (a.firstName > b.firstName)
						return 1;
					else
						return -1;
				});
			}
			if (g_sortBy != "sequence" && document.getElementById("groupOrder").value == "descending")
			{
				response.phizResponse.reverse();
			}
			$(".ui-accordion").accordion("destroy");
			$("#groupAccordion").empty();
			listingHTML = buildListingsHTML(response)[1];
			for(var i = 0; i < response.phizResponse.length; i++)
			{
				thisResponse = response.phizResponse[i];
				if (thisResponse.address = "FERPA Privacy")
				{
					hilightStyle = "style='#F00'";
				}
				else
				{
					hilightStyle = "";
				}
				$("#groupAccordion").html( $("#groupAccordion").html() + "<div class='accordionItem' id="+thisResponse.idNum+"><h3 class='accordionHead'><a href='#'>"+thisResponse.firstName+" "+thisResponse.middleInit+" "+thisResponse.lastName+"</a></h3><div class='accordionBody'>"+listingHTML[i]+"</div></div>");
			}
			$("#groupAccordion > .accordionItem > .accordionBody > .belowPic").html(function(index, oldHTML){return oldHTML + "<br /><input class='removeButton' type=button value='Remove' onClick='removeAccordion(this);' />"});
			$("#groupAccordion").find(".groupsList").remove();
			$("#groupAccordion").accordion({
				header: "> div > h3", 
				collapsible: true, 
				active: false, 
				heightStyle:"content"
			}).sortable({
				axis: "y", 
				handle: "h3", 
				update: function(){groupChanged = true;}
			});
			$(".accordionBody:contains('FERPA Privacy')").each(function(index, Element){
				$(Element).css("background", "#C51230");
				$(Element).css("color", "#FFF");
				$(Element).find("a").remove();
			});
			if ($("#groupsSelectList :selected").text().substring(0,7)=="Shared:" || $("#groupsSelectList :selected").text().substring(0,6)=="Class:")
			{
				$(".removeButton").remove();
			}
		}
		else
		{
			$("#groupAccordion").html("This group is empty.");
		}
	}
	else
	{
		$("#groupAccordion").html("An error has occurred. Please try again later.");
	}
}

function sortGroup()
{
	groupChanged = true;
	loadGroupSorter(document.getElementById("groupSortBy").value, true);
}

function updateGroup(groupName, groupId)
{
	if ($("#groupsSelectList :selected").text().substring(0,7) != "Shared:" && $("#groupsSelectList :selected").text().substring(0,6) != "Class:" && $("#groupsSelectList :selected").text() != "")
	{
		outstr = "";
		$(".accordionItem").each(function(i){outstr += this.id+='|';});
		$.ajax
		({
			type: "GET",
			data: { "folderName": groupName, "saveArr": outstr, "delArr": $("#delete").html(), "folderID": groupId, "secureKey": secureKey },
			url: serviceLocation + "updateGroup",
			processData: true,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(response){
				alert(response.phizResponse);
				groupChanged = false; 
			},
			error: showError,
			cache: false
		});
	}
}
function updateGroupName()
{
	var groupName=prompt("Please enter a new name for your group.");
	if (groupName.length < 25)
	{
		if (groupName!=null && groupName!="")
		{
			outstr = "";
			$(".accordionItem").each(function(i){outstr += this.id+='|';});
			$.ajax
			({
				type: "GET",
				url: serviceLocation + "updateGroup",
				data: { "folderName": groupName, "saveArr": outstr, "delArr": $("#delete").html(), "folderID": $("#groupsSelectList").val(), "secureKey": secureKey },
				processData: true,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(response){alert(response.phizResponse); loadGroups(); resetGroupDialog();},
				error: showError,
				cache: false
			});
		}
	}
	else
	{
		alert("The group names must be less than 25 characters in length.");
		updateGroupName();
	}
}
function removeGroup()
{
	if (confirm("Are you sure you wish to delete the group "+$("#groupsSelectList :selected").text()+"?"))
	{
	    $.ajax
			({
			    type: "GET",
			    url: serviceLocation + "removeGroup",
			    data: { "folderID": $("#groupsSelectList").val(), "secureKey": secureKey },
			    processData: true,
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
			    success: function (response) { alert(response.phizResponse); resetGroupDialog(); loadGroups(); },
			    error: showError,
			    cache: false
			});
	}
}
function removeAccordion(element)
{
	$("#groupAccordion").accordion("activate", false);
	accordion = $(element).parents('.accordionItem');
	$("#delete").html($("#delete").html() + accordion.prop("id") + "|");
	groupChanged = true;
	accordion.remove();
}
function resetGroupDialog()
{
	$('#groupDialog').find('input').hide();
	$("#createGroupButton").show();
	$('#groupAccordion').empty(); 
	$('#delete').empty();
	$('#sortOptions').hide();
	groupChanged = false;
}
function loadShares(folderID)
{
	$("#sharedList").empty();
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "getShared",
		data: {"folderID": folderID},
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(response)
		{
			if (response.phizResponse != null)
			{
				for(var i = 0; i < response.phizResponse.length; i++)
				{
					$("#sharedList").html( $("#sharedList").html() + response.phizResponse[i].firstName + " " + response.phizResponse[i].middleInit + " " + response.phizResponse[i].lastName + 
						" <input type='button' value='Unshare' onClick='unshareFolder("+folderID+","+response.phizResponse[i].IDnum+")'><br />");
				}
			}
			else
			{
				$("#sharedList").html("No one");
			}
		},
		error: showError,
		cache: false
	});
}
function shareFolder(folderID, sharedID)
{
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "share",
		data: { "folderID": folderID, "sharedID": sharedID, "secureKey": secureKey },
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(response)
		{
			alert(response.phizResponse);
			loadShares(folderID);
		},
		error: showError,
		cache: false
	});
}
function unshareFolder(folderID, sharedID)
{
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "unshare",
		data: { "folderID": folderID, "sharedID": sharedID, "secureKey": secureKey },
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(response)
		{
			alert(response.phizResponse);
			loadShares(folderID);
		},
		error: showError,
		cache: false
	});
}
function autocompleteSearch(input, response)
{
	$.ajax
	({
		type: "GET",
		url: serviceLocation + "searchNames",
		data: {"partialName": document.getElementById("shareAutocomplete").value},
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(resp)
		{
			if (resp.phizResponse != null)
			{
				for (var i = 0; i < resp.phizResponse.length; i++)
				{
					var thisResponse = resp.phizResponse[i];
					response($.map(resp.phizResponse, function(thisResponse){return {label: thisResponse.firstName + " " + thisResponse.lastName, value: thisResponse.IDnum}}));
				}
			}
			else
			{
				response(null);
			}
		},
		error: showError,
		cache: false
	});
}
function getGroupPDF()
{
    $("#groupDialog").dialog("close");
    $("#mainContainer").html("<img src='images/Ajax-loader.gif' style='position:absolute; left: 50%; top: 50%;'>");
	var IDParamName = "folderID";
	var serviceMethod;
	if( $("#groupsSelectList :selected").text().substring(0,6)=="Class:")
	{
		serviceMethod = "getClassGroupPDF";
	}
	else if( $("#groupsSelectList :selected").text().substring(0,5)=="Dorm:") 
	{
		serviceMethod = "getDormGroupPDF";
		IDParamName = "dormID";
	}
	else
	{
		serviceMethod = "getGroupPDF";
	}
	
	var ajaxDataObj = { 
				"showPhoto":($("#PDFpicCheck").attr("checked") == "checked"), "showRes":($("#PDFresCheck").attr("checked") == "checked") , "showPhone":($("#PDFphoneCheck").attr("checked") == "checked"),
				"showCell":($("#PDFcellCheck").attr("checked") == "checked"),"showDorm":($("#PDFdormCheck").attr("checked") == "checked") ,"showExtension":($("#PDFextensionCheck").attr("checked") == "checked"),
				"showEmail":($("#PDFemailCheck").attr("checked") == "checked") ,"showBox":($("#PDFboxCheck").attr("checked") == "checked") ,"showDob":($("#PDFdobCheck").attr("checked") == "checked"),
				"showYear":($("#PDFyearCheck").attr("checked") == "checked"),"showMajor":($("#PDFmajorCheck").attr("checked") == "checked") ,"showAddress":($("#PDFaddressCheck").attr("checked") == "checked"),
				"showFSphoto":($("#PDFphotoCheckFS").attr("checked") == "checked"),"showFStitle":($("#PDFtitleCheckFS").attr("checked") == "checked"),
				"showFSextension":($("#PDFextensionCheckFS").attr("checked") == "checked"), "showFSbuilding":($("#PDFbuildingCheckFS").attr("checked") == "checked"),
				"showFSemail":($("#PDFemailCheckFS").attr("checked") == "checked"),	"showFSphone":($("#PDFphoneCheckFS").attr("checked") == "checked"),	
				"showFSaddress":($("#PDFaddressCheckFS").attr("checked") == "checked"),
			"secureKey": secureKey
	};
	//console.log(IDParamName);
	ajaxDataObj[IDParamName] = $("#groupsSelectList").val();
	
	$.ajax
	({
	    url: serviceLocation + serviceMethod,
		type: "GET",
		data: ajaxDataObj,
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (response) {
			if (response.phizResponse != "")
			{
				$("#pdfDialog").html("<a href='phizPDF/" + response.phizResponse + "' target='_blank' style='text-align:center'>Click here to view your PDF</a>");
				$("#pdfDialog").dialog("open");
			}
			else
			{
				alert("An error has occurred. Please try again later.");
			}
			getListingsTop(); 
			$("#PDFaddressCheck").removeAttr("disabled");			
			$("#PDFphoneCheck").removeAttr("disabled");
			$("#PDFcellCheck").removeAttr("disabled");
		},
		error: showError,
		cache: false
	});
}

function emailGroup()
{
	var serviceMethod;
	if( $("#groupsSelectList :selected").text().substring(0,6)=="Class:")
	{
		serviceMethod = "emailClassGroup";
	}
	else
	{
		serviceMethod = "emailGroup";
	}
	dataStr = JSON.stringify({ "folderID": $("#groupsSelectList").val(), "messageText": document.getElementById("emailBody").value, "subject": document.getElementById("emailSubject").value, "secureKey": secureKey});
	dataStr = escapeSpecialChars(dataStr);
	$.ajax
	({
		url: serviceLocation + serviceMethod,
		type: "POST",
		data: dataStr,
		processData: true,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (response) {
			if (response.phizResponse != "")
			{
				alert(response.phizResponse);
			}
			else
			{
				alert("An error has occurred. Please try again later.");
			}
		},
		error: showError,
		cache: false
	});
}
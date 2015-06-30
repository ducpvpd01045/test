function hienThi() {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'getSinhViens',
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData, {
		onSuccess : loadhienThi,
		onFailure : loadSQLQueeryFailure
	});
}

function loadhienThi(result) {
	WL.Logger.debug("Retrieve success" + JSON.stringify(result));
	displayFeeds(result.invocationResult.resultSet);
}
function displayFeeds(items) {
	for (var i = 0; i < items.length; i++) {
		$("#hienthi").append(
				"<li><a href='' onclick='ht("+items[i].id+")'>" + items[i].tensv + "</a></li>");
	}

}
function loadSQLQueeryFailure(result) {
	WL.Logger.error("Retrieve failure");
}
// ----------------------------------------------------------------------------
function updateSinhViens(a, i, k, l, b) {

	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'updateSinhVien',
		parameters : [ a, i, k, l, b ]
	};
	WL.Client.invokeProcedure(invocationData, {
		onSuccess : updatesv,
		onFailure : WL.Logger.error("unsuccessful")
	});
	alert('succeed');

}
function updatesv() {
	WL.Logger.debug("Retrieve success" + JSON.stringify(result));

}
// ----------------------------------------------------------------------------
function checkLogin(a, b) {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'proCheckLogin',
		parameters : [ a, b ]
	};
	WL.Client.invokeProcedure(invocationData, {
		onSuccess : loadSQLQueerySuccess,
		onFailure : loadSQLQueeryFailure
	});
}

function loadSQLQueerySuccess(result) {
	WL.Logger.debug("Retrieve success" + JSON.stringify(result));
	if (result.invocationResult.resultSet.length == 1) {
		window.location = href = "#bar";
	} else {
		alert('better luck next time!!!');
	}
}

function loadSQLQueeryFailure(result) {
	WL.Logger.error("unsuccessful");
}
// ------------------------------------------------------------------------------
function addSinh(a, b, i, k, l) {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'addSinhVien',
		parameters : [ a, b, i, k, l ]
	};
	WL.Client.invokeProcedure(invocationData, {
		onSuccess : addOk,
		onFailure : WL.Logger.error("unsuccessful")
	});
}
function addOk() {
	alert('succeed');
	location.reload(true);
}
// -------------------------------------------------------------------------
function xoaSinh(a) {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'deleteSinhVien',
		parameters : [ a ]
	};
	WL.Client.invokeProcedure(invocationData, {
		onSuccess : deleteOk,
		onFailure : WL.Logger.error("unsuccessful")
	});
}
function deleteOk() {
	alert('succeed');
	location.reload(true);
}
// ----------------------------------------
function checkLogin(a, b) {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'proCheckLogin',
		parameters : [ a, b ]
	};
	WL.Client.invokeProcedure(invocationData, {
		onSuccess : loadSQLQueerySuccess,
		onFailure : loadSQLQueeryFailure
	});
}

function loadSQLQueerySuccess(result) {
	WL.Logger.debug("Retrieve success" + JSON.stringify(result));
	// alert('Login thanh cong!!!'+result.invocationResult.resultSet.length);
	if (result.invocationResult.resultSet.length == 1) {
		window.location = href = "#bar";
	} else {

	}
}

function loadSQLQueeryFailure(result) {
	WL.Logger.error("unsuccessful");
}
// ----------------------------------------
//ttttttttttttttt
function ht(id) {
	var invocationData = {
		adapter : 'SinhVien',
		procedure : 'hts',
		parameters : [id]
	};

	WL.Client.invokeProcedure(invocationData, {
		onSuccess : loadht,
		onFailure : loadSQLQueeryFailure
	});
}

function loadht(result) {
	WL.Logger.debug("Retrieve success" + JSON.stringify(result));
	displayht(result.invocationResult.resultSet);
}
function displayht(items) { 
	window.location="index.html#chitiet";
		$("#view").append(
				"<p> "+"Name Student: " + items[0].tensv + "</p",
				"<p>"+"Email Student: " + items[0].email + "</p",
				"<p>"+"User Student: " + items[0].user + "</p",
				"<p>"+"Pass Student: " + items[0].pass + "</p");

}
function loadSQLQueeryFailure(result) {
	WL.Logger.error("Retrieve failure");
}
function load(){
	location.reload();
	window.location="index.html#bar";
}
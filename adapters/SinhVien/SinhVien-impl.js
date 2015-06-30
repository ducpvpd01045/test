/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */
 
var sSQLLogin = WL.Server.createSQLStatement("select * from sinhvien where user = ? and pass = ?");
function proCheckLogin(user, pass) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : sSQLLogin,
		parameters : [user, pass]
	});
}


/*******************************************************************************
 * Implementation code for procedure - 'procedure2'
 * 
 * 
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}


/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */

var selectStatement = WL.Server.createSQLStatement("select * from  sinhvien");

function getSinhViens() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}
var ht = WL.Server.createSQLStatement("select * from  sinhvien where id=?");

function hts(id) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : ht,
		parameters : [id]
	});
}

var addStatement = WL.Server.createSQLStatement("INSERT INTO `sinhvien`(`id`, `tensv`, `email`, `user`, `pass`) VALUES (?,?,?,?,?)");

function addSinhVien(id, tensv, email, user, pass) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [id, tensv, email, user, pass]
	});
}
	
var updateStatement = WL.Server.createSQLStatement("UPDATE sinhvien SET tensv=?,email=?,user=?,pass=? WHERE  id = ?");

function updateSinhVien(tensv, email, user, pass,id) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [tensv, email, user, pass,id]
	});
}

var deleteStatement = WL.Server.createSQLStatement("DELETE FROM `sinhvien` WHERE id = ? ");

function deleteSinhVien(id, user) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [id, user]
	});
}
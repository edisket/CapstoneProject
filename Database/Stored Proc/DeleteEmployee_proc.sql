CREATE DEFINER=`newuser`@`%` PROCEDURE `DeleteEmployee`(id int)
BEGIN

	DECLARE exit handler for sqlexception
		BEGIN
			SHOW ERRORS;
			ROLLBACK;
        END;
        
        START TRANSACTION;
			DELETE FROM emp_pos_tbl WHERE emp_id = id;
            DELETE FROM employee_img WHERE emp_id = id;
            DELETE FROM employee_info WHERE id = id;
        COMMIT;
END
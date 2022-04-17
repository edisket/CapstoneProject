CREATE DEFINER=`newuser`@`%` PROCEDURE `RegisterNewEmployee`(
IN first_name varchar(255),
IN last_name varchar(255),
IN position_id INT,
IN img BLOB
)
BEGIN

	DECLARE exit handler for sqlexception
		BEGIN
			ROLLBACK;
        END;
        
    START TRANSACTION;
    
		INSERT INTO employee_info (first_name, last_name) VALUES (first_name, last_name);
		SET @empId = @@identity;
        INSERT INTO emp_pos_tbl(emp_id, pos_id) VALUES(@empId, position_id);
        
        INSERT INTO employee_img (emp_id, img) VALUES(@empId, img);
    COMMIT;
	
END
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `newuser`@`%` 
    SQL SECURITY DEFINER
VIEW `view_employee_list` AS
    SELECT 
        `a`.`id` AS `id`,
        `a`.`first_name` AS `first_name`,
        `a`.`last_name` AS `last_name`,
        `c`.`position_name` AS `position_name`
    FROM
        ((`employee_info` `a`
        LEFT JOIN `emp_pos_tbl` `b` ON ((`b`.`emp_id` = `a`.`id`)))
        LEFT JOIN `position_tbl` `c` ON ((`c`.`id` = `b`.`pos_id`)))
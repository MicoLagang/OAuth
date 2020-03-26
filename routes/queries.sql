CREATE OR REPLACE FUNCTION "lagang_hr".getAllEmployees()
RETURNS TABLE (
		employee_id integer,
		first_name character varying(20),
		last_name character varying(25),
		email character varying(25),
		phone_number character varying(20),
        hire_date date,
		job_id character varying(10),
		salary numeric(8,2),
		commission_pct numeric(2,2),
		manager_id integer,
		department_id integer
	)
AS $BODY$
BEGIN
	RETURN QUERY
		SELECT *
		FROM "lagang_hr".employees;
END;
$BODY$
LANGUAGE 'plpgsql';




CREATE OR REPLACE FUNCTION "lagang_hr".getAllDepartments()
RETURNS TABLE (
		department_id integer,
		department_name character varying(30),
		manager_id integer,
		location_id integer
	)
AS $BODY$
BEGIN
	RETURN QUERY
		SELECT *
		FROM "lagang_hr".departments;
END;
$BODY$
LANGUAGE 'plpgsql';




CREATE OR REPLACE FUNCTION "lagang_hr".getEmpDept()
RETURNS TABLE (
		first_name character varying(20),
		last_name character varying(25),
		department_id integer,
		department_name character varying(30)
	)
AS $BODY$
BEGIN
	RETURN QUERY
		select employees.first_name, employees.last_name, employees.department_id, departments.department_name
		from "lagang_hr".employees
		left join "lagang_hr".departments on departments.department_id = employees.department_id;
END;
$BODY$
LANGUAGE 'plpgsql';





CREATE OR REPLACE FUNCTION "lagang_hr".getSalary()
RETURNS TABLE (
		first_name character varying(20),
		last_name character varying(25)
	)
AS $BODY$
BEGIN
	RETURN QUERY
		select employees.first_name, employees.last_name
		from "lagang_hr".employees
		where employees.salary > (
			select employees.salary
			from "lagang_hr".employees
			where employees.employee_id = 135
		);
END;
$BODY$
LANGUAGE 'plpgsql';
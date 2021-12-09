USE hr;
SELECT ROUND(MAX(SALARY),2) AS 'Maior salário',
ROUND(MIN(SALARY),2) AS 'Menor salário',
ROUND(AVG(SALARY),2) AS 'Salário médio',
ROUND(SUM(SALARY),2) AS 'Soma de todos os salários' FROM employees;
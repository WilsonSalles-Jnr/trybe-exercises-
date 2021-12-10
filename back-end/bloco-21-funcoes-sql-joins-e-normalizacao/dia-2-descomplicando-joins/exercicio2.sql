USE Pixar;
SELECT Mov.title, Box.domestic_sales, Box.international_sales FROM Movies AS Mov
INNER JOIN BoxOffice AS Box
ON Mov.id = Box.movie_id
WHERE domestic_sales < international_sales;
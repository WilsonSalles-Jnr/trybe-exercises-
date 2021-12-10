USE Pixar;
SELECT Mov.title, Box.rating FROM Movies AS Mov
INNER JOIN BoxOffice AS Box
ON Mov.id = Box.movie_id
WHERE rating > 8;
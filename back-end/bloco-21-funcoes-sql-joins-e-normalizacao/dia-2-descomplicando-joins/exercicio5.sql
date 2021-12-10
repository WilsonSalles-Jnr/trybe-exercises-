USE Pixar;
SELECT Mov.title, Tht.name, Tht.location FROM  Movies AS Mov
LEFT JOIN Theater AS Tht
ON Mov.theater_id = Tht.id
ORDER BY name;
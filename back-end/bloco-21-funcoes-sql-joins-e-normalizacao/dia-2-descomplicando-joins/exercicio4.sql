USE Pixar;
SELECT Mov.title, Tht.name, Tht.location FROM Theater AS Tht
LEFT JOIN Movies AS Mov
ON Mov.theater_id = Tht.id
ORDER BY name;
SELECT country, disease, priority AS 'recomended for' FROM countrys
INNER JOIN recomendations ON countrys.id = country_id
INNER JOIN diseases ON diseases.id = disease_id
-- WHERE country = 'albania'
ORDER BY country, priority;


SELECT CONCAT(fname, ' ', lname) AS 'name', disease, vaxdate AS 'last vaccinated', lifetime, booster AS 'booster due' FROM persons
INNER JOIN protections ON persons.id = person_id
INNER JOIN diseases ON diseases.id = disease_id
WHERE vaccinated = 1;


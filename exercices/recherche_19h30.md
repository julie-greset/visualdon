**Script pour les premiers titres des épisodes les plus vus.** **Dans le Terminal :**

ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson | head -10 | ndjson-map "{ firstTitle: d.segments[0].title}"

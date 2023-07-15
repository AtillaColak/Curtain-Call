api_key = "your_tmdb_api"
# pip install tmdbv3api 
from tmdbv3api import TMDb
from tmdbv3api import Movie
tmdb = TMDb()
tmdb.language = 'en'
tmdb.api_key = api_key

movie = Movie()
movies_array = []

for page in range(1, 26):
    movies = movie.popular(page=page)
    for p in movies:
        print(p.id)
        movies_array.append(p.title) 

print(len(movies_array))
print(movies_array)
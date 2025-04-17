"use client";
import { useFavorites } from "../context/FavoritesContext";
import TripCard from "../_components/TripCard";

function FavoritesPage() {
  const { favoriteTrips, loading } = useFavorites();


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Favorite Trips</h1>

      {loading ? (
        <p>Loading...</p>
      ) : favoriteTrips.length === 0 ? (
        <div className="flex justify-center items-center text-secondry text-3xl mt-[10%]">
        <p>No favorite trips yet.</p>
          </div>
      ) : (
        <div className="mt-5 flex justify-start items-center overflow-x-auto 
    overflow-y-hidden">
          {favoriteTrips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;

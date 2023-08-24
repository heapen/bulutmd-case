// Sorting function by oldest release year
export const sortByOldest = (data) => {
    return [...data].sort((Context1, Context2) => Context1.releaseYear - Context2.releaseYear); // Yıla göre sıralama eskiden yeniye doğru
  };
  
  // Sorting function by newest release year
  export const sortByNewest = (data) => {
    return [...data].sort((Context1, Context2) => Context1.releaseYear - Context2.releaseYear); // Yıla göre sıralama yeniden eskiye doğru
  };
  
  // Random sorting function
  export const sortByRandom = (data) => {
    return [...data].sort(() => Math.random() - 0.5); // Rastgele sıralama
  };
  
import { Card, CardContent, Typography, Button } from "@mui/material";

function Reviews() {
  const MovieList = [
    {
      name: "Interstellar",
      rating: "8.6",
      date: "2014",
      imgPath:
        "https://admin.itsnicethat.com/images/3CzWUmmXvOtHmdH0J1VNY-f9riA=/254910/format-webp%7Cwidth-1440/4._Oppenheimer.jpg",
    },
    {
      name: "Dune",
      rating: "8.0",
      date: "2021",
      imgPath:
        "https://admin.itsnicethat.com/images/3CzWUmmXvOtHmdH0J1VNY-f9riA=/254910/format-webp%7Cwidth-1440/4._Oppenheimer.jpg",
    },
    {
      name: "Inception",
      rating: "8.8",
      date: "2010",
      imgPath:
        "https://admin.itsnicethat.com/images/3CzWUmmXvOtHmdH0J1VNY-f9riA=/254910/format-webp%7Cwidth-1440/4._Oppenheimer.jpg",
    },
    {
      name: "Oppenheimer",
      rating: "8.4",
      date: "2023",
      imgPath:
        "https://admin.itsnicethat.com/images/3CzWUmmXvOtHmdH0J1VNY-f9riA=/254910/format-webp%7Cwidth-1440/4._Oppenheimer.jpg",
    },
    {
      name: "Oppenheimer",
      rating: "8.4",
      date: "2023",
      imgPath:
        "https://admin.itsnicethat.com/images/3CzWUmmXvOtHmdH0J1VNY-f9riA=/254910/format-webp%7Cwidth-1440/4._Oppenheimer.jpg",
    },
  ];

  return (
    <section className="px-10 mt-8">
      <h2 className="text-3xl font-medium mb-4">Popular</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {MovieList.map((movie, index) => (
          <Card key={index} elevation={2} className="rounded-3xl">
            <CardContent className="flex flex-col gap-2 p-3">
              <img
                src={movie.imgPath}
                alt={movie.name}
                className="w-full aspect-3/4 object-cover rounded-lg"
              />

              <Typography variant="subtitle2" noWrap>
                {movie.name}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                ⭐ {movie.rating}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Reviews
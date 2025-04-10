import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // ^^동기함수를 비동기 함수로 병렬로 fetch하는 방법
  return (
    <div>
      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

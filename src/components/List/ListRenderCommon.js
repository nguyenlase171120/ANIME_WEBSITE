import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pagination_slice } from "../../redux/Phimmoi_redux/Pagination_slice";
import ListFilms from "../ListFilm/ListFilms";
import Pagination_movie from "../Pagination/Pagination_movie";
import { ListRender } from "../Pagination/Render_Pagination";
import Search_film from "../Search/Search_film";

function ListRenderCommon(props) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    const list_movie = await ListRender(
      props.value.typeNameRender,
      props.value.numberType
    );
    dispatch(
      pagination_slice.actions.handleListPaging({
        name: list_movie.name,
        list_anime: list_movie.list_anime,
      })
    );
    setIsLoading(true);
  }, []);
  return (
    <div className="mt-[76px] element_center flex-col w-[80%] pt-[30px]">
      <Search_film />
      {isLoading ? (
        <ListFilms />
      ) : (
        <h1 className="text-white font-bold ">Loading...</h1>
      )}
      <div>
        <Pagination_movie nameHeader={props.value.typeName} />
      </div>
    </div>
  );
}

export default ListRenderCommon;

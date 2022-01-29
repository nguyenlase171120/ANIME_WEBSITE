import ListRenderCommon from "../../../components/List/ListRenderCommon";

function Phimle() {
  const common = {
    typeNameRender: "Phim lẻ cập nhật",
    numberType: 1,
    typeName: "phim-le",
  };
  return <ListRenderCommon value={common} />;
}

export default Phimle;

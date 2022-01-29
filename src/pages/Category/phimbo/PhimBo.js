import ListRenderCommon from "../../../components/List/ListRenderCommon";

function PhimBo() {
  const common = {
    typeNameRender: "Phim bộ cập nhật",
    numberType: 10,
    typeName: "phim-bo",
  };
  return <ListRenderCommon value={common} />;
}

export default PhimBo;

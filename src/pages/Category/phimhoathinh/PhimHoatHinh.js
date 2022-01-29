import ListRenderCommon from "../../../components/List/ListRenderCommon";

function PhimHoatHinh() {
  const common = {
    typeNameRender: "Phim hoạt hình cập nhật",
    numberType: 20,
    typeName: "phim-hoat-hinh",
  };
  return <ListRenderCommon value={common} />;
}

export default PhimHoatHinh;

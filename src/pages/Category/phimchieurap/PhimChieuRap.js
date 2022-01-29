import ListRenderCommon from "../../../components/List/ListRenderCommon";

function PhimChieuRap() {
  const common = {
    typeNameRender: "Phim chiếu rạp cập nhật",
    numberType: 30,
    typeName: "phim-chieu-rap",
  };
  return <ListRenderCommon value={common} />;
}

export default PhimChieuRap;

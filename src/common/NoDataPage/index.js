import {useSelector} from "react-redux";
import {StyledHeader, Wrapper} from "./styled";
import {
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
} from "../../features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import {selectRegionAndProvincesMapsSelectedMap} from "../../features/maps/mapsSlice";

function NoDataPage() {
  const teritorialUnitSubGroupName = useSelector(
    selectTeritorialUnitSubGroupName,
  );
  const teritorialUnitSubGroupData = useSelector(
    selectTeritorialUnitSubGroupData,
  );
  const provinceName = useSelector(selectRegionAndProvincesMapsSelectedMap);

  const categoryName = teritorialUnitSubGroupData.results.find(
    element => element.id === teritorialUnitSubGroupName,
  ).name;

  return (
    <Wrapper>
      <StyledHeader>
        {`Niestety nie ma danych "${categoryName}" dla ${provinceName[0]}`}
      </StyledHeader>
    </Wrapper>
  );
}
export default NoDataPage;
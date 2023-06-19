import {useSelector} from 'react-redux'
import {
  selectManyVariablesCategoryData,
  selectManyVariablesCategoryName,
  selectManyVariablesGroupData,
  selectManyVariablesGroupName,
  selectManyVariablesStatus,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesData,
  selectManyVariablesVariablesName,
  setManyVariablesCategoryName,
  setManyVariablesGroupName,
  setManyVariablesSubGroupName,
  setManyVariablesVariablesNames,
} from '../manyVariablesSlice'
import {
  SelectBoxManyVariables,
  SelectBoxOneVariable,
} from '../../../common/Select/select'
import LoadingPage from '../../../common/LoadingPage'
import {
  StyledBox,
  StyledCheck as StyledCheckBox,
  StyledLabel,
  StyledLabelBox,
  StyledLabelText,
  StyledMultiSelectBox,
  StyledMultiSelectLabelBox,
  StyledSelectBox,
  StyledManyVariables,
} from './styled'
import {ReactComponent as Check} from '../../../common/images/check.svg'
import {ReactComponent as NoCheck} from '../../../common/images/noCheck.svg'
import {AutoScrollSwitcher} from '../displayingResults/Switchers/AutoScrollSwitcher'

function ManyVariables() {
  const manyVariables = useSelector(selectManyVariablesCategoryData)
  const manyVariablesGroup = useSelector(selectManyVariablesGroupData)
  const manyVariablesSubGroup = useSelector(selectManyVariablesSubGroupData)
  const manyVariablesVariables = useSelector(selectManyVariablesVariablesData)

  const manyVariablesCategoryName = useSelector(selectManyVariablesCategoryName)
  const manyVariablesGroupName = useSelector(selectManyVariablesGroupName)
  const manyVariablesSubGroupName = useSelector(selectManyVariablesSubGroupName)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )

  const manyVariablesStatus = useSelector(selectManyVariablesStatus)
  console.log('manyVariablesStatus', manyVariablesStatus)
  return (
    <StyledManyVariables>
      {manyVariables ? (
        <div>
          <StyledLabelBox>
            <StyledLabel>Wybierz kategorię: </StyledLabel>
            <StyledSelectBox>
              <SelectBoxOneVariable
                dataType={manyVariables}
                setValue={setManyVariablesCategoryName}
              />
              <StyledCheckBox>
                {manyVariablesCategoryName ? <Check /> : <NoCheck />}
              </StyledCheckBox>
            </StyledSelectBox>
          </StyledLabelBox>
        </div>
      ) : (
        <LoadingPage title="Pobieram listę kategorii" />
      )}
      {manyVariablesCategoryName !== '' ? (
        <div>
          {manyVariablesGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz grupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectBoxOneVariable
                    dataType={manyVariablesGroup}
                    setValue={setManyVariablesGroupName}
                  />
                  <StyledCheckBox>
                    {manyVariablesGroupName ? <Check /> : <NoCheck />}
                  </StyledCheckBox>
                </StyledSelectBox>
              </StyledLabelBox>
            </div>
          ) : (
            <LoadingPage title="Pobieram listę grup" />
          )}
        </div>
      ) : (
        ''
      )}

      {manyVariablesGroupName !== '' ? (
        <div>
          {manyVariablesSubGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz podgrupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectBoxOneVariable
                    dataType={manyVariablesSubGroup}
                    setValue={setManyVariablesSubGroupName}
                  />
                  <StyledCheckBox>
                    {manyVariablesSubGroupName ? <Check /> : <NoCheck />}
                  </StyledCheckBox>
                </StyledSelectBox>
              </StyledLabelBox>
            </div>
          ) : (
            <LoadingPage title="Pobieram listę podgrup" />
          )}
        </div>
      ) : (
        ''
      )}

      <StyledBox>
        {manyVariablesSubGroupName !== '' ? (
          <div>
            {manyVariablesVariables ? (
              <div>
                <StyledMultiSelectLabelBox>
                  <StyledLabel>
                    Wybierz zmienne: <StyledLabelText>max 10</StyledLabelText>
                  </StyledLabel>
                  <StyledMultiSelectBox>
                    <SelectBoxManyVariables
                      dataType={manyVariablesVariables}
                      setValue={setManyVariablesVariablesNames}
                    />

                    <StyledCheckBox>
                      {manyVariablesVariablesName ? <Check /> : <NoCheck />}
                    </StyledCheckBox>
                  </StyledMultiSelectBox>
                  <AutoScrollSwitcher />
                </StyledMultiSelectLabelBox>
              </div>
            ) : (
              <LoadingPage title="Pobieram listę zmiennych" />
            )}
          </div>
        ) : (
          ''
        )}
      </StyledBox>
    </StyledManyVariables>
  )
}
export default ManyVariables

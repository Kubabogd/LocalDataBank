import styled from 'styled-components'

export const StyledTablePage = styled.div`
  display: block;
  margin: auto;
  background-color: white;
  padding: 4%;
  max-width: 100%;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 20px;
  overflow: auto;

  //aspect-ratio: 2/1;
  /* @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
		aspect-ratio: 2/1;
	}

	@media ((max-width: ${({theme}) => theme.breakpoint.xl})) {
		aspect-ratio: 1.6/1;
	}

	@media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
		aspect-ratio: 1.4/1;
	}

	@media ((max-width: ${({theme}) => theme.breakpoint.md})) {
		aspect-ratio: 1/1;
	}

	@media ((max-width: ${({theme}) => theme.breakpoint.sm})) {
		aspect-ratio: 1/1.5;
	} */
`

export const StyledTrThead = styled.tr`
  max-width: 100%;
  cursor: pointer;
`
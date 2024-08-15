import styled from "styled-components"

export const FavoriteContainer = styled.div`
  width: 100%;
`

export const FavoriteTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 50px;
`

export const ItemCard = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 270px;
`

export const ItemImage = styled.img`
  width: 270px;
  height: 300px;
  background: linear-gradient(
    to right,
    rgb(190, 190, 190),
    rgb(210, 210, 210),
    rgb(190, 190, 190)
  );
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin: 0px;
`

export const ItemTitle = styled.h5`
  margin: 3px 0;
`

export const ItemPrice = styled.h6`
  margin: 3px 0;
`

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`

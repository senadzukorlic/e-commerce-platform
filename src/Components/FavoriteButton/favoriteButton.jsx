// import React, { useState, useEffect } from "react"
// import { styled } from "@mui/material/styles"
// import { IconButton } from "@mui/material"

// const HeartButton = styled(IconButton)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: whitesmoke;
//   border: 1px solid rgba(0, 0, 0, 0.12);
//   border-radius: 4px;
//   color: red;
//   transition: all 0.3s ease;
//   width: 50px;
//   height: 42px;

//   &:hover {
//     border-color: black;
//   }
// `

// const FavoriteButton = ({
//   item,
//   favoriteItems,
//   setFavoriteItems,
//   FilledIcon,
//   OutlinedIcon,
// }) => {
//   const [isFavorite, setIsFavorite] = useState(false)

//   useEffect(() => {
//     setIsFavorite(favoriteItems.some((favItem) => favItem.id === item.id))
//   }, [favoriteItems, item.id])

//   const toggleFavorite = () => {
//     if (isFavorite) {
//       setFavoriteItems((currentItems) =>
//         currentItems.filter((favItem) => favItem.id !== item.id)
//       )
//     } else {
//       setFavoriteItems((currentItems) => [...currentItems, item])
//     }
//     setIsFavorite(!isFavorite)
//   }

//   return (
//     <HeartButton onClick={toggleFavorite}>
//       {isFavorite ? <FilledIcon /> : <OutlinedIcon />}
//     </HeartButton>
//   )
// }

// export default FavoriteButton

import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import { IconButton } from "@mui/material"

const HeartButton = styled(IconButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: red;
  transition: all 0.3s ease;
  width: 50px;
  height: 42px;

  &:hover {
    border-color: black;
  }
`

const FavoriteButton = ({
  item,
  favoriteItems,
  setFavoriteItems,
  FilledIcon,
  OutlinedIcon,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favoriteItems.some((favItem) => favItem.id === item.id))
  }, [favoriteItems, item.id])

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavoriteItems((currentItems) =>
        currentItems.filter((favItem) => favItem.id !== item.id)
      )
    } else {
      setFavoriteItems((currentItems) => [...currentItems, item])
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <HeartButton onClick={toggleFavorite}>
      {isFavorite ? <OutlinedIcon /> : <FilledIcon />}
    </HeartButton>
  )
}

export default FavoriteButton

/* eslint-disable import/no-anonymous-default-export */
import { GetServerSideProps } from "next"
/**
 * ACTION TYPES
 */
const GET_RECENT = 'GET_RECENT'
const GET_FEATURED = 'GET_FEATURED'

/**
 * ACTION CREATORS
 */
const setRecent = (articles) => {
  return {
    type: GET_RECENT,
    recent,
  }
}

/**
 * THUNK CREATORS
 */

export const getRecent = () => {
    return async (dispatch) => {
      try {

      let recents = await prisma.articles.findMany({
        where: {
            published: true,
        },
        orderBy: {
            timeStamp: 'asc'
        },
        take: 3
      })
      dispatch(setRecent(JSON.parse(JSON.stringify(recents))))
    }
      catch(err){
        console.error(err)
      }
    }
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_RECENT:
      return action.articles
    default:
      return state
  }
}

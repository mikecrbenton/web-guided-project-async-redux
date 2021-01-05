import axios from 'axios'

const headers = {
   Accept: "application/json"
}


export const fetchJoke = () => {

   return (dispatch) => {
      // DISPATCH START
      dispatch( { type: "FETCHING_JOKE_START" } )
      // API
      axios.get("https://icanhazdadjoke.com/", { headers: headers} )
         .then( res => {
            dispatch( { type: "FETCHING_JOKE_SUCCESS", payload: res.data.joke } )
            console.log(res)
         })
         .catch( err => { 
            dispatch( { type: "FETCHING_JOKE_ERROR", payload: err.data.message })
            console.log(err) })
   }
}

// ALTERNATE WAY OF WRITING

// export const fetchJoke = () => (dispatch) => {
//    console.log("called")
//    // DISPATCH START
//    dispatch( { type: "FETCHING_JOKE_START" } )
//    // API
//    axios.get("https://icanhazdadjoke.com/", { headers: headers} )
//       .then( res => {
//          dispatch( { type: "FETCHING_JOKE_SUCCESS", payload: res.data.joke } )
//          console.log(res)
//       })
//       .catch( err => { 
//          dispatch( { type: "FETCHING_JOKE_ERROR", payload: err.data.message })
//          console.log(err) })

// }
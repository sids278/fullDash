import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    // console.log('data')
    try {
        const response = await fetch('https://communication-uat.1knetworks.com/api/v2/dashboard/line?date_from=2022-09-11&date_to=2023-08-10', {
            method: "GET",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcl9yb2xlIjpbXSwiaWF0IjoxNjc2MjgwMDI1LCJleHAiOjE3MDc4MTYwMjV9.0tI-40p6aC7eImYBM7M5BTDA0vy6ihiQ3UZhZkk1fa4',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((res) => {
            // console.log(res)
            return res
        })
        const data = await response;
        // console.log("Respone" + JSON.parse(JSON.stringify(data)))

        return data;
    } catch (error) {
        // throw new Error(error)
    }
})

interface stateInter {
    data: any[],
    isLoading: Boolean,
    error: null
}
const myState: stateInter = {
    data: [],
    isLoading: false,
    error: null
}
export const fetchslice = createSlice({
    name: 'fetch',
    initialState: myState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log('action.payload', action.payload)
            const newsms=action.payload.sms
            const newemail=action.payload.email
            const newnotfication=action.payload.notification
            const newwhattsapp=action.payload.whattsapp
            console.log(typeof([...newsms , ...newemail]) , 'sss')
            state.data = [...newsms , ...newemail,...newnotfication]

            console.log("State " + state.data)
            state.isLoading = false
        })
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true
            console.log("State Lading " + JSON.stringify(action.payload))
        })

        // builder.addCase(fetchPosts.rejected, (state, action) => {
        //     state.error = action.payload
        //   })

    },
});
export default fetchslice.reducer;







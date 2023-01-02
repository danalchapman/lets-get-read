export const getData = () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            return response.json()
        })
        .then(data => console.log(data.results))
}
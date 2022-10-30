const restEndPoint =
    'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address='

const getRents = async (e) => {
    e.preventDefault()
    const fullAddress = Object.values(address).join(', ')
    // const fullAddress = '839 McCullough Ave, Orlando, FL, 32803'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
        },
    }
    try {
        const response = await fetch(`${restEndPoint} ${fullAddress}`, options)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setApiResponse(jsonResponse)
    } catch (err) {
        console.error(err)
    }
}

export default getRents

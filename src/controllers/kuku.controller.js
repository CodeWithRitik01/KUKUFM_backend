import axios from "axios"

const getData = async(req, res) =>{
    try {
        const response = await axios.get("https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english")
        const data = response.data.items[0].banners
        return res.status(201).json({
            success:true,
            data
        })


    } catch (error) {
        console.log(error)
    }
}

const getTopPicks = async(req, res) =>{
    try {
        const response = await axios.get("https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english")
        const data = response.data.items[1].mixed_items

        return res.status(201).json({
            success:true,
            data
        })


    } catch (error) {
        console.log(error)
    }
}

const getTopTen = async(req, res) =>{
    try {
        const response = await axios.get("https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english")
        const data = response.data.items[3].mixed_content_items

        return res.status(201).json({
            success:true,
            data
        })


    } catch (error) {
        console.log(error)
    }
}

const getVipShows = async(req, res) =>{
    try {
        const response = await axios.get("https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english")
        const data = response.data.items[4].shows

        return res.status(201).json({
            success:true,
            data
        })


    } catch (error) {
        console.log(error)
    }
}
export {getData, getTopPicks, getTopTen, getVipShows}
import { useState, useEffect } from "react"
import axios from 'axios'

const Provinces = () => {

    const [listProvinces, setListProvinces] = useState([])
    const [currentProvince, setCurrentProvince] = useState('')
    const [listDistrict, setListDistrict] = useState([])
    const [currentDistrict, setCurrentDistrict] = useState('')
    const [listWards, setListWards] = useState([])



    useEffect(async () => {
        let res = await axios.get('https://provinces.open-api.vn/api/')
        let data = res && res.data ? res.data : []
        setListProvinces(data)
    }, [])

    useEffect(async () => {
        if (currentProvince && +currentProvince > 0) {
            let res = await axios.get(`https://provinces.open-api.vn/api/p/${currentProvince}?depth=2`)
            let data = res && res.data && res.data.districts ? res.data.districts : []
            setListDistrict(data)
        }
    }, [currentProvince])

    useEffect(async () => {
        if (currentDistrict && +currentDistrict > 0) {
            let res = await axios.get(`https://provinces.open-api.vn/api/d/${currentDistrict}?depth=2`)
            let data = res && res.data && res.data.wards ? res.data.wards : []
            setListWards(data)
        }
    }, [currentDistrict])

    const handleOnChangeProvince = (provinceCode) => {
        if (provinceCode && +provinceCode > 0) {
            setCurrentProvince(provinceCode)
        }
    }

    const handleOnChangeDistrict = (district) => {
        setCurrentDistrict(district)
    }

    return (
        <>
            <label htmlFor="provinces">Choose a province:</label>
            <select className="select-province" name="provinces" id="provinces" onChange={(e) => handleOnChangeProvince(e.target.value)}>
                <option value='0'>Select province</option>

                {listProvinces && listProvinces.length > 0
                    &&
                    listProvinces.map((province, index) => {
                        return (
                            <option key={province.codename} value={province.code}>{province.name}</option>
                        )
                    })
                }
            </select>
            <select name="districts" id="districts" onChange={(e) => handleOnChangeDistrict(e.target.value)}>
                <option value='0'>Select district</option>
                {listDistrict && listDistrict.length > 0
                    &&
                    listDistrict.map((district, index) => {
                        return (
                            <option key={district.codename} value={district.code}>{district.name}</option>
                        )
                    })
                }
            </select>

            <select name="wards" id="wards" >
                <option value='0'>Select communet</option>
                {listWards && listWards.length > 0
                    &&
                    listWards.map((ward, index) => {
                        return (
                            <option key={ward.codename} value={ward.code}>{ward.name}</option>
                        )
                    })
                }
            </select>
        </>

    )
}

export default Provinces
import React from 'react'


const dummyimages = [
    "https://download.logo.wine/logo/Google/Google-Logo.wine.png",
    "https://www.svgrepo.com/show/303143/microsoft-logo.svg",
    "https://logowik.com/content/uploads/images/flipkart.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png",
    "https://www.svgrepo.com/show/303377/ibm-logo.svg"
]
const AdvertisementPage = () => {

    return (
        <div className=' lg:px-16 py-3 md:px-8 px-4'>
            <div className="flex items-center justify-center ">
                <hr className="flex-grow border-t border-gray-300 mx-4 px-1z" />
                <span className="text-gray-600 text-2xl" >Top companies hiring now</span>
                <hr className="flex-grow border-t border-gray-300 mx-4" />
            </div>
           
           <div className=' flex items-center justify-between flex-wrap gap-1'>
           {
            dummyimages.map((item)=>{
                return(
                    <img height={80} width={150} src={item} alt="" />
                )
            })
           }
           </div>
        </div>

    )
}

export default AdvertisementPage

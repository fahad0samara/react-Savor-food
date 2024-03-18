function FoodAppSection() 
{
    return (
      <div>

<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


    <div className="w-full h-64 lg:w-1/2 lg:h-3/2">
        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1532939624-3af1308db9a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Delicious Food"/>
    </div>



    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Delicious Food</h2>
            <p className="mt-4">
                Discover a world of culinary delights with our mouthwatering dishes. From savory to sweet, our menu has something for every craving. Indulge in the finest ingredients expertly crafted into delectable dishes that will tantalize your taste buds.
            </p>
         
            <div className="mt-8">
                <a href="#"
                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Order Now</a>
            </div>
        </div>
    </div>

</div>

      </div>
    )
}

export default FoodAppSection